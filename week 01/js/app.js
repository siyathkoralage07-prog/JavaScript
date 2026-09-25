//HELLO TO JavaScript!!!
console.log("hello, world");

// sending alerts
alert(" WORK HARD AND BE NICE TO PEOPLE!!!");

// no need to use a semi-colon to define lines
console.log("hi.....hi.....hi");

//Assigning Variables(in js the default setting for variables is non-type_safe, AND all variable names are CASE SENSITIVE soooo (eg. "name" and "NAME" are two different variables))
let name = "saman";
let age = "20";
let afterAL = true;
let customer = []; // an ARRAY
let cashier = {}; // an OBJECT

console.log(typeof name);
console.log(age);
console.log(afterAL);
console.log(typeof customer);
console.log(cashier);

// USing type_safe[ts language] variables (const and let) is a good practice, but you can also use var (but it is not recommended).
    //let NAME : string = "saman";
    //let AGE : number = 20;

//learning js Arithmetic Operators
// +, -, *, /

let a = 10;
let b = 20;
console.log(a+b);

let result = a + b;
console.log("result : " + result);

// Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=

let x = 10;
let y = "10";
console.log(x == y); // true
console.log(x === y); // false
console.log(x != y); // false
console.log(x !== y); // true
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true

// Logical Operators
// &&, ||, !

let c = 10;
let d = 20;
if (c > 5 && d < 15) {
    console.log("c is greater than 5 AND d is less than 15");
}else if (c > 5 || d < 15) {
    console.log("c is greater than 5 OR d is less than 15");
}else {
    console.log("c is NOT greater than 5 AND d is NOT less than 15");
}

// using ternary operator

let marks = 30;
if(marks >= 75? console.log("A"): marks >= 60? console.log("B"): marks >= 50? console.log("C"): marks >= 40? console.log("D"):console.log("F"));

let unit = 120;
let total = 0;

if (unit <= 50) {
    total = unit * 10;
}else if (unit <= 100) {
    total = unit * 15;
}else if (unit >100){
    total = unit * 20;
}

console.log("Your Total Bill is : " +total+ "/=");

// switch statement

let day = 3;
switch (day) {
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
}

// For Loop

for(let i = 0; i <=10; i++){
    console.log(i)
}

// while loop

let num = 10;
while(num != 10){
    console.log("hehe"+num)
    num++;
}

while(num > 0){
    console.log(num);
    num--;
}

let arithma = 1
let totalOfNum = 0;

while(arithma <= 10){
    totalOfNum = arithma + totalOfNum;
    arithma++;
}
console.log("Total = " + totalOfNum);

let i = 1;
while(i <= 10){
    console.log("5 * "+ i + " = " + (5*i));
    i++;
}

//do-while loop

let ii = 1;
 do{
    console.log(ii);
     ii++;
 }while(ii <= 10);

 // functions (equivalent to methods in java)

 function myFunction(){
    console.log("hello world");
 }

 myFunction();
 myFunction();
 myFunction();
 myFunction();

 function add(x,y){
    let result = x+y;
    console.log(result);
 }

 function addNumbers(aa, bb){
    return aa+bb;
 }

 let result1 = addNumbers(10, 15);
  console.log(result1);

  // function expressions

  let names = function(){
    console.log("hello World");
  }

  names();

  //arrow function

        // longer version
  let ages = () => {
    console.log("I'm 22 years old");
  }
  ages();
        // shorter version
  let agess = () => console.log("i'm 44 years old");

  agess();

  // Array

        // arrays in js aren't type-safe so you can add almost any type of data if undefined
  let Numbers = [1,2,3,4,5,true,"siyath"];
  console.log(Numbers);

  console.log(typeof Numbers);

  let as = [1,2,3,4,5];
  let bs = [1,2,3,4,5];

  console.log(as === bs);

  // objects

        // js is also a object-oriented program
let siyath = {
    sname : "Siyath Koralage",
    sage :  19,
    sgender : "Male",
    saddress : "Panadura",
    isActive : true
};

        // data retrieval from a object
console.log(siyath);
console.log(siyath.sname);
console.log(siyath.isActive);

