// let add=document.getElementById("add")
// let tablebody = document.querySelector("tbody")


// add.addEventListener("click", function() {

//     var names=document.getElementById("names").value
//     var age=document.getElementById("age").value
//     var gender=document.querySelector('input[name="gender"]:checked').value
//     var course=document.getElementById("course").value
//     var email=document.getElementById("email").value

//     var newrow=document.createElement("tr")
//     newrow.innerHTML=
//     `
    
//     <td>${names}</td>
//         <td>${age}</td>
//         <td>${gender}</td>
//         <td>${course}</td>
//         <td>${email}</td>
//         <td><button class="deleteitem">DELETE</button></td>`

//         tablebody.appendChild(newrow)

//   var deleteEl=newrow.querySelector(".deleteitem")
//   deleteEl.addEventListener("click",function(){
//     newrow.remove()
//   })
// })

// let add = document.getElementById("add");
// let tablebody = document.querySelector("thead").document.querySelector("tbody")[0];

// add.addEventListener("click", function() {
//     var names = document.getElementById("names").value;
//     var age = document.getElementById("age").value;
//     var gender = document.querySelector('input[name="gender"]:checked').value;
//     var course = document.getElementById("course").value;
//     var email = document.getElementById("email").value;

//     var newrow = document.createElement("tr");
//     newrow.innerHTML = `
//         <td>${names}</td>
//         <td>${age}</td>
//         <td>${gender}</td>
//         <td>${course}</td>
//         <td>${email}</td>
//         <td><button class="deleteitem">Delete</button></td>
//     `;

//     tablebody.appendChild(newrow);

//     var deleteEl = newrow.querySelector(".deleteitem");
//     deleteEl.addEventListener("click", function() {
//         newrow.remove();
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     let add = document.getElementById("add");
// let tableBody = document.getElementById("studentTableBody");

// add.addEventListener("click", function() {
//     var names = document.getElementById("names").value;
//     var age = document.getElementById("age").value;
//     var gender = document.querySelector('input[name="gender"]:checked').value;
//     var course = document.getElementById("course").value;
//     var email = document.getElementById("email").value;

//     var newRow = document.createElement("tr");
//     newRow.innerHTML = `
//         <td>${names}</td>
//         <td>${age}</td>
//         <td>${gender}</td>
//         <td>${course}</td>
//         <td>${email}</td>
//         <td><button class="deleteItem">Delete</button></td>
//     `;

//     tableBody.appendChild(newRow);

//     var deleteBtn = newRow.querySelector(".deleteItem");
//     deleteBtn.addEventListener("click", function() {
//         newRow.remove();
//     });
// });


var add=document.getElementById("add")
var tablebody=document.getElementById("tablebody")

add.addEventListener("click",function(){
    var fullname=document.getElementById("fullname").value
    var age=document.getElementById("age").value 
    var gender=document.querySelector('input[name="gender"]:checked').value
    var course=document.getElementById("course").value 
    var email=document.getElementById("email").value 

    var newrow=document.createElement("tr")
    newrow.innerHTML=`
    <td>${fullname}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${course}</td>
    <td>${email}</td>
    <td><button class="deleteitem">DELETE</button></td>`

    tablebody.appendChild(newrow)
    var deleteitem=newrow.querySelector(".deleteitem")
    deleteitem.addEventListener("click", function(){
        newrow.remove()

    })

    









})