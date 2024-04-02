/*88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.*/

function roundNearestInteger(num:number):number{
    return Math.round(num);
}

console.log(roundNearestInteger(7.4));//outputs 7
console.log(roundNearestInteger(3.6));//outputs 4