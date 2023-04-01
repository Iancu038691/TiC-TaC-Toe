const Player = (name, mark) => {
  const winner = () => {
    alert(`${name} is the winner`);
  };
  return { winner };
};

const Gameboard = (() => {
  const gameboard = [];
  let playerTurn = 0;
  const btnStart = document.querySelector('.btn-start');
  const btnReset = document.querySelector('.btn-reset');
  const playerX = Player(document.querySelector('#name1').value, 'X');
  const playerO = Player(document.querySelector('#name2').value, 'O');
  btnStart.onclick = () => {
    for (let i = 0; i < 9; i += 1) {
      gameboard.push(document.createElement('div'));
      gameboard[i].classList.add('card');
      const container = document.querySelector('.container');
      container.appendChild(gameboard[i]);
      gameboard[i].onclick = () => {
        if (playerTurn % 2 === 0 && gameboard[i].textContent === '') {
          gameboard[i].textContent = 'X';
        } else if (playerTurn % 2 !== 0 && gameboard[i].textContent === '') {
          gameboard[i].textContent = 'O';
        }
        playerTurn += 1;
        if (
          gameboard[1].textContent === gameboard[2].textContent
          && gameboard[0].textContent === gameboard[2].textContent
          && gameboard[1].textContent !== ''
        ) {
          if (gameboard[1].textContent === 'X') {
            playerX.winner();
          } else if (gameboard[1].textContent === 'O') playerO.winner();
          playerTurn = 0;
          for (i = 0; i < 9; i += 1) {
            gameboard[i].remove(); gameboard[i].textContent = '';
          }
          console.log('let go');
        } else if (
          gameboard[0].textContent === gameboard[3].textContent
          && gameboard[3].textContent === gameboard[6].textContent
          && gameboard[0].textContent !== ''
        ) {
          if (gameboard[1].textContent === 'X') {
            playerX.winner();
          } else if (gameboard[1].textContent === 'O') playerO.winner();
          playerTurn = 0;
          for (i = 0; i < 9; i += 1) { gameboard[i].remove(); gameboard[i].textContent = ''; }
          console.log('let go');
        } else if (
          gameboard[0].textContent === gameboard[4].textContent
          && gameboard[0].textContent === gameboard[8].textContent
          && gameboard[0].textContent !== ''
        ) {
          if (gameboard[1].textContent === 'X') {
            playerX.winner();
          } else if (gameboard[1].textContent === 'O') playerO.winner();
          playerTurn = 0;
          for (i = 0; i < 9; i += 1) { gameboard[i].remove(); gameboard[i].textContent = ''; }
          console.log('let go');
        } else if (
          gameboard[2].textContent === gameboard[4].textContent
          && gameboard[2].textContent === gameboard[6].textContent
          && gameboard[2].textContent !== ''
        ) {
          if (gameboard[1].textContent === 'X') {
            playerX.winner();
          } else if (gameboard[1].textContent === 'O') playerO.winner();
          playerTurn = 0;
          for (i = 0; i < 9; i += 1) { gameboard[i].remove(); gameboard[i].textContent = ''; }
          console.log('let go');
        } else if (
          gameboard[3].textContent === gameboard[4].textContent
          && gameboard[3].textContent === gameboard[5].textContent
          && gameboard[3].textContent !== ''
        ) {
          if (gameboard[1].textContent === 'X') {
            playerX.winner();
          } else if (gameboard[1].textContent === 'O') playerO.winner();
          playerTurn = 0;
          for (i = 0; i < 9; i += 1) { gameboard[i].remove(); gameboard[i].textContent = ''; }

          console.log('let go');
        } else if (
          gameboard[8].textContent === gameboard[7].textContent
          && gameboard[8].textContent === gameboard[6].textContent
          && gameboard[8].textContent !== ''
        ) {
          if (gameboard[1].textContent === 'X') {
            playerX.winner();
          } else if (gameboard[1].textContent === 'O') playerO.winner();
          playerTurn = 0;
          for (i = 0; i < 9; i += 1) { gameboard[i].remove(); gameboard[i].textContent = ''; }

          console.log('let go');
        } else if (
          gameboard[1].textContent === gameboard[4].textContent
          && gameboard[4].textContent === gameboard[7].textContent
          && gameboard[1].textContent !== ''
        ) {
          if (gameboard[1].textContent === 'X') {
            playerX.winner();
          } else if (gameboard[1].textContent === 'O') playerO.winner();
          playerTurn = 0;
          for (i = 0; i < 9; i += 1) { gameboard[i].remove(); gameboard[i].textContent = ''; }
          console.log('let go');
        } else if (
          gameboard[2].textContent === gameboard[5].textContent
          && gameboard[2].textContent === gameboard[8].textContent
          && gameboard[2].textContent !== ''
        ) {
          if (gameboard[1].textContent === 'X') {
            playerX.winner();
          } else if (gameboard[1].textContent === 'O') playerO.winner();
          playerTurn = 0;
          for (i = 0; i < 9; i += 1) { gameboard[i].remove(); gameboard[i].textContent = ''; }

          console.log('let go');
        } else {
          let counter = 0;
          for (i = 0; i < 9; i += 1) {
            if (gameboard[i].textContent !== '') counter += 1;
          }

          if (counter === 9) {
            alert('tie');
            for (i = 0; i < 9; i += 1) { gameboard[i].remove(); gameboard[i].textContent = ''; }
          }
        }
      };
    }
  };
  btnReset.onclick = () => {
    for (let i = 0; i < 9; i += 1) {
      gameboard[i].textContent = '';
      gameboard[i].remove();
    }
    playerTurn = 0;
  };
  return { gameboard, playerTurn };
})();
