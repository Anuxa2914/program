// var guessnumber=document.getElementById("guessnumber")
// var result=document.getElementById("result")
// var score=document.getElementById("score")
// var randomnumber=Math.floor(Math.random()*10)+1
// var totalscore=10

// function check()
// {
//     var enterednumber=guessnumber.value
//     if (randomnumber==enterednumber) 
//     {
//       alert("You WON")
//       result.textContent="Right" 
//     } 
    
//     else
//     {
//         totalscore=totalscore-1
//         result.textContent="Wrong"
//         score.textContent="Score:"+totalscore
        
//     }
// }

var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomnumber=Math.floor(Math.random()*10)+1
var totalscore=10

function check()
{
    var enterednumber=guessnumber.value
    if (enterednumber==randomnumber) 
        {
            alert("YOU WON ")
            result.textContent="Right"
        
    } else {
        totalscore=totalscore-1
        result.textContent="Wrong"
        score.textContent="score:"+totalscore
        
    }
}