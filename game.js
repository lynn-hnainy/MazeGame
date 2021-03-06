var started=false;
var looser=false;
var score=0;
var time_counter=0;
var live_time=[];
var max_time=0;
var min_time=0;
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
//function to be exexcuted when player touches one of the boundaries
function touchBoundary(){
    var bound=document.getElementsByClassName("boundary");
    if(started==true){
        clearInterval(time_counter);
        document.getElementById("live").innerHTML=0+":"+0+"."+0;
        started=false;
        score-=10;
        looser=true;
        //Add the class name making boundary background color red 
        for(var i=0;i<bound.length;i++){
            bound[i].classList.add("youlose");
        }
        document.getElementById("status").innerHTML="You lost";
        document.getElementById("score").innerHTML=score;
    }
}
//function to prevent cheating
function cheating(){
    if(started==true){
        alert("NO CHEATING!!");
        started=false;
    }
}
//function to start game and timer when user click on S
function startPress(){
    document.getElementById("status").innerHTML="Game On!";
    time_counter=setInterval(time,100);
    looser=false;
    started=true;
    redBoundaries();
    document.getElementById("score").innerHTML=score;
}
//function to notice when the user reaches the end
function reachEnd(){
    //if reached end without game being started this is wrong
    if(started==true){
        score+=5;
        document.getElementById("score").innerHTML=score;
        document.getElementById("status").innerHTML="You Won!";
        calculateBestLast();
        //stop the game to calculate and display score
        started=false;
        clearInterval(time_counter);
        document.getElementById("live").innerHTML=0+":"+0+"."+0;
    }
}
//function to calculate time
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
//function to get best and last time
function calculateBestLast(){
    var c_time=document.getElementById("live").innerHTML.split(":");
    var current=parseInt(c_time[0])*60+parseFloat(c_time[1]);
    if(max_time==0&&min_time==0){
        min_time=current;
        max_time=current;
    }
    else{
        if(max_time<=current)
            max_time=current;
        if(min_time>=current)
            min_time=current;
    }
    document.getElementById("last").innerHTML=parseInt(max_time/60)+":"+max_time%60;
    document.getElementById("best").innerHTML=parseInt(min_time/60)+":"+min_time%60;
}

//function to reset on right click
function reset(){
    started=false;
    score=0;
    redBoundaries();
    document.getElementById("status").innerHTML="Begin by moving your mouse over the \"S\".";
    
}
//function to set boundaries walls to red
function redBoundaries(){
    var bound=document.getElementsByClassName("boundary");
    for(var i=0;i<bound.length;i++)
        //Remove red backgroung by removing added class
        bound[i].classList.remove("youlose");
}

