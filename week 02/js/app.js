// class Customer{
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// let custoemr1 = new Customer("John Doe", 30, "123 Main St");
// console.log(custoemr1);
// let custoemr2 = new Customer("Jane Smith", 25, "456 Oak Ave");
// console.log(custoemr2);


// let Student = [
//     {
//         name: "Saman",
//         age: 30,
//         address: "123 Main St",
//         marks:[
//             {
//                 subject: "Math",
//                 score: 90
//             },
//            {
//                 subject: "Science",
//                 score: 85 
//             }
//         ],
//         teachers:[
//             {
//                 name: "Mr. Smith",
//                 subject: "Math"
//             },
//             {
//                 name: "Ms. Johnson",
//                 subject: "Science"
//             }
//         ]
//     },
//     {
//         name: "Jane Smith",
//         age: 25,
//         address: "456 Oak Ave"
//     },
//     {  
//         name: "Alice Johnson",
//         age: 28,
//         address: "789 Elm St"
//     }
// ]

// console.log(Student);
// console.log(Student[1].age);
// console.log(Student[0].marks[1].subject);


// ---- Java -- 
//class Student{
//    String name;
//    int age;
//    String address;

//ArrayList <Student> studentList = new ArrayList<();
//studentList.add(new Student("John Doe", 30, "123 Main St"));

// ------------------- DOM (Document Object Model) ------------------

// console.log(document);
// document.write("<p><b>Hii icet<b></p>");

// ------------------------------------------------------
// let title = document.getElementById("title");
// console.log(title);
// title.innerText="Pawara"

// let number = 0;
// function btnAddOnAction(){
//     title.innerText="Hii icet - " + number++;
// }

// Number Counter Application

// let number = 0;
// function btnIncrementOnAction(){
//     number++;
//     counter.innerText = "Number Counter - " + number;
// }

// function btnDecrementOnAction(){
//     number--;
//     validateMinimum();
//     counter.innerText = "Number Counter - " + number;
// }

// function validateMinimum(){
//     if(number <0){
//         number = 0;
//         counter.innerText = "Number Counter - 0" + number;
//     }
// }

// -  Forms -
// function submitFormOnAction(){
//     let txtName = document.getElementById("txtName").value;
//     console.log(txtName);
//     title.innerText ="My name is - " + txtName;
// }

// Calculator Application
// function addNumbers(){
//    let txtNum01 = document.getElementById("txtNum01").value;
//    let txtNum02 = document.getElementById("txtNum02").value;
//    let result = parseInt(txtNum01) + parseInt(txtNum02);
// // let result = Number(txtNum01) + Number(txtNum02);

//    let resultElement = document.getElementById("result").innerText = "Result : " + result;

// }

// function subtractNumbers(){
//     let txtNum01 = document.getElementById("txtNum01").value;
//     let txtNum02 = document.getElementById("txtNum02").value;
//     let result = parseInt(txtNum01) - parseInt(txtNum02);

//     let resultElement = document.getElementById("result");
//     resultElement.innerText = "Result : " + result;
// }


// -forms-
let customerList = [];
function addCustoemrOnAction(){
   let txtName = document.getElementById("txtName").value;
   let txtAddress = document.getElementById("txtAddress").value;
   let txtAge = document.getElementById("txtAge").value;
   let txtEmail = document.getElementById("txtEmail").value;
   let txtSalary = document.getElementById("txtSalary").value;

   let customer ={
         name: txtName,
         address: txtAddress,
         age: txtAge,
         email: txtEmail,
         salary: txtSalary
   }
   customerList.push(customer);
   console.log(customerList);
   loadTableOnAction();
}

function loadTableOnAction(){

   let tblCustomer = document.getElementById("tblCustomer");

//    tblCustomer.innerHTML += `<tr>
//             <td>Kamal</td>
//             <td>Panadura</td>
//             <td>25</td>
//             <td>kamal@gmail.com</td>
//             <td>50000</td>
//         </tr>`;
    
//     console.log(tblCustomer);

    let body = "";

    for(let i=0; i<customerList.length; i++){
        body += `<tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
        </tr>`
    }
    tblCustomer.innerHTML = body;
}