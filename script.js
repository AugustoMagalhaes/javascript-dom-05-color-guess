const ballsList = document.getElementsByClassName('ball');

function randColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function setColors() {
  for (let index = 0; index < ballsList.length; index += 1) {
    const ballItem = ballsList[index];
    const ballColor = ballItem.style;
    ballColor.backgroundColor = randColor();
  }
}

// Requisito 4 - Criaçao aleatoria das cores das 'balls' ao carregar a pagina.
window.onload = setColors;