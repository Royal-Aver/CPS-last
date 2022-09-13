export default function serviceOpenText() {
  let buttonOpenFullText = document.querySelector(".services__add-btn");
let hiddenText = document.querySelector(".services__text-add");

buttonOpenFullText.addEventListener("click", function () {
  buttonOpenFullText.classList.toggle("services__add-btn--active");
  hiddenText.classList.toggle("services__text-add--visible");

  if (buttonOpenFullText.classList.contains("services__add-btn")) {
    buttonOpenFullText.textContent = 'Читать далее';
   };

  if (buttonOpenFullText.classList.contains("services__add-btn--active")) {
    buttonOpenFullText.textContent = 'Скрыть';
  };
});
}

serviceOpenText();