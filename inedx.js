const guzik = document.querySelectorAll('.pole');
const playAgain = document.querySelector(".playAgain");
let id = 0;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function operate() {
  if(checkWinner("X") == false && checkWinner("O") == false){
    console.log(id);
    if (id % 2 == 0 && this.textContent === '') {
      id++;
      this.textContent = "X";
      updateBoard(this, "X");
      if (checkWinner("X")) {
        console.log("Gracz X wygrywa!");
        document.getElementById('h1').style.visibility = 'visible';
        document.getElementById("napis").textContent = "Player X Won!";
      }
    } else if (id % 2 !== 0 && this.textContent === '') {
      id++;
      this.textContent = "O";
      updateBoard(this, "O");
      if (checkWinner("O")) {
        console.log("Gracz O wygrywa!");
        document.getElementById('h1').style.visibility = 'visible';
        document.getElementById("napis").textContent = "Player O Won!";
      }
    }
    if(id == 9 && checkWinner("O") == false && checkWinner("X") == false){
      console.log("remis");
      document.getElementById('h1').style.visibility = 'visible';
      document.getElementById("napis").textContent = "REMIS!";
    }
  }
  
  }



function updateBoard(button, player) {
  const row = button.dataset.row;
  const col = button.dataset.col;
  board[row][col] = player;
}

function checkWinner(player) {
  // Sprawdzanie poziomych, pionowych i przekątnych linii
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === player && board[i][1] === player && board[i][2] === player ||
      board[0][i] === player && board[1][i] === player && board[2][i] === player
    ) {
      return true;
    }
  }

  // Sprawdzanie przekątnych
  if (
    board[0][0] === player && board[1][1] === player && board[2][2] === player ||
    board[0][2] === player && board[1][1] === player && board[2][0] === player
  ) {
    return true;
  }

  return false;
}
function clearScreen(){
  location.reload();
}
guzik.forEach((button) => button.addEventListener('click', operate));
playAgain.addEventListener('click',clearScreen);