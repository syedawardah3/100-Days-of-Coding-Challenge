"use strict";
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
let studentsData = new Map();
studentsData.set(10001, "Wardah");
studentsData.set(10002, "Simmi");
studentsData.set(10003, "Asma");
studentsData.set(10004, "Sana");
studentsData.forEach((name, id) => {
    console.log(`Student Name: ${name} & ID: ${id}`);
});
