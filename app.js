let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetbtn");
let newbtn = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turnO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enablebtn();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if (turnO) {
            box.innerText = "O"
            turnO = false;

        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        count++;


        let iswinner = checkWinner();

        if(count === 9 && !iswinner){
            gameDraw();
        }
        

    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw`
    msgcontainer.classList.remove("hide");
    disablebtn();
};





const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
        
    }
};
const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congrtulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtn();

};
const checkWinner = () => {
    for (let patterns of winPatterns) {

        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val)
                showWinner(pos1val);
                return true;
            }
        }


    }
};

newbtn.addEventListener("click",resetGame );

resetBtn.addEventListener("click",resetGame );






