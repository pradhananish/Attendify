import cv2
import os

import os
import cv2

def generate_dataset(img, user_id, img_id):
    # Creating a directory for each user if it doesn't exist
    user_folder = f"data/user_{user_id}"
    if not os.path.exists(user_folder):
        os.makedirs(user_folder)
    # Check for the highest existing image ID for the user
    existing_images = os.listdir(user_folder)
    existing_ids = [int(name.split('.')[2]) for name in existing_images if name.startswith(f"user.{user_id}.")]
    max_id = max(existing_ids) if existing_ids else 0
    # Increment the image ID for the new image
    new_img_id = max_id + 1
    # Writing image in user specific data dir with the new image ID
    cv2.imwrite(f"{user_folder}/user.{user_id}.{new_img_id}.jpg", img)
    print(f"Saved user.{user_id}.{new_img_id}.jpg")


# Method to draw boundary around the detected feature
def draw_boundary(img, classifier, scaleFactor, minNeighbors, color, text):    
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    features = classifier.detectMultiScale(gray_img, scaleFactor, minNeighbors)
    coords = []
    for (x, y, w, h) in features:
        cv2.rectangle(img, (x, y), (x+w, y+h), color, 2)
        cv2.putText(img, text, (x, y-4), cv2.FONT_HERSHEY_SIMPLEX, 0.8, color, 1, cv2.LINE_AA)
        coords = [x, y, w, h]
    return coords

# Method to detect the features
def detect(img, faceCascade, img_id):
    color = {"blue":(255,0,0), "red":(0,0,255), "green":(0,255,0), "white":(255,255,255)}
    coords = draw_boundary(img, faceCascade, 1.1, 10, color['blue'], "Face")
    if len(coords)==4:
        roi_img = img[coords[1]:coords[1]+coords[3], coords[0]:coords[0]+coords[2]]
        userId=1
        generate_dataset(roi_img, userId, img_id)
    return img

# Load classifiers
faceCascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# Capture real-time video stream
video_capture = cv2.VideoCapture(0)


img_id = 0
while img_id < 200:
    if img_id % 49 == 0:
        print("Collected", img_id + 1, "images")
    _, img = video_capture.read()
    img = detect(img, faceCascade, img_id)
    cv2.imshow("Face Detection", img)
    img_id += 1
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release webcam
video_capture.release()
cv2.destroyAllWindows()
