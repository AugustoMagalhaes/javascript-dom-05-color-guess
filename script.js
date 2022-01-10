const ballsList = document.getElementsByClassName('ball');
const answerPgraph = document.getElementById('answer');
const rgbPgraph = document.getElementById('rgb-color');
const resetBtn = document.getElementById('reset-game');
const scoreDisplay = document.getElementById('score');
let score = 0;

function randColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function setScore() {
  scoreDisplay.innerText = `Placar: ${score}`;
  
}

function shuffleOrder(list) {
  for (let index = 0; index < list.length; index += 1) {
    const element = list[index];
    const randNumber = Math.floor(Math.random() * 36); // Para evitar 'order' com o mesmo valor, '36' foi arbitrario.
    element.style.order = randNumber;
  }
  return list;
}

function colorWinner(event) {
  const circle = event.target;
  const stringCorrectColor = `rgb${rgbPgraph.innerText}`;
  if (circle.style.backgroundColor === stringCorrectColor) {
    answerPgraph.innerText = 'Acertou!';
    score += 3;
    setScore();
  } else {
    answerPgraph.innerText = 'Errou! Tente novamente!';
    score = 0;
    setScore();
  }
}

function setColors() {
  for (let index = 0; index < ballsList.length; index += 1) {
    const ballItem = ballsList[index];
    const ballColor = ballItem.style;
    ballColor.backgroundColor = randColor();
    if (index === 0) {
      const correctColor = ballColor.backgroundColor;
      rgbPgraph.innerText = correctColor.split('rgb').join('');
    }
    ballItem.addEventListener('click', colorWinner);
  }
  shuffleOrder(ballsList);
}

function resetGame() {
  setColors();
  answerPgraph.innerText = 'Escolha uma cor';
}

resetBtn.addEventListener('click', resetGame);

// Requisito 4 - Criaçao aleatoria das cores das 'balls' ao carregar a pagina.
window.onload = function () {
  setColors();
  setScore();
}