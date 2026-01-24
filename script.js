let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn0= true; //payer x, and payer o
const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let resetGame =()=> {
    boxes.forEach((box) => {
        box.textContent="";
        box.disabled = false;
    });
};
boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        console.log("box was clicked");
        if(turn0){
            box.textContent="O";
            box.style.color = "red";
            turn0 = false;
        }
        else{
            box.textContent="X";
            box.style.color = "blue";
            turn0 = true;
        }
        box.disabled =true;
        winchecker(); 
    })  
});
 let winchecker = () =>{
    for ( let pattern  of winPatterns)  {
      let pos1val =boxes[pattern[0]].innerText;
      let pos2val =boxes[pattern[1]].innerText;
      let pos3val =boxes[pattern[2]].innerText;
      if ( pos1val !== "" && pos1val === pos2val && pos2val === pos3val){
        alert ("Congratulations,"+ pos1val + " is the winner!");
        resetGame();
        break;
          }
          else{
            let allfilled = true;
            for ( let box of boxes){
                if ( box.innerText ===""){
                    allfilled = false;
                    break;
                }
          }
          if (allfilled){
            alert("It's a draw!");
            resetGame();
            break;
          }
 }} 
};
reset.addEventListener("click", resetGame);