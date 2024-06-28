// let a=document.getElementById("one")
// document.write(a.innerHTML)

// a.innerHTML="Hi, How are you?"
// document.write(a.innerHTML)

// const firstname=prompt("what is your first name")
// const Lastname=prompt("what is your Last name")
// if(firstname && Lastname){
// a.innerHTML=firstname+' '+Lastname
// }
// document.write(a.innerHTML)

// document.write(prompt("Hi"))
// document.write(alert("welcome to DOM"))

// \

// Random number
// var a=Math.random()
// document.write(a)
// console.log(a)
// console.log(a*10)

// var b= Math.floor(7.77)
// console.log(b)

// var c=Math.floor(28.222)
// console.log(c)

// var a=Math.random()
// console.log(Math.floor(a*10)+1)

// change color using DOM

// var box=document.getElementById("box")
// function change(){""
//     // box.style.backgroundColor="black"
//     box.setAttribute("class","widthmax")

// }

// Onkeyup event
// var inputbox=document.getElementById("inputbox")
// var result=document.getElementById("result")
// function check(){
//     result.textContent=inputbox.value
// }


// upand-create new element

// var result = document.getElementById("result");

// function update() 
// {
//     // result.textContent = "hello";
//     var list=document.createElement("h1")
//     list.textContent="Hellow"
//     result.append(list)
// }

// var result = document.getElementById("result");

// function add() {
//     var list = document.createElement("h1");
//     list.textContent = "Welcome";
//     result.append(list);
// }


// const uuid=require('uuid')
// const uniqeId=uuid.v4()
// console.log(uniqeId)


// var a=Math.floor(Math.random()*99999)+10000
// console.log(a)


// var times=new Date().getTime()
// console.log(times)

// let uniqueid=`${a}${times}`
// console.log(uniqueid)

// var id=uniqueid.slice(3,7)
// console.log(id)

var random=Math.floor(Math.random()*99999)+10000
var times= new Date().getTime()
var uniqe=`${random}${times}`
var uniqueID=uniqe.slice(3,9)   
console.log(uniqueID)




 
 
