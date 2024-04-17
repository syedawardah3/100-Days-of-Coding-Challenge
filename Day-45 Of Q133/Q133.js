"use strict";
// Question 133: Write a JavaScript object and convert it into a JSON string.
const myData = {
    name: "wardah shah",
    age: 16,
    city: "karachi",
    education: "Matric"
};
const jsonString = JSON.stringify(myData);
console.log(jsonString);
