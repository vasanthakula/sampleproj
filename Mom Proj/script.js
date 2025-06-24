function findPointValue(inp) {
    let decimalValue = inp / 20;
    let afterPointValue = decimalValue % 1;
    let exactPointValue = Math.round(afterPointValue * 100) / 100;
    return exactPointValue;
}

function calculateScores(inputs) {
    let results = [];

    for (let i = 0; i < inputs.length; i++) {
        let inp = inputs[i];
        let exactPointValue = findPointValue(inp);
        let result = 0;

        if (inp < 61) {
            result = (exactPointValue < 0.5 ? Math.floor(inp / 20) : Math.floor(inp / 20) + 1) * 250;
        } else if (inp <= 100) {
            result = (exactPointValue < 0.5 ? Math.floor(inp / 20) + 1 : Math.floor(inp / 20) + 2) * 250;
        } else if (inp <= 200) {
            result = (exactPointValue < 0.5 ? Math.floor(inp / 20) + 2 : Math.floor(inp / 20) + 3) * 250;
        } else if (inp <= 300) {
            result = (exactPointValue < 0.5 ? Math.floor(inp / 20) + 3 : Math.floor(inp / 20) + 4) * 250;
        } else if (inp <= 600) {
            result = (exactPointValue < 0.5 ? Math.floor(inp / 20) + 4 : Math.floor(inp / 20) + 5) * 250;
        } else {
            result = (exactPointValue < 0.5 ? Math.floor(inp / 20) + 5 : Math.floor(inp / 20) + 6) * 250;
        }

        results.push(`Input ${i + 1}: ${inp} → Score: ${result}`);
    }

    return results;
}

document.getElementById("scoreForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const inputElements = document.querySelectorAll(".input-group input");
    const values = Array.from(inputElements).map(input => parseInt(input.value.trim(), 10));
    const output = calculateScores(values).join("\n");

    document.getElementById("output").textContent = output;
});
