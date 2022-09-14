export default function callbackOpen() {
  let buttonCallback = document.querySelector(".userbar__call");
  let menuCallback = document.querySelector(".callback");
  let buttonCallbackClose = document.querySelector(".callback__btn-close");
  let overlay = document.querySelector(".page__overlay");

  buttonCallback.addEventListener("click", function () {
    menuCallback.classList.add("callback--active");
    overlay.classList.add("page__overlay--active");
  });

  buttonCallbackClose.addEventListener("click", function () {
    menuCallback.classList.remove("callback--active");
    overlay.classList.remove("page__overlay--active");
  });


  let buttonCallbackDesctop = document.querySelector(".sidebar__call");

  buttonCallbackDesctop.addEventListener("click", function () {
    menuCallback.classList.add("callback--active");
    overlay.classList.add("page__overlay--active");
  });

  buttonCallbackClose.addEventListener("click", function () {
    menuCallback.classList.remove("callback--active");
    overlay.classList.remove("page__overlay--active");
  });
};

callbackOpen();