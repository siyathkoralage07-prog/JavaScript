// const

// let age = 30;
// console.log(age);

// age = 14;
// console.log(age);

// const name = "siyath";
// console.log(name);

// name = "sasibunny";
// console.log(name);

// const names = ["kama","amal","nimal"];
// console.log(names);

// names.push("siyath");
// console.log(names);

//filter

// const productList = [
//     {name : "bun", inStock : true, price : 100},
//     {name : "milk", inStock : true, price : 100},
//     {name : "egg", inStock : false, price : 100},
//     {name : "bread", inStock : true, price : 100},
//     {name : "butter", inStock : false, price : 100}
// ];

// console.log(productList);

// let inStockProducts = productList.filter(product => product.inStock == true);

// console.log(inStockProducts);

// let getTotal = (num1, num2) =>{
//     return num1 + num2;
// }

// console.log(getTotal(5,10));


// find  - method

// const studentList = [
//     {name : "siyath" , age : 20, gender : "male"},
//     {name : "kamal" , age : 20, gender : "male"},
//     {name : "nimal" , age : 20, gender : "male"},
//     {name : "amal" , age : 20, gender : "male"},
//     {name : "bimal" , age : 20, gender : "male"},
//     {name : "rumal" , age : 20, gender : "male"}
// ];

// // let findStudent = studentList.find(student => student.name === "bimal");
// // console.log(findStudent);

// console.log(studentList.find(student => student.name === "bimal"));

//--- json -- java script object notation

fetch("/week 04/customer.json").then(res => res.json()).then(data =>{
    console.log(data);
});
