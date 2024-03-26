"use strict";
// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
function blockScope() {
    let age = 19;
    const myName = "wardah shah";
    console.log(`${myName} , ${age}`);
}
;
blockScope();
//  age = 45 //this will give error because let is a blockscope elemment
//  myName="naima"//this will also give error because const is also a blockscope variable
// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}
// try {
//     console.log(blockLet); // This will fail
// } catch (error) {
//     console.log("`blockLet` is not accessible outside the block.");
// }
// try {
//     console.log(blockConst); // This will also fail
// } catch (error) {
//     console.log("`blockConst` is not accessible outside the block.");
// }
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
