# Customer Churn Prediction System

A full-stack Machine Learning web application that predicts whether a customer is likely to churn (leave the service) based on customer subscription details and usage behavior.

This project uses Machine Learning with XGBoost, FastAPI backend, and a responsive frontend built using HTML, CSS, and JavaScript.

---


---

# 🧠 Problem Statement

Customer churn is one of the biggest business challenges in telecom, SaaS, banking, and subscription-based services.

The goal of this project is to predict whether a customer is likely to leave the service based on customer demographics, billing information, and subscribed services.

---

# 🛠️ Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- FastAPI
- Python

## Machine Learning
- Pandas
- NumPy
- Scikit-learn
- XGBoost
- Joblib

---

# 📊 Machine Learning Model

## Algorithm Used
- XGBoost Classifier

## Why XGBoost?
- High performance on structured/tabular datasets
- Better accuracy and optimization
- Handles feature importance efficiently
- Widely used in industry applications

---

# 📈 Model Performance

| Metric | Score |
|---|---|
| Accuracy | ~79% |
| Precision | ~63% |
| Recall | ~51% |
| F1 Score | ~56% |

> Metrics may vary slightly depending on train-test split.

---

# 📁 Project Structure

```text
Customer-Churn-Prediction-System/
│
├── backend/
│   │
│   ├── model/
│   │   ├── train_model.py
│   │   ├── Telco-Customer-Churn.csv
│   │   ├── churn_model.pkl
│   │   ├── columns.pkl
│   │
│   ├── app/
│   │   ├── main.py
│   │
│   ├── requirements.txt
│
├── frontend/
│   │
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
└── README.md

# ⚙️ Installation and Setup

## 1. Clone Repository

```bash
git clone <your-repository-link>
```

---

## 2. Navigate to Project Directory

```bash
cd Customer-Churn-Prediction-System
```

---

# 🔧 Backend Setup

## 3. Install Dependencies

```bash
cd backend

pip install -r requirements.txt
```

---

# 🧪 Train Machine Learning Model

## 4. Navigate to Model Folder

```bash
cd model
```

---

## 5. Run Model Training Script

```bash
python train_model.py
```

After successful execution:

- `churn_model.pkl`
- `columns.pkl`

will be generated automatically.

---

# 🚀 Run FastAPI Backend

## 6. Navigate Back

```bash
cd ..
```

---

## 7. Start Backend Server

```bash
uvicorn app.main:app --reload
```

Backend will run at:

```text
http://127.0.0.1:8000
```

---

# 🌐 Run Frontend

Open the following file in browser:

```text
frontend/index.html
```

---

# 📌 API Endpoint

## Predict Customer Churn

### Endpoint

```text
POST /predict
```

---

## Sample Input

```json
{
  "tenure": 2,
  "MonthlyCharges": 95,
  "TotalCharges": 180,
  "SeniorCitizen": 0,
  "Partner_Yes": 0,
  "Dependents_Yes": 0,
  "OnlineSecurity_Yes": 0,
  "TechSupport_Yes": 0,
  "Contract_One year": 0,
  "Contract_Two year": 0,
  "InternetService_Fiber optic": 1,
  "PaymentMethod_Electronic check": 1
}
```

---

## Sample Output

```json
{
  "prediction": 1,
  "probability": 78.45,
  "message": "Customer likely to churn"
}
```

---

# 📊 Features Used for Prediction

- Tenure
- Monthly Charges
- Total Charges
- Senior Citizen
- Partner
- Dependents
- Online Security
- Tech Support
- Contract Type
- Internet Service Type
- Payment Method

---

# 🎯 Learning Outcomes

This project demonstrates:

- Data preprocessing
- Feature engineering
- Machine Learning model training
- Classification algorithms
- Model evaluation metrics
- REST API development
- Frontend-backend integration
- Full-stack ML deployment

---

# 🚀 Future Enhancements

- User authentication
- Database integration
- Prediction history tracking
- Interactive dashboard charts
- Cloud deployment
- Admin analytics panel
- Email alerts for churn-risk customers
- AI chatbot support

---

# 🏢 Real-World Applications

- Telecom Companies
- SaaS Platforms
- OTT Services
- Banking Systems
- Subscription-based Businesses

---

# 📚 Dataset

Dataset Used:  
Telco Customer Churn Dataset

Source:  
https://www.kaggle.com/datasets/blastchar/telco-customer-churn

---

# 👨‍💻 Author

Swarada Deshpande

---

