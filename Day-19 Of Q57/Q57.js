// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var studentGrades = [85, 92, 78, 90, 88];
//average grade
var sum = studentGrades.reduce(function (total, grade) { return total + grade; }, 0);
var average = sum / studentGrades.length;
console.log("The average grade is: ".concat(average));
