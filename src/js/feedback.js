export function feedbackOpen () {
let buttonFeedback = document.querySelector(".chat-btn");
let menuFeedback = document.querySelector(".feedback");
let buttonFeedbackClose = document.querySelector(".feedback__btn-close");
let overlay = document.querySelector(".page__overlay");

buttonFeedback.addEventListener("click", function (e) {
  menuFeedback.classList.add("feedback--active");
  overlay.classList.add("page__overlay--active");
  e.preventDefault();
});

let buttonFeedbackDesctop = document.querySelector(".sidebar__chat");

buttonFeedbackDesctop.addEventListener("click", function (e) {
  menuFeedback.classList.add("feedback--active");
  overlay.classList.add("page__overlay--active");
  e.preventDefault();
});

buttonFeedbackClose.addEventListener("click", function () {
  menuFeedback.classList.remove("feedback--active");
  overlay.classList.remove("page__overlay--active");
});

overlay.addEventListener("click", function () {
  menuFeedback.classList.remove("feedback--active");
  overlay.classList.remove("page__overlay--active");
})

}

feedbackOpen ();

export function cancelsDefaultActionForm() {
  let buttonAction = document.querySelector(".form-popup__btn-submit")

  buttonAction.addEventListener('click', function(e) {
    e.preventDefault();
  })
}

cancelsDefaultActionForm();
