var promoToggle = document.querySelector(".promo__button");
var promoModal = document.querySelector(".promo__modal");
var promoModalButtonClosed = document.querySelector(".promo__modal-button");

promoModal.classList.remove("promo__modal--nojs");

promoToggle.addEventListener("click", function () {
  if (promoModal.classList.contains("promo__modal--closed")) {
    promoModal.classList.remove("promo__modal--closed");
    promoModal.classList.add("promo__modal--opened");
  }
});

promoModalButtonClosed.addEventListener("click", function () {
  promoModal.classList.remove("promo__modal--opened");
  promoModal.classList.add("promo__modal--closed");
});
