
var player1=Math.floor(Math.random()*6)+1;
var player1_img = `imgs/dice${player1}.png`
document.querySelectorAll("img")[0].setAttribute("src", player1_img);

var player2=Math.floor(Math.random()*6)+1;
var player2_img = `imgs/dice${player2}.png`
document.querySelectorAll("img")[1].setAttribute("src", player2_img);



if(player1>player2){
    document.querySelector(".container h1").innerHTML="🏆Player 1 Wins!"
}
else if(player1<player2){
    document.querySelector(".container h1").innerHTML="🏆Player 2 Wins!"
}
else{
    document.querySelector(".container h1").innerHTML="🎭Players are Tie!"
}
