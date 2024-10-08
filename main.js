//Rock, Paper, Scissors: Refactored with While Loop an Array
let playGame = confirm("Shall we play rock, paper, or scissors?")
if (playGame){
    //play
    while (playGame) {
        const playerChoice = prompt("please enter rock, paper, or scissors")
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLocaleLowerCase();
            if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
                //Run computer Chioce Logic
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray =["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];

                const result = playerOne === computer ? "Tie game!" : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne} \nComputer: ${computer}\nComputer wins!`: playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\nComputer: $Computer: ${computer}\nComputer wins!` : playerOne === "scissors" && computer === "rock" ? `playerOne ${playerOne}\nComputer: ${computer}\nComputer wins!`: `playerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins`;
                alert (result);
                playGame = confirm("play Again");
                if (!playGame) alert ("Ok, Thanks for playing");
                continue;


            } else {
                alert("you didint enter rock, paper, or scissors.");
                continue;
            }
        } else {
            alert("I guess you changed your mind. Maybe next time");
            break;
        }
    }
} else {
    alert("ok, maybe next time")
}
