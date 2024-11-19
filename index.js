function rollDice(){
var randomNumber1= Math.floor(Math.random()*6+1) ;
var randomNumber2= Math.floor(Math.random()*6+1) ;
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector("#title1").innerHTML="🚩Player 1 Wins! ";
    document.querySelector("#title1").style.fontSize= "7rem" ;

}else if(randomNumber1<randomNumber2){
    document.querySelector("#title1").innerHTML="Player 2 Wins! 🚩";
    document.querySelector("#title1").style.fontSize="6rem";
}else {
    document.querySelector("#title1").innerHTML=" Ended In A Draw!";
    document.querySelector("#title1").style.fontSize="5rem";
}
}
rollDice();
