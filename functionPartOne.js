let billAmount = parseInt(Math.random() * 1000);
let tipPercentage = 20;

let gratuity = function(billAmount, tipPercentage) {
    tipPercentage = tipPercentage/100;
    result = billAmount*tipPercentage;
    return result;
}

let totalWithGratuity = function(billAmount,tipPercentage) {
    let amountToAdd = gratuity(billAmount, tipPercentage);
    result = billAmount + amountToAdd;
    result = result.toFixed(2);
    return result;
}

console.log(billAmount)
console.log(tipPercentage)
console.log("Your total amount, including gratuity, is " + totalWithGratuity(billAmount, tipPercentage));


