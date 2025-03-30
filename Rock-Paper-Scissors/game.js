let uscore = 0;
let cscore = 0;
let idchoice;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user = document.querySelector("#user");
let computer = document.querySelector("#computer");

let options = ["rock","paper","scissors"];

const cchoice = () => {
   let cidx = Math.floor(Math.random() * 3);
   return options[cidx];
}
let compselect;
const showWinner = (userWin) => {
    if(userWin){
        uscore++;
        user.innerText = uscore;
        msg.innerText = "You Win! \nComputer chose " + compselect;
    }
    else{
        cscore++;
        computer.innerText = cscore;
        msg.innerText = "You Lost! \nComputer chose " + compselect;
    }
}

const drawGame = () => {
    msg.innerText = "Draw! \nComputer chose "+ compselect;
}

const playGame = (userchoice) => {
    let comchoice = cchoice();
    compselect=comchoice;
    
    console.log("Computer Choice: ", comchoice);

    if(userchoice === comchoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = comchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userWin = comchoice === "scissors" ? false : true;
        }
        else if(userchoice === "scissors"){
            userWin = comchoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
    
} 

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        idchoice = choice.getAttribute("id")
        console.log("User Choice: ", idchoice);
        playGame(idchoice);
    })
}) 