// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface Student  {
    name:string;
    age:number;
    coursesParticipated : string[];
};

let studentData :Student = {
 name:"wardah",
 age:19,
 coursesParticipated : ["GenerativeAI" , "Artificial Intelligence" , "Metaverse"]
};
console.log(studentData);