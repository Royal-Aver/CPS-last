export default function feedbackOpen () {
let buttonFeedback = document.querySelector(".userbar__chat");
let menuFeedback = document.querySelector(".feedback");
let buttonFeedbackClose = document.querySelector(".feedback__btn-close");

buttonFeedback.addEventListener("click", function () {
  menuFeedback.classList.add("feedback--active");
  overlay.classList.add("page__overlay--active");
});

buttonFeedbackClose.addEventListener("click", function () {
  menuFeedback.classList.remove("feedback--active");
  overlay.classList.remove("page__overlay--active");
});

let buttonFeedbackDesctop = document.querySelector(".sidebar__chat");

buttonFeedbackDesctop.addEventListener("click", function () {
  menuFeedback.classList.add("feedback--active");
  overlay.classList.add("page__overlay--active");
});

buttonFeedbackClose.addEventListener("click", function () {
  menuFeedback.classList.remove("feedback--active");
  overlay.classList.remove("page__overlay--active");
});
}

feedbackOpen ();
