// var box=document.getElementById("box")
// function change(){
//     box.style.backgroundColor="red"
    
// }

// var xavi=document.getElementById("btn1")
// var anu=document.getElementById("btn2")
// var cyrus=document.getElementById("btn3")
// var result=document.getElementById("result")


// function xavi(){
//     result.textContent=xavi.textContent

// }

// function anu(){
//     result.textContent=anu.textContent

// }

// function cyrus(){
//     result.textContent=cyrus.textContent

// }

// event function

// function update(event){
//     result.textContent=event.target.textContent
// }
// function update(event){
//     result.textContent=event.target.textContent
// }

// function del(event){
//     event.target.remove()
// }

// var div=document.querySelectorAll(".one")
// // console.log(div[0])
// for(count=0;count<div.length;count=count+1)
//     {
//         console.log(div[count].textContent)
//     }

// var fruit="apple"
// console.log(fruit)

// var fruit=["apple","Orange","Grapes","Banana"]
// console.log(fruit)
// console.log(fruit.length)
// for(count=0;count<=fruit.length;count=count+1)
//     {
//         console.log(fruit[count])
//     }

// for(count=1;count<=5;Count=count+1)
// {
//         console.log(count)
// }

// <!-- append prepand, inert-adjust HTML -->

// var div=document.querySelector("div")
// div.append("hellow")
// div.prepend("welcome")
// var h1=document.createElement("h1")
// h1.textContent="Hellow"
// div.insertAdjacentElement("beforebegin",h1)---added in begin of div
// div.insertAdjacentElement("afterend",h1)----added after div end
// div.insertAdjacentElement("afterbegin",h1)---added div 1st child
// div.insertAdjacentElement("afterend",h1)-----added div last child


var btnEl=document.getElementById("btn")
var tableEl=document.getElementById("tbl")

var nameEl=document.getElementById("name")
var ageEl=document.getElementById("age")
var countryEl=document.getElementById("country")

btnEl.addEventListener('click',()=>{

    var nameR=nameEl.value
    var ageR=ageEl.value
    var counrtyR=countryEl.value

    let template=`
    <tr>
    <td>${nameR}</td>
    <td>${ageR}</td>
    <td>${counrtyR}</td>
    </tr>`

    tableEl.innerHTML+=template
    tableEl.innerHTM=""

})

