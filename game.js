var started=false;
var looser=false;
var score=0;
var time_counter=0;
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
function time(){
    var live=document.getElementById("live").innerHTML;
    var live_splite=live.split(":");
    var live_s_ms=live_splite[1].split(".");
    var live_ms=parseInt(live_s_ms[1]);
    var live_s=parseInt(live_s_ms[0]);
    var live_m=parseInt(live_splite[0]);
    ++live_ms;
    if(live_ms==10){
        live_ms=0;
        ++live_s;
    }
    if(live_s==60){
        live_s=0;
        ++live_m;
    }
    document.getElementById("live").innerHTML=live_m+":"+live_s+"."+live_ms;
}
function startPress(){
    time_counter=setInterval(time,100);
    var bound=document.getElementsByClassName("boundary");
    looser=false;
    started=true;
    for(var i=0;i<bound.length;i++){
        //Remove red backgroung by removing added class
        bound[i].classList.remove("youlose");
    }
}
function reachEnd(){
    clearInterval(time_counter);
    document.getElementById("live").innerHTML=0+":"+0+"."+0;
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

