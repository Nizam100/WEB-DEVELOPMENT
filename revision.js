// Revisiting javascript basics:

// a. -------------Variable creation----------------:

// let name = "Nizaam";
// let number = 10;
// let bool = true;
// let abc; //undefined
// let xyz = null;
// let fullName = "Shadaab Iqbal";
// const a = 12;
// var b = 15;

// fullName = "Asif Mir";
// console.log(fullName);

// a = 20; //compiler will throw an error because assignment to constant variable is not allowed.

// b. ----------Variable naming------------:
// 1. Cannot start with a number.
// 2. Cannot include javascript reserved keywords.
// 3. Cannot include "^" special character.

// c. -----------Data Types-----------------:
// 1. Number ==> example: 1,2,3,10
// 2. String ==> example "Nizaam", "10", "true"
// 3. Boolean ==> true/false
// 4. Undefined ==> when variable is declared but not assigned any value
// 5. Null ==> when we explicitly assign an empty data to a variable

// console.log(typeof "Shadaab");
// console.log(typeof 10);
// console.log(typeof "15");
// console.log(typeof false);

// d. -------------Mathematical operators--------------:
// 1. Addition (+)
// 2. Subtraction (-)
// 3. Multiplication (*)
// 4. Division (/)
// 5. Modulus (%)
// console.log(13 % 2);

// Concatenation:
// console.log("Ayaan" + " " + "Mir"); //"Ayaan " + "Mir" => "Ayaan Mir";
// console.log(10 + "10"); //Number + String => String

// e. --------------Comparison operators (Output of comparison operators is always boolean)--------:
// 1. >
// 2. <
// 3. >=
// 4. <=
// 5. == //ignores the data type
// 6. === //checks the data type
// 7. !=
// 8. !==

// let x = "10";
// let y = 10;
// console.log(x !== y);

// f. --------------Logical operators---------------:
// 1. && (Logical AND operator) //if all the conditions are true then final output is true otherwise false
// 2. || (Logical OR operator) //if only a single condition is true then whole output will be true
// 3. !  (Logical NOT operator)

// console.log((10 > 5 && 6 > 3) || (3 > 6 && 2 > 1));
//    true          ||       false              ==> Final Output: true

// g. -----------Loops (For loop and while loop)----------:
