// // for loop //5bar execute korbe
// for (let count = 1;count <= 5; count ++  ){
//     console.log("Hridoy ke 5 bar count kora hobe");
// }

// //--------Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum = sum + i;
//     console.log(i + " যোগ করলে মোট =", sum);// ei niom ye hoiche 1 যোগ করলে মোট = 1  2 যোগ করলে মোট = 3 3 যোগ করলে মোট = 6    
// }
// console.log("শেষে ফলাফল =", sum);

// // ------------while loop start
// let i = 1;
// while ( i <= 5){
//     console.log("i=",i);
//     i++;
// }


// let j = 1;
// while (i <= 10){
//     console.log("Apna College");
//     i++;
// } 


// ------------do while loop

let i = 1;
do {
    console.log("do while loop");
    i++;
} while (i<= 5);
//abar suru korlam do while loop
let loopCount = 1;
do{
  console.log("Hello"+ loopCount);
  loopCount++;
}while (loopCount <= 5);

// ------------for of loop
let numbers = [10, 20, 30, 40, 50];

for (let num of numbers) {
  console.log(num);
}


// ------------------for loop---
for (let count = 1; count <=5;count++){
  console.log("for loop"+count); 
}
// ei vabe o kora jai
let count;
for (count = 1;count<= 5;count ++){
  console.log("ei vabe kora jai" +count);
}
console.log(count);

// ei niom o kora jai
let count1 = 1;
for(;count1 <=5 ;){
  console.log(" secend niom eita" +count1);
  count1++;
  
}

// -------------Object/ for in loop er kaj o ache

let userInfo ={
  firstName:"Rajip",
  lastName:"Majumder",
  favSubject:"js",
  website:"ww.webground.in",
  activeUser:true,
  totalPrice:10.67
};

// console.log(userInfo["firstName"]);
// console.log(userInfo["lastName"]);
// console.log(userInfo["website"]);
for (let propertyName in userInfo){
  //console.log(userInfo[propertyName]);
  // console.log(`Property name is : ${propertyName} and the propertyName valu is:${userInfo[propertyName]}`);// ei vabe o console log kora jai
   console.log("Property name is :" + propertyName + "and the propertyName valu is :" + userInfo[propertyName]);// ei vabe o console log kora jai
};

let str = "JavaScript";
let size = 0;
for (let val of str ){
  console.log("val=",val);
  size++;
}
console.log("string size =",size);//10 eita o ekta niom


//--------------even or odd numbors
for (let num = 0;num <=100;num++){
  if(num % 2===0){
    //even number
    console.log("num=",num);
  }
}


for (let num = 0;num <=100;num++){
  if(num % 2!==0){
    //odd number
    console.log("num=",num);
  }
}

// ---------pactices game
let gameNum = 25;
let userNum = prompt("Gues the game number :");
while (userNum !=gameNum){
  userNum =prompt("you enterd worng number.Gues again :");
}
console.log("congratulation,you enterd the right number5");






