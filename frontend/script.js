
const form = document.getElementById("predictionForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    resultDiv.style.display = "block";
    resultDiv.innerHTML = "Analyzing customer data...";

    const data = {
        tenure: Number(document.getElementById("tenure").value),
        MonthlyCharges: Number(document.getElementById("MonthlyCharges").value),
        TotalCharges: Number(document.getElementById("TotalCharges").value),
        SeniorCitizen: Number(document.getElementById("SeniorCitizen").value),
        Partner_Yes: Number(document.getElementById("Partner_Yes").value),
        Dependents_Yes: Number(document.getElementById("Dependents_Yes").value),
        OnlineSecurity_Yes: Number(document.getElementById("OnlineSecurity_Yes").value),
        TechSupport_Yes: Number(document.getElementById("TechSupport_Yes").value),
        "Contract_One year": Number(document.getElementById("Contract_One year").value),
        "Contract_Two year": Number(document.getElementById("Contract_Two year").value),
        "InternetService_Fiber optic": Number(document.getElementById("InternetService_Fiber optic").value),
        "PaymentMethod_Electronic check": Number(document.getElementById("PaymentMethod_Electronic check").value)
    };

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/predict",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        const isRisk = result.prediction === 1;

        resultDiv.className = isRisk
            ? "result-risk"
            : "result-safe";

        resultDiv.innerHTML = `
            <div class="result-title">
                ${result.message}
            </div>

            <div class="result-probability">
                Churn Probability: <strong>${result.probability}%</strong>
            </div>
        `;

    } catch (error) {

        resultDiv.className = "result-risk";

        resultDiv.innerHTML = `
            <div class="result-title">
                Server Error
            </div>

            <div class="result-probability">
                Make sure FastAPI backend is running.
            </div>
        `;
    }
});