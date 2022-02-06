player1name= localStorage.getItem("Player1Name")
player2name= localStorage.getItem("Player2Name")
player1score=0
player2score=0
document.getElementById("player1name").innerHTML=player1name
document.getElementById("player2name").innerHTML=player2name
document.getElementById("player1score").innerHTML=player1score
document.getElementById("player2score").innerHTML=player2score
document.getElementById("playerquestion").innerHTML="questionturn="+player1name
document.getElementById("playeranswer").innerHTML="answerturn="+player2name
function send(){
    num1=document.getElementById("number1").value
    num2=document.getElementById("number2").value
    getword=num1*num2
    questionword="<h4>" + num1 + " X "+ num2 +"</h4>"
    inputbox="<br> ANSWER: <input id='answer'>"
    button="<br> <br> <button class='btn btn-info' onclick='check()'>Check </button>"
row=questionword+inputbox+button 
document.getElementById("output").innerHTML=row
document.getElementById("number1").value=""
document.getElementById("number2").value=""
}
questionturn="player1"
answerturn= "player2"
function check(){
    answer=document.getElementById("answer").value
    
    if (answer==getword) {
     if (answerturn=="player1") {
         player1score+=1
         document.getElementById("player1score").innerHTML=player1score
     }  
     if (answerturn=="player2") {
        player2score+=1
        document.getElementById("player2score").innerHTML=player2score
    }   
   
    
    }
    if (questionturn=="player1") {
        questionturn="player2"
        document.getElementById("playerquestion").innerHTML="questionturn="+player2name
    }
    else{
        questionturn="player1"
        document.getElementById("playerquestion").innerHTML="questionturn="+player1name
    }
    if (answerturn=="player1") {
        answerturn="player2"
        document.getElementById("playeranswer").innerHTML="answerturn="+player2name
    }
    else{
        answerturn="player1"
        document.getElementById("playeranswer").innerHTML="answerturn="+player1name
    }
    document.getElementById("output").innerHTML=""
}