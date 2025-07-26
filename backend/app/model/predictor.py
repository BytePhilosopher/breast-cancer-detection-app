import joblib
import numpy as np
import os

# Dynamically load the model (once)
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model.joblib")
model = joblib.load(MODEL_PATH)

def predict(features: list):
    features_array = np.array(features).reshape(1, -1)
    prediction = model.predict(features_array)[0]
    return "Malignant" if prediction == 1 else "Benign"
