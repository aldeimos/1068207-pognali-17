var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".page-header__toggle");
var headerBackground = document.querySelector(".page-header__background");
var headerLogoWhite = document.querySelector(".page-header__picture--white");
var headerLogoBlue = document.querySelector(".page-header__picture--blue");


mainNav.classList.remove("main-nav--nojs");
headerLogoWhite.classList.add("page-header__picture--opener");

navToggle.addEventListener("click", function () {
  if (mainNav.classList.contains("main-nav__toggle-closed") && navToggle.classList.contains(
      "page-header__toggle--closed")) {
    navToggle.classList.remove("page-header__toggle--closed");
    navToggle.classList.add("page-header__toggle--opened");
    mainNav.classList.remove("main-nav__toggle-closed");
    mainNav.classList.add("main-nav__toggle-opened");
    headerBackground.classList.add("page-header__background--white");
    headerLogoWhite.classList.remove("page-header__picture--opener");
    headerLogoBlue.classList.add("page-header__picture--opener");
  } else {
    navToggle.classList.remove("page-header__toggle--opened");
    navToggle.classList.add("page-header__toggle--closed");
    mainNav.classList.remove("main-nav__toggle-opened");
    mainNav.classList.add("main-nav__toggle-closed");
    headerBackground.classList.remove("page-header__background--white");
    headerLogoWhite.classList.add("page-header__picture--opener");
    headerLogoBlue.classList.remove("page-header__picture--opener");
  }
});
