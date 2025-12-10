// 1 Q1. Create variables for a student’s name,
//   age, isEnrolled (boolean), and totalMarks. Log a
//   sentence like: 'John is 20 years old, enrolled: true, scored 85 marks.

// let name = "John";
// let age = 22;
// let isEnrolled = true;
// let totalMarks = 85;

// console.log(
//   `${name} is ${age} years old, enrolled: ${isEnrolled}, scored ${totalMarks} marks.`
// );

// 1 Q2. Create an array of 5 fruits.
// 2 - Add one more fruit to the end.
// 3 - Remove the first fruit.
// 4 ■ Note: Explore Array methods `shift()` and `unshift()` to understand how they work for
//     removing and adding elements at the beginning.
// 5 - Print the final array and its length.

// let arr = ["Apple", "Banana", "Mango", "Orange", "grapes"];

// arr.push("Pineapple");

// arr.shift();
// arr.unshift("Apple");
// console.log(arr);

// Q3. Write a function `findMax(arr)` that takes an array of numbers and returns the maximum
//     number without using Math.max()

// function findMax(arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// let arr = [10, 25, 8, 99, 54];

// let result = findMax(arr);
// console.log(result);

// Q7. Create a function calculateArea(radius) that returns the area of a circle. (Formula: πr², use
//     3.14 for π)

// function calculateArea(radius) {
//   // Formula: Pie * r^2 => 3.14 * radius * radius
//   let area = 3.14 * radius * radius;
//   return area;
// }

// let answer = calculateArea(5);
// console.log(answer);

// Q8. Create an object person with properties: name, age, city. Add a method introduce() that
//     logs: 'Hi, I’m from .'.

// let person = {
//   name: "Ayaan",
//   age: 22,
//   city: "Srinagar",
//   introduce: function () {
//     console.log(`Hi I am ${this.name} from ${this.city}.`);
//   },
// };

// person.introduce();
