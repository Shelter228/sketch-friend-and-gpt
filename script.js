const gameContainer = document.getElementById("container");
const clearAllBtn = document.querySelector(".clear");
const ChangeBtn = document.querySelector(".change");

function createGrid(size) {
  gameContainer.innerHTML = "";
  const cellSize = 100 / size;
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}%`;
    cell.style.height = `${cellSize}%`;
    cell.addEventListener("mouseover", () => cell.classList.add('filled'));
    gameContainer.appendChild(cell);
  }
}

createGrid(4);

clearAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach(cell => cell.classList.remove("filled"));
});

ChangeBtn.addEventListener("click", () => {
  let size = parseInt(prompt("Введите желаемый размер"), 10);
  if (isNaN(size) || size <= 0) {
    alert("Введите положительное число.");
  } else {
    size = Math.min(size, 100);
    createGrid(size);
  }
});
