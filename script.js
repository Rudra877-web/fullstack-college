// Tic Tac Toe – Optimized Game Logic
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset");
const statusEl = document.getElementById("game-status");

let isPlayerO = true;
let moveCount = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function updateStatus(message) {
    if (statusEl) {
        statusEl.textContent = message;
    }
}

function resetGame() {
    isPlayerO = true;
    moveCount = 0;
    boxes.forEach(function (box) {
        box.textContent = "";
        box.disabled = false;
        box.style.color = "";
    });
    updateStatus("Player O's turn");
}

function disableAllBoxes() {
    boxes.forEach(function (box) {
        box.disabled = true;
    });
}

function checkWinner() {
    for (let i = 0; i < winPatterns.length; i++) {
        var pattern = winPatterns[i];
        var a = boxes[pattern[0]].textContent;
        var b = boxes[pattern[1]].textContent;
        var c = boxes[pattern[2]].textContent;

        if (a !== "" && a === b && b === c) {
            updateStatus("Congratulations, " + a + " wins!");
            disableAllBoxes();
            return;
        }
    }

    if (moveCount === 9) {
        updateStatus("It's a draw!");
        disableAllBoxes();
    }
}

boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        if (isPlayerO) {
            box.textContent = "O";
            box.style.color = "#ff6b6b";
        } else {
            box.textContent = "X";
            box.style.color = "#667eea";
        }
        isPlayerO = !isPlayerO;
        box.disabled = true;
        moveCount++;

        checkWinner();

        if (moveCount < 9 && statusEl && !statusEl.textContent.includes("wins") && !statusEl.textContent.includes("draw")) {
            updateStatus("Player " + (isPlayerO ? "O" : "X") + "'s turn");
        }
    });
});

resetBtn.addEventListener("click", resetGame);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});