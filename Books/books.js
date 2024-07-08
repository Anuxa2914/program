//selecting button and overlay,popup box
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("btn-add-popup")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel  button
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//selecting container , add book,title-input,Author-input,desc-input
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var titleinput=document.getElementById("title-input")
var authorinput=document.getElementById("author-input")
var descinput=document.getElementById("desc-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${titleinput.value}</h2>
            <h5>${authorinput.value}</h5>
            <p>${descinput.value}</p>
            <button class="del" onclick="deletebook(event)">Delete</button>`
    container.append(div)
     popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}

