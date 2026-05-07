from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
import os
app = FastAPI()

# Load model and columns

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(BASE_DIR, "..", "model", "churn_model.pkl")
columns_path = os.path.join(BASE_DIR, "..", "model", "columns.pkl")

model = joblib.load(model_path)
columns = joblib.load(columns_path)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Customer Churn Prediction API Running"
    }

@app.post("/predict")
def predict(data: dict):

    input_data = []

    for column in columns:
        input_data.append(data[column])

    input_array = np.array(input_data).reshape(1, -1)

    probability = model.predict_proba(input_array)[0][1]

    threshold = 0.45

    prediction = int(probability >= threshold)

    return {
        "prediction": prediction,
        "probability": round(float(probability) * 100, 2),
        "message": (
            "Customer likely to churn"
            if prediction == 1
            else "Customer likely to stay"
        )
    }