// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

function combineStringNumber (text :string , age:number) {
    
    return text + age
}

console.log(combineStringNumber("My Age :" , 19));