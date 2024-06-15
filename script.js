alert("Stone Paper Scissors Game wants to access your location");

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#yourScore");
const compScorePara = document.querySelector("#compScore");


const genCompChoice = () => {
    const option = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw! Play Again..";
    msg.style.backgroundColor = "#113f67"
}


const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Wohoo! You win. Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `uhh! You Lose. ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"; 
    }
}

const playGame = (userChoice) => {
    console.log("userChoice=", userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice=", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})