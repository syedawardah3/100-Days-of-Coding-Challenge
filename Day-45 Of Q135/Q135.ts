// Question 135: Explain how you can format a JSON string with proper indentation for readability.

const myData = {
    name: "wardah shah",
    age: 16,
    city: "karachi",
    education:"Matric"
  };
  
  // Converts the object into a JSON string with indentation
  const jsonString = JSON.stringify(myData, null, 2); // The '2' specifies the number of spaces to use as white space
  
  console.log(jsonString);
  
  // Shows how adding indentation to the JSON string makes it easier to read.