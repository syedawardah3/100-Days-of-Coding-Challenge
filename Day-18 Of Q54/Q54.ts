// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.


// A way to make a flexible list
function ObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject:any = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
  }
  
  // Using the flexible list setup for a user's preference
  let userPreference1 = ObjectWithDynamicKey("name", "Wardah Shah");
  let userPreference = ObjectWithDynamicKey("Data", "Wardah loves to Code");
  // Showing the user's choice
  console.log(userPreference1);
  console.log(userPreference);