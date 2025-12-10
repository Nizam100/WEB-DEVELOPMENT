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

// ---------------PROBLEMS USING FUNCTIONS--------------------------------------:

// Problem 1: Write a function sumOfEvens(arr) that returns
//            he sum of all even numbers in an array:

// let arr = [4, 2, 5, 6, 9, 10];

// function sumOfEvens(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum = sum + arr[i];
//     }
//   }
//   return sum;
// }

// let answer = sumOfEvens(arr);
// console.log(answer);

// ---------------------------------------------------------

// Problem 2: Write a function reverseString(str) that returns
//            the reversed version of the input string

// function reverseString(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result = result + str[i];
//   }
//   return result;
// }

// let answer = reverseString("leetcode");
// console.log(answer);

// -------------------------------------------------------------------

// Problem 3: Write a function isPalindrome(str) that checks if the
//            given string is a palindrome.

// let str = "racecar";

// function isPalindrome(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]; //=> reversed = reversed + str[i]
//   }
//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let result = isPalindrome(str);
// console.log(result);

// -------------------------------------------------------------------------

// let arr = [12, 8, 7, 5, 13];

// Problem 4: Write a function checkPrime(arr) to check if the
//            numbers in the given array are primw or not.

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// function checkPrime(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let result = isPrime(arr[i]);
//     if (result === true) {
//       console.log(arr[i] + " is a prime number");
//     } else {
//       console.log(arr[i] + " is not a prime number");
//     }
//   }
// }

// checkPrime(arr);

// Problem 5: Write a function finfLongestString(arr) to find
//            longest word in string.

// let arr = ["abc", "bacd", "aya", "asif", "burhaan"];

// function findLongestString(arr) {
//   let maxLen = 0;
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > maxLen) {
//       maxLen = arr[i].length;
//       result = arr[i];
//     }
//   }
//   return result;
// }

// let answer = findLongestString(arr);
// console.log(answer);

// --------------------------PROBLEMS ON OBJECTS AND ARRAYS COMBINED---------------------------

// Problem 1: Count the number of keys in an object.

// let user = {
//   name: "Ali",
//   age: 22,
//   city: "Srinagar",
//   isStudent: true,
// };

// user.address = "Parraypora";

// let count = 0;

// for(let key in user){
//     count++;
// }

// console.log(count);

// -----------------------------------------------------------------------------------

// Problem 2: Check if a particular key exists in an object

// let user = {
//   name: "Ali",
//   age: 22,
//   city: "Srinagar",
//   isStudent: true,
// };

// function hasKey(obj, toCheck) {
//   for (let key in obj) {
//     if (key === toCheck) {
//       console.log(key, "exists in user");
//     }
//   }

//   //   return toCheck in obj;
// }

// hasKey(user, "city");

// ------------------------------------------------------------------------------

// Problem 3: Convert object to an array

// let obj = {
//   name: "Amaan",
//   age: 21,
//   course: "Web Dev",
// };

// let arr = Object.entries(obj);
// console.log(arr);

// ----------------------------------------------------------------------------------

// Problem 4: Find the highest scorer in object

// let students = {
//   Amaan: 85,
//   Asif: 92,
//   Kabir: 88,
// };

// function findHighestScorer(obj) {
//   let topper = "";
//   let highest = 0;
//   for (let key in obj) {
//     if (obj[key] > highest) {
//       highest = obj[key];
//       topper = key;
//     }
//   }
//   return topper;
// }

// let higestMarksStudent = findHighestScorer(students);
// console.log(higestMarksStudent);

// ------------------------------------------------------------------------------------------

// Problem 5: How tp create methods in an object.

// let obj1 = {
//   name: "Kabir",
//   age: 22,
//   greeting: function () {
//     console.log("Welcome to the course of Web Dev", this.name);
//   },
// };

// obj1.greeting();
