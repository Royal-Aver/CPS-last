export default function callbackOpen() {
  let buttonCallback = document.querySelector(".call-btn");
  let menuCallback = document.querySelector(".callback");
  let buttonCallbackClose = document.querySelector(".callback__btn-close");
  let overlay = document.querySelector(".page__overlay");

  buttonCallback.addEventListener("click", function (e) {
    menuCallback.classList.add("callback--active");
    overlay.classList.add("page__overlay--active");
    e.preventDefault();
  });

  let buttonCallbackDesctop = document.querySelector(".sidebar__call");

  buttonCallbackDesctop.addEventListener("click", function (e) {
    menuCallback.classList.add("callback--active");
    overlay.classList.add("page__overlay--active");
    e.preventDefault();
  });

  buttonCallbackClose.addEventListener("click", function () {
    menuCallback.classList.remove("callback--active");
    overlay.classList.remove("page__overlay--active");
  });

  overlay.addEventListener("click", function () {
    menuCallback.classList.remove("callback--active");
    overlay.classList.remove("page__overlay--active");
  })
};

callbackOpen();