//Rock, Paper, Scissors: Refactored with While Loop an Array
let playGame = confirm("Shall we play rock, paper, or scissors?")
if (playGame){
    //play
    while (playGame) {
        const playerChoice = prompt("please enter rock, paper, or scissors")
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLocaleLowerCase();
            if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
                
            }
        }
    }
} else {

}
