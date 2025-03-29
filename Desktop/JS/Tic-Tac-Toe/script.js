let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let win = document.querySelector(".win");
let hide = document.querySelector(".hide");
let para = document.querySelector("p");
let turnO = true;
let count=0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableboxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
        win.classList.add("win");
        para.innerText="";
    }
}
checkWinner = () => {
    for(pattern of winPatterns){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;
       
       if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner ",pos1);
            hide.classList.remove("hide");
            win.classList.remove("win");
            para.style.fontSize = "8vmin";
            para.innerText= "Congratulations, Winner is "+ pos1;
            count=0;
            disableboxes();
        } 
       }
    }
} 

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        count++;
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
       
        if(count === 9){
            hide.classList.remove("hide");
            win.classList.remove("win");
            para.style.fontSize = "8vmin";
            para.innerText= "Draw";
            count=0;
        }
    });
});

resetbtn.addEventListener("click", enableboxes);
newbtn.addEventListener("click", enableboxes);

