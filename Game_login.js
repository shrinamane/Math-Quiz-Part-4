function login(){
    var player1name= document.getElementById("Player1Name" ).value
    var player2name= document.getElementById("Player2Name" ).value
    localStorage.setItem("Player1Name",player1name)
    localStorage.setItem("Player2Name",player2name)
    window.location="gamepage.html"
}