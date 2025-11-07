// SYNTAX: How to create an object
let car = {
  brand: "Toyota",
  color: "Red",
  speed: 120,
};

// Different ways to access values in an object:
// 1. Dot Notation:
//    console.log(car.brand) => "Toyota"

// 2. Bracket Notation:
//    console.log(car["speed"]);

// car.speed = 150;

// CRUD: CREATE, READ, UPDATE AND DELETE

// car.model = "Corolla";

// delete car.color;

// console.log(car);

// Looping through Objects:

// for (let key in car) {
//   console.log(car[key]);
// }

// NESTED OBJECTS:
// let person = {
//   name: "ayaan",
//   address: {
//     city: "srinagar",
//     pincode: 110001,
//   },
//   marks: 280,
// };

// console.log(person.address.pincode);

// let students = [
//   { name: "ayaan", marks: 85 }, //0
//   { name: "shadaab", marks: 80 }, //1
//   { name: "asif", marks: 60 }, //2
// ];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i].marks);
// }

// const student = {
//   name: "Amaan",
//   age: 20,
//   course: "Web Dev",
// };

//Access:
// console.log(student.name);

//Update:
// student.age = 21;
// student["name"]

//Add new Key:
// student.city = "Srinagar";

//Delete a Key:
// delete student.age;

// Loop through Object:
// for (let key in student) {
//   console.log(key, ":", student[key]);
// }
