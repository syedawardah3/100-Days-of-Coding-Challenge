// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function logObjectProperties(object) {
    for (var property in object) {
        console.log("".concat(property, ": ").concat(object[property]));
    }
}
logObjectProperties({ name: "wardah shah", hobby: "Coding", contactNo: 90078601, city: "karachi" });
