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
   //loadTableOnAction();
}

function loadTableOnAction(){
    let tblCustomer = document.getElementById("tblCustomer");
    let body = "";

   for(let i=0; i<customerList.length; i++){
     body +=`
            <th>name</th>
            <th>address</th>
            <th>age</th>
            <th>email</th>
            <th>salary</th>
        <tr>
            <td>${customerList[i].name}</td>
            <td>${customerList[i].address}</td>
            <td>${customerList[i].age}</td>
            <td>${customerList[i].email}</td>
            <td>${customerList[i].salary}</td>
        </tr>`
   }
    tblCustomer.innerHTML = body;
}