from fastapi import FastAPI
from app.model.predictor import predict

app = FastAPI()

@app.get('/')
def read_root():
    return {'message': 'Breast Cancer Detection API'}