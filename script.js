const gameContainer = document.getElementById("container");
const clearAllBtn = document.querySelector(".clear");
const ChangeBtn = document.querySelector(".change");


for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.width = `calc(100% / 4.5)`; //${value + 0.5}
  cell.addEventListener("mouseover", () => {
    cell.classList.add('filled');
  });
  gameContainer.appendChild(cell);
}

clearAllBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.classList.remove("filled")
    })
})

ChangeBtn.addEventListener("click", () => {
    prompt("Введите желаемый размер");
    gameContainer.innerHTML = "";
    //осталось взять значение из prompt и сделать новый цикл
})
