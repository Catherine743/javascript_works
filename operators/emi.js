var amount = 5000000;
var interest = 9;
var period = 20;
var monthlyRate = interest / 12 / 100;
var months = period * 12;

monthlyEMI = (amount * monthlyRate * ((1 + monthlyRate) ** months)) / (((1 + monthlyRate) ** months)- 1)

console.log(Math.round(monthlyEMI));


