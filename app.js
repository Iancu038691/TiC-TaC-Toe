const Gameboard = (() => {
  gameboard = [];
  let playerTurn = 0;
  for (let i = 0; i < 9; i++) {
    gameboard.push(document.createElement('div'));
    gameboard[i].classList.add('card');
    const container = document.querySelector('.container');
    container.appendChild(gameboard[i]);
    gameboard[i].onclick = () => {
      if (playerTurn % 2 == 0 && gameboard[i].textContent === '') { gameboard[i].textContent = 'X'; } else if (playerTurn % 2 !== 0 && gameboard[i].textContent === '') { gameboard[i].textContent = 'O'; }
      playerTurn += 1;
    };
  }
  return { gameboard, playerTurn };
})();

const firstPlayer = () => {

};

const secondPlayer = () => {

};
