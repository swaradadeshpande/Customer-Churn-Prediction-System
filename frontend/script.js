const form = document.getElementById("predictionForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

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

    const response = await fetch(
        "http://127.0.0.1:8000/predict",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    );

    const result = await response.json();

    document.getElementById("result").innerHTML = `
        ${result.message}<br><br>
        Churn Probability: ${result.probability}%
    `;
});