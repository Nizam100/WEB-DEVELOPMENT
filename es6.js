// 1. Variables can be declared with let and const also.
//    JS used var - Es6 introduced new ways like let and const.

// var name1 = "Ayaan"; //Old way
// let name2 = "Shahid";//New way
// const name3 = "Amaan"; //New way

// -----------------------------------------------------------------------------------

// 2. Template Literals: Easier string building.
//    Syntax: Use backticks (``) instead of quotes(""), and ${variable}
//    to insert values.

// let name = "Ayaan";
// let age = 22;

// console.log("My name is " + name + " and I am " + age + " years old.");
// console.log(`My name is ${name} and I am ${age} years old.`);

// ------------------------------------------------------------------------------------

// 3. Arrow functions:
// (a) If only one line and one return value
//     no need for {} or return.
// (b) If multiple lines use {}.

// Syntax:
// const greet = (name) => `Hello ${name}`;
// let res = greet("Ayaan");
// console.log(res);

// Sum using normal function:
// function sum(a, b) {
//   console.log(a + b);
// }

// sum(10, 20);

// Sum using arrow function:
// const sum = (a, b) => a + b;

// let res = sum(10, 20);
// console.log(res);

// ------------------------------------------------------------------------------------------

// 4. Destructuring: To extract values from arrays and objects
//                    and put them into different variables.

// Array Destructuring:
// let colors = ["red", "green", "blue", "orange", "purple", "voilet"];
// let [first, second] = colors;
// console.log(first);
// console.log(second);

// Object Destructuring:
// let person = {
//   name: "Ayaan",
//   age: 22,
//   city: "Srinagar",
//   pancard: "AETPI9866"
// };

// If we have to iclude default values for some keys we can
// assign like this: {pancard: "Not included"}
// let { name, city, pancard="Not included" } = person;
// console.log(name);
// console.log(city);
// console.log(pancard);

// ------------------------------------------------------------------------------
