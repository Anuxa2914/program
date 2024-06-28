var add=document.getElementById("add")
var tablebody=document.getElementById("tablebody")
var sno=1
var form=document.querySelector("form")

// create unique id
function generateUniqueID() {
    var random = Math.floor(Math.random() * 90000) + 10000; // 5-digit random number
    var timestamp = new Date().getTime(); // current timestamp
    var uniqueID = `${random}${timestamp}`.slice(0, 7); // combine and take first 12 characters
    return uniqueID;
}




add.addEventListener("click",function(){


    var Uniqueid = generateUniqueID()
    var fname = document.getElementById("fname").value
    var lname = document.getElementById("lname").value
    var middle = document.getElementById("middle").value
     var age=document.getElementById("age").value 
    var gender=document.querySelector('input[name="gender"]:checked').value
    var course=document.getElementById("course").value 
    var phone=document.getElementById("phone").value 
    var email=document.getElementById("email").value 

    var newrow=document.createElement("tr")
    newrow.innerHTML=`
    <td>${sno++}</td>
    <td>${Uniqueid}</td>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${middle}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${course}</td>
    <td>${phone}</td>
    <td>${email}</td>
    <td><button class="deleteitem">DELETE</button></td>`

    tablebody.appendChild(newrow)
    var deleteitem=newrow.querySelector(".deleteitem")
    deleteitem.addEventListener("click", function(){
        newrow.remove()

    })    

    form.reset()
    

})
    









