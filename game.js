var started=false;
var looser=false;
var score=0;
//call all functions when the whole page is loaded
window.onload=function(){
    var bound=document.getElementsByClassName("boundary");
    for (var i = 0; i < bound.length; i++) 
        bound[i].onmouseover = touchBoundary;
    
    var surr=document.getElementById("game");
    surr.onmouseleave=cheating;

    var start=document.getElementById("start");
    start.onclick=startPress;
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
function cheating(){
    if(started==true){
        alert("NO CHEATING!!");
        started=false;
    }
}
function startPress(){
    var bound=document.getElementsByClassName("boundary");
    looser=false;
    started=true;
    for(var i=0;i<bound.length;i++){
        //Remove red backgroung by removing added class
        bound[i].classList.remove("youlose");
    }
}

