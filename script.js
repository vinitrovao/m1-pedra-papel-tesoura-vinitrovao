/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2){
    if (player1 === player2) {
        return "Empate!";
    }

    else if (
        player1 === "Pedra" && player2 === "Tesoura"){
            return "Jogador 1 venceu!";
    }
    else if(
        player1 === "Papel" && player2 === "Pedra"){
            return "Jogador 1 venceu!";
    }
    else if(
        player1 === "Tesoura" && player2=== "Papel"){
            return "Jogador 1 venceu!";
    }
    else{
        return "Jogador 2 venceu!";
    }
}
