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



// let buttonOpenFullText = document.querySelector(".services__add-btn");
// let textWrapper = document.querySelector(".services__text");
// let text = document.createElement('p');
// text.classList.toggle('services__text-item');
// textWrapper.append(text);
// let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
// let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1366px)');


// if(mobile.matches) {
//   text.textContent = ""
//   }
//   else if(tablet.matches) {
//     text.textContent = "Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера"
//     }

// buttonOpenFullText.addEventListener("click", function () {
//   buttonOpenFullText.classList.toggle("services__add-btn--active");


//   if (buttonOpenFullText.classList.contains("services__add-btn")) {
//         buttonOpenFullText.textContent = 'Читать далее';
//        };

//       if (buttonOpenFullText.classList.contains("services__add-btn--active")) {
//         buttonOpenFullText.textContent = 'Скрыть';
//       };
// });
}


serviceOpenText();