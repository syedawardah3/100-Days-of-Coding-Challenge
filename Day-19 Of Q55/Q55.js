// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var originalArray = [2, 3, 4, 5, 6, 7, 8, 9];
//twice the orriginal array
var doubleArray = originalArray.map(function (number) { return number * 2; });
console.log(doubleArray);
