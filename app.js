
function updateProductNumber(product, price, isIncreasing) {
    const productNumber = document.getElementById(product + '-number');
    const previousCaseInput = productNumber.value;
    let newProductInput = parseInt(previousCaseInput);
    if (isIncreasing) {
        newProductInput = newProductInput + 1;
    } else if (newProductInput > 0) {
        newProductInput = newProductInput - 1;
    }
    productNumber.value = newProductInput;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = newProductInput * price;
    //calculate total
    calculateTotal();
};


function getInput(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInput('phone') * 1219;
    const caseTotal = getInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    //update subtotal
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})


// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false)
})

