/// DOM MANIPULATIONS

// class Customer{
//     name ;
//     age ;
//     address;   

//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// let Customer1 =new Customer("jhon bae", 72, "17th, Oark Street");
// console.log(Customer1);
// let Customer2 = new Customer("ichigo kusosaki", 8349434249, "somewhere in japan...???");
// console.log(Customer2);

// alert("i hate...!!!");


// CREATING AN OBJECT INSIDE AN ARRAY

// let Student = [
//     {
//         name : "siyath",
//         age: 19,
//         address:"Bandaranayaka Ave",
//         marks: [
//           {
//             subject: "science",
//             score : 67
//           },
//           {
//             subject: "Maths",
//             score: 78
//           }
//         ]
//     },
//     {
//         name : "jj",
//         age: 24,
//         address:"reid Ave"

//     },
//     {
//         name : "nefs",
//         age: 22,
//         address:"ratmalana Ave"

//     }
// ];

// console.log(Student);
// console.log(Student[1]);
// console.log(Student[0].age);
// console.log(Student[0].marks[0].score);

// // ????? try this out with a customer thingy.....

// /// DOM (DOCUMENT OBJECT MANIPULATION)

// console.log(document);
// document.write("<p><b>HELLO Js</b></p>");

// let title =document.getElementById("title");
// console.log(title);
// title.innerText = "SIYATH";

// let number = 0;
// function btnIncremetOnAction(){
//     number++;
//     item.innerText = "Number Count - "+ number;
// }
// function btnDecrementOnAction(){
//     number--;
//     validateNumber();
//     item.innerText = "Number Count - "+ number;
// }
// function validateNumber(){
//     if(number<0){
//         number =0;
//         item.innerText = "Number Count - "+ number;
//     }
// }


/// FORMS

// function submitFormOnAction(){
//     let txtName = document.getElementById("txtName").value;
//     console.log(txtName);
//     title.innerText ="My name is - " + txtName;
// }



// function addNumbers(){
//     let txtNum01 = document.getElementById("txtNum01").value;
//     let txtNum02 = document.getElementById("txtNum02").value;  
//     let total = 0;        
//     total = parseInt(txtNum01) + parseInt(txtNum02);
//     result.innerText = "Result : "+ total;
// }
// function subtractNumbers(){
//     let txtNum01 = document.getElementById("txtNum01").value;
//     let txtNum02 = document.getElementById("txtNum02").value;
//     total = txtNum01 - txtNum02;
//     result.innerText = "Result : "+ total;
// }





let customerList = [];
function addCustomerOnAction(){
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
}

function loadTableOnAction(){
   let tblCustomer = document.getElementById("tblCustomer");

   tblCustomer.innerHTML += 
        <tr>
            <td>txtName</td>
            <td>txtAddress</td>
            <td>txtAge</td>
            <td>txtEmail</td>
            <td>txtSalary</td>
        </tr>;
    
    console.log(tblCustomer);
    
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

