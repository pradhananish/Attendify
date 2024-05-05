import numpy as np
from PIL import Image
import os
import cv2

# Method to train custom classifier to recognize face
def train_classifier(data_dir):
    faces = []
    ids = []

    # Iterate through each subfolder (user) in the data directory
    for user_folder in os.listdir(data_dir):
        user_path = os.path.join(data_dir, user_folder)
        if not os.path.isdir(user_path):
            continue  # Skip if not a directory

        # Get the ID of the user from the folder name
        user_id = int(user_folder.split('_')[1])

        # Iterate through each image in the user's folder
        for image_file in os.listdir(user_path):
            image_path = os.path.join(user_path, image_file)

            # Read the image and convert it to grayscale
            img = Image.open(image_path).convert('L')
            image_np = np.array(img, 'uint8')

            # Append the image and corresponding user ID to the lists
            faces.append(image_np)
            ids.append(user_id)

    ids = np.array(ids)

    # Train and save classifier
    clf = cv2.face.LBPHFaceRecognizer_create()
    clf.train(faces, ids)
    clf.write("classifier.yml")
    print("Classifier trained successfully")

# Call the train_classifier function with the main data directory
train_classifier("data")
