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
    start.oncontextmenu=reset;
    var end=document.getElementById("end");
    end.onmouseover=reachEnd;
}
function touchBoundary(){
    var bound=document.getElementsByClassName("boundary");
    if(started==true){
        started=false;
        score-=10;
        looser=true;
        //Add the class name making boundary background color red 
        for(var i=0;i<bound.length;i++){
            bound[i].classList.add("youlose");
        }
        document.getElementById("status").innerHTML="You loose.Your score is "+score;
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
function reachEnd(){
    //if reached end without game being started this is wrong
    if(started==true){
        //stop the game to calculate and display score
        started=false;
        if(looser==false){
            //if reached end without touching boundaries add score
            score+=5;
            document.getElementById("status").innerHTML="You Won.Your score is "+score;
        }
        else{
            document.getElementById("status").innerHTML="You loose.Your score is "+score;
        }
    }
}
function reset(){
    started=false;
    score=0;
    document.getElementById("status").innerHTML="Your score is "+score;
}

