// ?-------------------- PROBLEMS ON ARRAYS ---------------------------------------

// Problem 1 (Horizontally printing the array):
// let arr = ["10", 20, 30, 40, 50];
// let bag = "";

// for (let i = 0; i < arr.length; i++) {
//   bag = bag + arr[i] + " ";
// }

// console.log(bag);

// ----------------------------------------------------------

// Problem 2(Sum of all even numbers in an array):
// let arr = [2, 5, 8, 11, 14, 17];
// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] % 2 == 0) {
//     sum = sum + arr[i];
//   }
// }
// console.log(sum);

//----------------------------------

// Problem 3(Count of all numbers greater than 50):
// let count = 0;
// let arr = [10, 75, 45, 55, 65, 35];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 50) {
//     // console.log(arr[i]);
//     count = count + 1;
//   }
// }
// console.log(count);

// -----------------------------------------------

// Problem 4(Print result of a student based on marks):
// let arr = [12, 45, 7, 89, 23];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 35) {
//     console.log(arr[i], "so pass");
//   } else {
//     console.log(arr[i], "so fail");
//   }
// }

// -----------------------------------------------------------------

// Problem 5(Print total price of all elements but skip any item below 100
//           and stop execution if total sum exceeds 2000):

// let arr = [199, 499, 1299, 99, 599];
// let sum = 0;
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] > 2000) {
//     sum = sum + arr[i];
//   }
//   if (sum > 1000) {
//     break;
//   }
// }
// console.log(sum);

// ----------------Problem 6(Finding second largest digit in an array)--------------------:

// let arr = [5, 7, 2, 8, 10, 9];

// let max = -Infinity; //8

// let secondMax = -Infinity; //7

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secondMax = max;
//     max = arr[i];
//   } else if (arr[i] > secondMax && arr[i] < max) {
//     secondMax = arr[i];
//   }
// }

// console.log(secondMax);

// DRY RUN OF ABOVE QUESTION:
// 1. arr[i] => 5 => 5 > -Infinity true
//secondMax = -Infinity
//max = 5

// 2. arr[i] => 7 => 7 > 5 true
//secondMax = 5
//max = 7

// ------------------------------------------------------------------------------

// -------------Problem 7(Finding total marks of each student i.e, each array)-------------:

// let marks = [
//   [45, 67, 81],  
//   [88, 72, 90],  
//   [60, 75, 68], 
// ];

// let totalMarks = [];

// for (let i = 0; i < marks.length; i++) {
//   let student = marks[i];
//   let sum = 0;
//   for (let j = 0; j < student.length; j++) {
//     sum = sum + student[j];
//   }
//   totalMarks.push(sum);
// }

// console.log(totalMarks);
