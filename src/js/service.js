export default function serviceOpenText() {
  let buttonOpenFullText = document.querySelector(".services__add-btn");
let hiddenTextTablet = document.querySelector(".services__text-add-tablet");
let hiddenTextMobile = document.querySelector(".services__text-add-mobile");

buttonOpenFullText.addEventListener("click", function () {
  buttonOpenFullText.classList.toggle("services__add-btn--active");
  hiddenTextTablet.classList.toggle("services__text-add--visible");
  hiddenTextMobile.classList.toggle("services__text-add--visible");

  if (buttonOpenFullText.classList.contains("services__add-btn")) {
    buttonOpenFullText.textContent = 'Читать далее';
   };

  if (buttonOpenFullText.classList.contains("services__add-btn--active")) {
    buttonOpenFullText.textContent = 'Скрыть';
  };
});
}


serviceOpenText();


