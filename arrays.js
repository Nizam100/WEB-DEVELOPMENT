// // let arr = [" nizam", " moomin", " salman"];
// // let i = 0;
// // while (i < arr.length) {
// //   console.log(arr[i]);
// //   i++;
// // }

// // -------------- even numbers print ---------
// // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] % 2 === 0) {
// //     console.log(arr[i]);
// //   }
// // }

// // ------------ arrays practice -----------

// // let arr = ["nizam1","nizam2","nizam3"]
// // console.log(arr[1]);
// // console.log(arr[arr.length-1]);

// // ------------mutability ---------

// // let arr = [ 1,2,3,4,5,6]

// // arr[2]= 1;
// // console.log(arr);

// //-------------- - ---imutability-------------
// //  sting value cant b changed

// //  -------------arrays----------------

// // ---------HOW TO CHECK NO OF VARAIBLES

// // let array = [" gousia ", " nizam ","salman"," moomin"]
// // console.log(array.length);

// // ----------HOW TO CHECK VALUE AT PARTICULAR POSITION----------

// // let array = [" gousia ", " nizam ","salman"," moomin"]
// // console.log(array[1]);

// // ----------how to pop value from the array-------
// // note it can pop out only last value---

// // let array = [" gousia ", " nizam ","salman"," moomin"]
// // array.pop("nizam");
// // console.log("array after pop out value ");

// // console.log(array);

// // --------------how to push value in the array ------------

// // let array = [" gousia ", " nizam ","salman"," moomin"]
// // array.push("javaid");

// // console.log(" array after pushing value into  array");

// // console.log(array);

// // let arr = ["d", "e", "f", "i", "k"];

// // let vowels = ["a", "e", "i", "o", "u"];

// // // let str = "";

// // for (let i = 0; i < arr.length; i++) {
// //   let letter = arr[i];
// //   let flag = false;
// //   for (let j = 0; j < vowels.length; j++) {
// //     if (letter === vowels[j]) {
// //       flag = true;
// //       break;
// //     }
// //   }
// //   if (flag === true) {
// //     arr[i] = "#";
// //   }
// // }

// // console.log(arr);

// let arr = ["a", "e", "b", "c", "d"];
// let vowel = ["a", "e", "i", "o", "u"];
// for (let i = 0; i < arr.length; i++) {
//   let letter = arr[i];

//   let flag = false;

//   for (let j = 0; j < vowel.length; j++) {
//     if (letter == vowel[j]) {
//       flag = true;
//       break;
//     }
//   }
//   if (flag == true) {
//     arr[i] = "#";
//   }
// }
// console.log(arr);

// let name1 = "Shadaab";
// let name2 = "Nizaam";
// let name3 = "Asif";

// console.log(name2);

// let arr = ["Shadaab", "Nizaam", "Asif", "Sajid", "Amaan", "Ayaan", "Imad"];
// console.log("Before push");

// console.log(arr);

// console.log(arr[1]);

// 1. Indexing in arrays always start from 0.
// 2. We can store multiple values in a single variable using array.
// 3. We use arrays to manage data efficiently.
// 4. In technical terms we call such a structure as data structure.

// console.log(arr[arr.length - 1]);

// POP and PUSH (Array methods):

// arr.push("Javid");

// console.log("After Push");
// console.log(arr);

// arr.pop();
// console.log("After Pop");

// console.log(arr);

// Mutability and Immutabity:

// let arr = [1, 2, 3, 4, 5];

// arr[0] = 9;

// console.log(arr);

// let str = "String1";

// console.log(str[4]);

// str[0] = "z"
// console.log(str);

// let arr = ["Shadaab", "Nizaam", "Asif", "Sajad", "Amaan"];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// DRY RUN:
// 1. i = 0 => i < 5 => true
//    Print => arr[i] => Shadaab
// i++ => 1

// 2. i = 1 => i < 5 => true
//    Print => arr[i] => Nizaam
// i++ => 2

// 3. i = 2 => i < 5 => true
//    Print => arr[i] => Asif
// i++ => 3

// 4. i = 3 => i < 5 => true
//    Print => arr[i] => Sajad
// i++ => 4

// 5. i = 4 => i < 5 => true
//    Print => arr[i] => Amaan
// i++ => 5

// 6. i = 5 => i < 5 => false
// .......Loop stopped here........

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// -----------------------------------------------------------------------------

// NESTED LOOP:

// for (let i = 1; i <= 5; i++) {
//   console.log("------------------Outer loop---------------------", i);

//   for (let j = 1; j <= 3; j++) {
//     console.log("Inner Loop", j);
//   }

// }

// --------------------------------------------------------------------------------

// HOW TO CHECK IF A PARTICULAR VALUE EXISTS IN AN ARRAY:

// let arr = [2, 7, 3, 5, 6, 7, 1, 2, 4];

// let flag = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 1) {
//     console.log("Yes");
//     flag = true;
//     break;
//   }
// }

// if (flag === false) {
//   console.log("No");
// }

// ---------------------------------------------------------------

// HOW TO CHECK IF TWO NUMBERS EXIST IN AN ARRAY:

// let arr = [2, 3, 6, 7, 5, 1, 2, 4];

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 7) {
//     count++;
//   }
//   if (arr[i] === 5) {
//     count++;
//   }
// }

// if (count >= 2) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// ----------------------------------------------------------------------

// SUM OF THE ARRAY:

// let arr = [1, 2, 3, 4, 5];

// let sum = 0;

// for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i];
// }

// console.log(sum);

// ----------------------------------------------------------------------------

// TO FIND THE MAX VALUE IN AN ARRAY

// let arr = [6, 7, 8, 9, 1, 4];

// let max = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

// ---------------------------------------------------------------------------------

// Pass by value and Pass by reference:

// Normal variables are passed by values not references also called pass by value:

// let a = 5;
// let b = a;

// a = 7;

// console.log("a is", a);
// console.log("b is", b);

// Arrays are passed by reference not by actual values also called as pass by reference:

// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = [8,7,9,3];

// arr1[0] = 10;

// console.log(arr1);
// console.log(arr2);

// --------------------------------------------------------------------------

// Double each element in an array:

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * 2;
// }

// console.log(arr);

// ---------------------------------------------------------------------------

// let arr = ["s", "h", "a", "d", "a", "a", "b"];
//                    // i
// let vowels = ["a", "e", "i", "o", "u"];
//                                 // j

// let str = "";

// for (let i = 0; i < arr.length; i++) {

//   for (let j = 0; j < vowels.length; j++) {
//     if (arr[i] === vowels[j]) {
//       str = str + "#";
//     } else {
//       str = str + arr[i];
//     }
//   }

// }

// console.log(str);

// let arr = ["a", "b", "c", "d"];
// let vowel = ["a", "e", "i", "o", "u"];
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//   let flag = false;
//   for (let j = 0; j < vowel.length; j++) {
//     if (arr[i] === vowel[j]) {
//       flag = true;
//       //   str = str + "#";
//     }
//   }
//   if (flag === true) {
//     str = str + "#";
//   } else {
//     str = str + arr[i];
//   }
// }
// console.log(str);

// --------------------------------MULTI-DIMENSIONAL ARRAYS------------------------------

// let arr = [
//   ["Ayaan", 100, "Pass", 45], //0
//   ["Asif", 101, "Pass", 50], //1
//   ["Javed", 102, "Fail", 36], //2
// ];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   let student = arr[i];
//     for (let j = 0; j < student.length; j++) {
//       console.log(student[j]);
//     }
//   console.log(student[0]);
// }

