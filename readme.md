# Customer Churn Prediction System

A full-stack Machine Learning web application that predicts whether a customer is likely to churn (leave the service) based on customer subscription details and usage behavior.

This project uses Machine Learning with XGBoost, FastAPI backend, and a responsive frontend built using HTML, CSS, and JavaScript.

---

# 🚀 Features

- Customer churn prediction using Machine Learning
- Real-time prediction with probability score
- FastAPI backend API
- Responsive and modern frontend UI
- XGBoost classification model
- Data preprocessing and feature engineering
- REST API integration
- Full-stack architecture
- Beginner-friendly and resume-worthy project

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
