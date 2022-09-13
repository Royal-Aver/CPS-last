export default function repairVievOpenFullBlock() {
  let buttonVievFullList = document.querySelector(".repair-viev__show-all"); // кнопка
let listRepairViev = document.querySelector(".repair-viev__list"); // список

buttonVievFullList.addEventListener("click", function () {
  buttonVievFullList.classList.toggle("repair-viev__show-all--active");
  listRepairViev.classList.toggle("repair-viev__list--visible-item"); //разворачиваю список

  if (buttonVievFullList.classList.contains("repair-viev__show-all")) {
    buttonVievFullList.textContent = 'Показать все';
  }

  if (buttonVievFullList.classList.contains("repair-viev__show-all--active")) {
    buttonVievFullList.textContent = 'Скрыть';
  }
})
};

repairVievOpenFullBlock();