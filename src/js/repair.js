export default function repairOpenFullBlock() {
  let buttonOpenFullList = document.querySelector(".repair-menu__show-all"); // кнопка
let listRepairMenu = document.querySelector(".repair-menu__list"); // список

  buttonOpenFullList.addEventListener("click", function () {
    buttonOpenFullList.classList.toggle("repair-menu__show-all--active");
    listRepairMenu.classList.toggle("repair-menu__list--visible-item"); //разворачиваю список

  if (buttonOpenFullList.classList.contains("repair-menu__show-all")) {
    buttonOpenFullList.textContent = 'Показать все';
  };

  if (buttonOpenFullList.classList.contains("repair-menu__show-all--active")) {
    buttonOpenFullList.textContent = 'Скрыть';
  };
});
}

repairOpenFullBlock();