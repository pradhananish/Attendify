import numpy as np
from PIL import Image
import os
import cv2


def train_classifier(data_dir):
    faces = []
    ids = []


    for user_folder in os.listdir(data_dir):
        user_path = os.path.join(data_dir, user_folder)
        if not os.path.isdir(user_path):
            continue  


        user_id = int(user_folder.split('_')[1])


        for image_file in os.listdir(user_path):
            image_path = os.path.join(user_path, image_file)

      
            img = Image.open(image_path).convert('L')
            image_np = np.array(img, 'uint8')


            faces.append(image_np)
            ids.append(user_id)

    ids = np.array(ids)

    clf = cv2.face.LBPHFaceRecognizer_create()
    clf.train(faces, ids)
    clf.write("classifier.yml")
    print("Classifier trained successfully")


train_classifier("data")
