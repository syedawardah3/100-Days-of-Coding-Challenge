// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var computerProgrammerSkills = {
    codingLanguages: ["Javascript", "Python", "C++"],
    tools: ["Docker", "Git", "Webpack"],
    softwareFrameworks: ["Angular", "React", "Vue"]
};
// Getting specific skills from the list
var codingLanguages = computerProgrammerSkills.codingLanguages, softwareFrameworks = computerProgrammerSkills.softwareFrameworks, tools = computerProgrammerSkills.tools;
// Showing a skill from each category
console.log("Language: ".concat(codingLanguages[0], ", Framework: ").concat(softwareFrameworks[0], ", Tool: ").concat(tools[0]));
console.log("Language: ".concat(codingLanguages[1], ", Framework: ").concat(softwareFrameworks[1], ", Tool: ").concat(tools[1]));
console.log("Language: ".concat(codingLanguages[2], ", Framework: ").concat(softwareFrameworks[2], ", Tool: ").concat(tools[2]));
