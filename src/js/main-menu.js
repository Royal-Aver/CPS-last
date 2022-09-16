export default function CallingMainMenu () {
  let buttonBurger = document.querySelector(".burger");
  let sidebar = document.querySelector(".sidebar");
  let buttonClosedMenu = document.querySelector(".sidebar__btn-closed-menu");
  let overlay = document.querySelector(".page__overlay");

  buttonBurger.addEventListener("click", function () {
    buttonBurger.classList.toggle("burger--active");
    sidebar.classList.add("sidebar--active");
    overlay.classList.add("page__overlay--active");
  });

  buttonClosedMenu.addEventListener("click", function () {
    sidebar.classList.remove("sidebar--active");
    overlay.classList.remove("page__overlay--active");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("sidebar--active");
    overlay.classList.remove("page__overlay--active");
  })
}

CallingMainMenu();

// export {CallingMainMenu}


