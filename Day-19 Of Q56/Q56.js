// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixedValues = ["coding", true, "Beautiful", 8, "Typescript", false, "Strawberry"];
//filter only string values
var stringValues = mixedValues.filter(function (item) { return typeof item === "string"; });
console.log(stringValues);
