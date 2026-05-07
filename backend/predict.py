import joblib
import numpy as np

# Load trained model
model = joblib.load('model.pkl')


def predict_disease(data):

    prediction = model.predict([
        np.array(data)
    ])

    return int(prediction[0])