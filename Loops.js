// // // // // // // Increment:
// // // // // // // let x = 5;
// // // // // // // x = x+1;
// // // // // // // console.log(x)
// // // // // // // let y = 10;
// // // // // // // y = y-2;
// // // // // // // console.log(y)

// // // // // // // let x = 5;
// // // // // // // let y = x++;
// // // // // // // console.log(y,x);

// // // // // // // let x = 1;
// // // // // // // let y = ++x;
// // // // // // // console.log(x,y);

// // // // // // // let a = 10;
// // // // // // // let b = a--;
// // // // // // // console.log(a,b);

//  let a = 5;
// // // // // // let b = --a;
// // // // // // console.log(a,b);

// // // // // // // let x = 2;
// // // // // // // while(x <= 10){
// // // // // // //     console.log("Hello");
// // // // // // //     x++;
// // // // // // // }

// // // // // // // let x = 1 ;
// // // // // // // while (x<=20) {
// // // // // // //     console.log( " HELOO")
// // // // // // //     x++;
// // // // // // // }

// // // // // // let x = 1;

// // // // // // while(x<=10){
// // // // // //     console.log(x);
// // // // // //     x++;
// // // // // // }

// // // // // let x = 0;
// // // // // let y = x + 1;
// // // // // while (y <= 20) {
// // // // //   console.log(y);
// // // // //   x++;
// // // // // }

// // // // // Dry Run:
// // // // // 1. x = 0;
// // // // //    y => y = x+1 => 2 => 2 <= 20 => true
// // // // //    console.log(y) => 2
// // // // //    x++ => 1;

// // // // // 2. x = 1;
// // // // //    y = 2;
// // // // //   2 <= 20
// // // // //   console.log(y) => 2
// // // // //   x++ => 2
// // // // // .
// // // // // .
// // // // // .
// // // // // .
// // // // // This loop will never stop because y is not increasing so it will go
// // // // // into infinite loop. y is always less than 20.

// // // // // let x = 0;
// // // // // let y=x+2;
// // // // // while(y<=100){
// // // // //     console.log(y+2);
// // // // //     y++
// // // // // }

// // // // let i = 1;

// // // // while (i <= 100) {
// // // //   if (i % 2 == 1) {
// // // //     console.log(i);
// // // //   }
// // // //   i++;
// // // // }

// // // // let x = 1;
// // // // while (x <= 100) {
// // // //   if (x % 2 == 0) {
// // // //     console.log(x);
// // // //     x++;
// // // //   }
// // // // }

// // // // let i = 35;

// // // // while (i <= 100) {
// // // //   console.log(i);
// // // //   i = i + 2;
// // // // }

// // // // let x = 13;
// // // // let i = 1;
// // // // while (i <= x) {
// // // //     if(x % i === 0){
// // // //         console.log(x, "is divisible by",i);
// // // //     }
// // // //     i++;
// // // // }

// // // let y = 10;
// // // let x = 1;
// // // let count = 0;
// // // while (x <= y) {
// // //   if (y % x === 0) {
// // //     console.log(y, "is divisible by ", x);
// // //     count++;
// // //     console.log(count);
// // //   }
// // //   x++;
// // // }

// // // if (count > 2) {
// // //   console.log(y, "is not a prime number");
// // // } else {
// // //   console.log(y, "is a prime number");
// // // }

// // let y = 20;
// // let x = 1;
// // let count = 0;
// // while (x<=20) {
// //     if (y%x===0) {
// //         console.log(y," is divisble by ",x);
// //         count++;
// //         console.log(count);

// //     }
// //    x++;

// // }
// // if (count<2) { console.log(y, "is thne prime numer");

// // }else { console.log( y, " is not a prime no. ");
// // }

// // let name = "Nizaam";
// // name = name + "Rehman"

// // let a = "abc";
// // a = a + "e";
// // a = a + "f";
// // console.log(a);

// // Horizontally printing numbers:

// let i = 1;
// let bag = "";

// while (i <= 5) {
//   bag = bag + i + " ";
//   i++;
// }

// console.log(bag);

// // let a = 5;

// {
//     let a = 10;
//   {
//     // let a = 20;
//     console.log(a);
//   }
// }

// {
//  let a = 2;
// }
// console.log(a);

// let c = 1;
// let bag = "";
// while (c <= 10) {
//   bag = bag + c + " ";
//   c++;
//}

// console.log(bag);

// let x = 1;
// let total = 0;
// let count = 0;
// while (x <= 100) {
//   if (x % 3 == 0) {
//     // console.log(x);
//     total = total + x;
//     count++;
//   }
//   x++;
// }
// console.log(total/count);

//  ------------increment-------------

// let x = 5;
// y= ++x;
// console.log(y,x);

// let bag = 1;
// bag = ""+bag+""+1+"" ;

// console.log(bag);
// bag++;

// ------------PRACTICE------------

// let x = 0;
// let bag = "";
// while (x < 20) {
//   bag = bag + x + "_";
//   x++;
// }

//  console.log(bag);

// let x = 1;
// let bag = " ";

// while (x<=20) {
//     bag = bag +    " "+x ;

//     x++;
//     console.log(bag);
// 
// -----------------PRACTICE-------------
// let x = 1;
// let bag = " ";

// while (x<=20) {
//     bag = bag +    " "+x ;

//     x++;
  
// }
//   console.log(bag);

// ----------mutability and imutability---------

// let arr = [ " nizam ","momin","salman"]
// arr[1]= "salman";
// console.log(arr);



