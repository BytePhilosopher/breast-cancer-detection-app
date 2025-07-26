from fastapi import FastAPI
from pydantic import BaseModel
from app.model.predictor import predict

app = FastAPI()

# Define input schema
class InputFeatures(BaseModel):
    features: list[float]

@app.get("/")
def root():
    return {"message": "Breast Cancer Detection API"}

@app.post("/predict")
def get_prediction(data: InputFeatures):
    result = predict(data.features)
    return {"prediction": result}
