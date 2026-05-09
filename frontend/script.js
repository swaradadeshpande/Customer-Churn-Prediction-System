const form = document.getElementById("predictionForm");
const resultDiv = document.getElementById("result");

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

    resultDiv.innerHTML = `
        <div style="
            padding:25px;
            border-radius:20px;
            background:rgba(255,255,255,0.08);
            text-align:center;
        ">
            Analyzing Customer Data...
        </div>
    `;

    try {

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

        const isRisk = result.prediction === 1;

        resultDiv.innerHTML = `
            <div style="
                padding:35px;
                border-radius:24px;
                text-align:center;
                background:${isRisk
                    ? 'rgba(239,68,68,0.15)'
                    : 'rgba(34,197,94,0.15)'};
                border:1px solid ${isRisk
                    ? 'rgba(239,68,68,0.4)'
                    : 'rgba(34,197,94,0.4)'};
            ">

                <div style="font-size:60px;margin-bottom:20px;">
                    ${isRisk
                        ? '<i class="bi bi-exclamation-triangle-fill"></i>'
                        : '<i class="bi bi-check-circle-fill"></i>'}
                </div>

                <h2 style="margin-bottom:15px;">
                    ${result.message}
                </h2>

                <p style="font-size:20px;color:#cbd5e1;">
                    Churn Probability:
                    <strong>${result.probability}%</strong>
                </p>

            </div>
        `;

    } catch(error){

        resultDiv.innerHTML = `
            <div style="
                padding:30px;
                border-radius:20px;
                background:rgba(239,68,68,0.15);
                text-align:center;
            ">
                Backend Server Not Running
            </div>
        `;
    }
});