import pandas as pd
import numpy as np
import joblib

from sklearn.model_selection import train_test_split
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    classification_report
)

from xgboost import XGBClassifier

# =========================
# LOAD DATASET
# =========================

df = pd.read_csv("Telco-Customer-Churn.csv")

print("Dataset Loaded Successfully")
print(df.head())

# =========================
# DATA CLEANING
# =========================

if "customerID" in df.columns:
    df.drop("customerID", axis=1, inplace=True)

# Convert TotalCharges to numeric
df["TotalCharges"] = pd.to_numeric(
    df["TotalCharges"],
    errors="coerce"
)

# Fill missing values
df["TotalCharges"] = df["TotalCharges"].fillna(
    df["TotalCharges"].median()
)

# =========================
# TARGET COLUMN
# =========================

df["Churn"] = df["Churn"].map({
    "Yes": 1,
    "No": 0
})

# =========================
# ONE HOT ENCODING
# =========================

df = pd.get_dummies(df, drop_first=True)

# =========================
# FEATURE SELECTION
# =========================

selected_features = [
    'tenure',
    'MonthlyCharges',
    'TotalCharges',
    'SeniorCitizen',
    'Partner_Yes',
    'Dependents_Yes',
    'OnlineSecurity_Yes',
    'TechSupport_Yes',
    'Contract_One year',
    'Contract_Two year',
    'InternetService_Fiber optic',
    'PaymentMethod_Electronic check'
]

X = df[selected_features]

y = df['Churn']

# =========================
# TRAIN TEST SPLIT
# =========================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# =========================
# MODEL TRAINING
# =========================

model = XGBClassifier(
    n_estimators=300,
    learning_rate=0.05,
    max_depth=5,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=42,
    eval_metric='logloss'
)

model.fit(X_train, y_train)

print("\nModel Training Completed")

# =========================
# PREDICTIONS
# =========================

y_prob = model.predict_proba(X_test)[:, 1]

threshold = 0.45

y_pred = (y_prob >= threshold).astype(int)

# =========================
# EVALUATION
# =========================

accuracy = accuracy_score(y_test, y_pred)
precision = precision_score(y_test, y_pred)
recall = recall_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)

print("\n========== MODEL PERFORMANCE ==========\n")

print("Accuracy :", accuracy)
print("Precision:", precision)
print("Recall   :", recall)
print("F1 Score :", f1)

print("\n========== CLASSIFICATION REPORT ==========\n")

print(classification_report(y_test, y_pred))

# =========================
# SAVE MODEL
# =========================

joblib.dump(model, "churn_model.pkl")

joblib.dump(selected_features, "columns.pkl")

print("\nModel Saved Successfully")