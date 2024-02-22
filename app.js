const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

// добавляем событие для кнопки при действии click
burger.addEventListener("click", () => {
  menu.classList.toggle("disp");
});
