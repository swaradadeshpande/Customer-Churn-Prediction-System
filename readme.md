Customer Churn Prediction System

An end-to-end Machine Learning based Customer Churn Prediction web application that predicts whether a customer is likely to leave a telecom service provider based on customer behavior and subscription details.

The project combines:

Machine Learning (XGBoost)
FastAPI Backend
Responsive Frontend (HTML, CSS, JavaScript)
Real-time Churn Prediction
Full-stack Integration
🚀 Features
Predicts customer churn probability
Real-time prediction using trained ML model
Responsive and modern frontend UI
FastAPI REST API backend
XGBoost Machine Learning model
Probability-based prediction
Feature engineering and preprocessing
Easy deployment and scalability
🧠 Machine Learning Details
Problem Statement

Customer churn is a major business problem in telecom and SaaS industries. This project predicts whether a customer is likely to leave the service using customer demographic and subscription information.

ML Algorithm Used
XGBoost Classifier

XGBoost was used because:

High performance on structured datasets
Better handling of feature importance
Improved prediction accuracy
Strong industry relevance
Features Used

The model uses the following features:

Tenure
Monthly Charges
Total Charges
Senior Citizen
Partner
Dependents
Online Security
Tech Support
Contract Type
Internet Service
Payment Method
📊 Model Performance
Metric	Score
Accuracy	~79%
Precision	~63%
Recall	~51%
F1 Score	~56%

Metrics may vary slightly depending on train-test split and environment.

🏗️ Tech Stack
Frontend
HTML5
CSS3
JavaScript
Backend
FastAPI
Python
Machine Learning
Pandas
NumPy
Scikit-learn
XGBoost
Joblib
📁 Project Structure
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
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone <your-repository-link>
2️⃣ Navigate to Project
cd Customer-Churn-Prediction-System
🔧 Backend Setup
3️⃣ Install Dependencies
cd backend

pip install -r requirements.txt
🧪 Train Machine Learning Model
4️⃣ Navigate to Model Folder
cd model
5️⃣ Run Model Training
python train_model.py

After successful execution:

churn_model.pkl
columns.pkl

will be generated automatically.

🚀 Run FastAPI Backend
6️⃣ Navigate Back
cd ..
7️⃣ Start Backend Server
uvicorn app.main:app --reload

Backend will run at:

http://127.0.0.1:8000
🌐 Frontend Setup
8️⃣ Open Frontend

Open:

frontend/index.html

📈 Future Improvements
Authentication system
Database integration
Prediction history tracking
Admin dashboard
Data visualization dashboard
Deployment on cloud platforms
Email alerts for high-risk customers
AI chatbot integration
🎯 Learning Outcomes

This project demonstrates:

Data preprocessing
Feature engineering
Classification algorithms
Model evaluation
REST API development
Frontend-backend integration
Full-stack ML deployment
🏆 Use Cases
Telecom companies
SaaS platforms
OTT platforms
Banking sector
Subscription-based businesses
📚 Dataset

Dataset used:
Telco Customer Churn Dataset

Source:
Kaggle Telco Customer Churn Dataset

👨‍💻 Author

Swarada Deshpande

📄 License

This project is for educational and academic purposes.

