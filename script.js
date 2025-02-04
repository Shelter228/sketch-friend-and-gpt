const container = document.getElementById("container");
const ClearButton = document.getElementById("btn");
const sizeButton = document.getElementById("btnTwo");

// Функция для  рандом цвета йоу
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Функция для квадратиков йоу
function createGrid(size) {
  container.innerHTML = '';
  const totalBlocks = size * size;

//  размер самих квадратов
  const blockSize = (90 / size);

  for (let i = 0; i < totalBlocks; i++) {
    const addDiv = document.createElement("div");
    addDiv.classList.add("box");
    addDiv.style.width = `${blockSize}%`;
    addDiv.style.height = `${blockSize}%`;
    container.appendChild(addDiv);

    addDiv.addEventListener("mouseover", () => {
      addDiv.style.backgroundColor = getRandomColor();
    });
  }
}



// При клике на 'Clear' очищаем все типа да
ClearButton.addEventListener("click", () => {
  document.querySelectorAll('.box').forEach(item => {
    item.style.backgroundColor = 'white';
  });
});

// При клике на 'Change Size' запрашиваем нужный размер типа
sizeButton.addEventListener("click", () => {
  const newSize = Number(prompt("Пожалуйста, введите размер (до 64):"));

  if (isNaN(newSize) || newSize < 1 || newSize > 64) {
    alert("Вы ввели  текст или неверный размер блока");
  } else {
    createGrid(newSize);
  }
});

// Изначально с сетка типо 10x10 йоу
createGrid(10);
