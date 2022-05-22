var started=false;
var looser=false;
var score=0;


//call all functions when the whole page is loaded
window.onload=function(){
    var bound=document.getElementsByClassName("boundary");
    for (var i = 0; i < bound.length; i++) 
        bound[i].onmouseover = touchBoundary;  
}
function touchBoundary(){
    var bound=document.getElementsByClassName("boundary");
    if(started==true){
        score-=10;
        looser=true;
        //Add the class name making boundary background color red 
        for(var i=0;i<bound.length;i++){
            bound[i].classList.add("youlose");
        }
    }
}

