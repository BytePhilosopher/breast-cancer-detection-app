import joblib
import numpy as np

# Load model once
model = joblib.load("backend/app/model/model.joblib")

def predict(features: list):
    # Convert to 2D array for sklearn
    features_array = np.array(features).reshape(1, -1)
    prediction = model.predict(features_array)[0]
    return "Malignant" if prediction == 1 else "Benign"
