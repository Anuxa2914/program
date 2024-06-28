// var ul=document.getElementById("listcontainer")
// var input=document.getElementById("input")
// function add(){
//     var listitem=document.createElement("li")
//     listitem.innerHTML=input.value+"<button onclick='deleteitem(event)'>Delete</button>"
//     ul.append(listitem)
// }

// function deleteitem(event){
//     event.target.parentElement.remove()
// }

var input=document.getElementById("input")
var ul=document.getElementById("listcontainer")

function add(){
    var listitem=document.createElement("li")
    listitem.innerHTML=input.value+"<button onclick='deleteitem(event)'>Delete</button>"
    ul.append(listitem)
}
function deleteitem(event){
    event.target.parentElement.remove()
}