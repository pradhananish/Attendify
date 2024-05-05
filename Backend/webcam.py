import json
import cv2

def load_id_names(path="id_names.json"):
    with open(path, "r") as file:
        id_names = json.load(file)
    return id_names



# Method to draw boundary around the detected feature
def draw_boundary(img, classifier, scaleFactor, minNeighbors, color, text, clf):
    id_names = load_id_names()
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    features = classifier.detectMultiScale(gray_img, scaleFactor, minNeighbors)
    coords = []
    for (x, y, w, h) in features:
        cv2.rectangle(img, (x, y), (x+w, y+h), color, 2)
        id_predicted, confidence = clf.predict(gray_img[y:y+h, x:x+w])
        if confidence > 60:  # Check if confidence is greater than 60
            name = "Unknown"
        else:
            name = id_names.get(str(id_predicted), "Unknown")
           
        cv2.putText(img, f"{name} - {confidence:.2f}", (x, y-4), cv2.FONT_HERSHEY_SIMPLEX, 0.8, color, 1, cv2.LINE_AA)
        coords = [x, y, w, h]
    return coords

# Method to recognize the person
def recognize(img, clf, faceCascade):
    color = {"blue": (255, 0, 0), "red": (0, 0, 255), "green": (0, 255, 0), "white": (255, 255, 255)}
    coords = draw_boundary(img, faceCascade, 1.1, 10, color["white"], "Face", clf)
    return img

# Loading classifiers
faceCascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
clf = cv2.face.LBPHFaceRecognizer_create()
clf.read("classifier.yml")

# Capturing real time video stream
video_capture = cv2.VideoCapture(0)

while True:
    # Reading image from video stream
    _, img = video_capture.read()
    # Call method we defined above
    img = recognize(img, clf, faceCascade)
    # Displaying processed image in a new window
    cv2.imshow("Face Detection", img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Releasing webcam
video_capture.release()
# Destroying all OpenCV windows
cv2.destroyAllWindows()


