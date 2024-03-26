const calculate = document.getElementById("btnCalculate");
calculate.addEventListener("click", calculateTotal);

function calculateTotal(event){
    event.preventDefault();

    const tipAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    let iTotal = (tipAmount + (tipAmount * tipPercentage/100));
    const totalAmount = document.getElementById("totalAmount");
    totalAmount.textContent = `Grand Total: $${iTotal.toFixed(2)}`;
}

