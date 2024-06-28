
// function calc() {
//     let a=document.getElementById("one").value;
//     let b=document.getElementById("two").value;
    
//     let total=Number(a)+Number(b);
//     document.getElementById("result").innerHTML=total;
    

// }

// function dis(X){
//     document.getElementById("input").value +=X;
// }
// 
function dis(X){
    if (document.getElementById("input").value ==0)
        {
           document.getElementById("input").value =""
           document.getElementById("input").value =X
   } else {
       document.getElementById("input").value +=X
   }
}
function clean(){
    document.getElementById("input").value =0
    
}
function solve(){
    var a=document.getElementById("input").value
    var b=eval(a)
    document.getElementById("input").value =b
}