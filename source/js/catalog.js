var legendHobby = document.querySelector(".catalog-filter__legend--hobby");
var legendMusic = document.querySelector(".catalog-filter__legend--music");
var legendFood = document.querySelector(".catalog-filter__legend--food");
var legendTransport = document.querySelector(".catalog-filter__legend--transport");
var legendLevel = document.querySelector(".catalog-filter__legend--level");
var wrapperHobby = document.querySelector(".catalog-filter__wrapper--hobby");
var wrapperMusic = document.querySelector(".catalog-filter__wrapper--music");
var wrapperFood = document.querySelector(".catalog-filter__wrapper--food");
var wrapperTransport = document.querySelector(".catalog-filter__wrapper--transport");
var wrapperLevel = document.querySelector(".catalog-filter__wrapper--level");
var legendArray = [legendHobby, legendMusic, legendFood, legendTransport, legendLevel];
var catalogInputsArray = [wrapperHobby, wrapperMusic, wrapperFood, wrapperTransport, wrapperLevel];

if (window.innerWidth < 767 || window.innerWidth > 1339) {
  for (var i = 0; i <= 4; i++) {
    catalogInputsArray[i].classList.remove("catalog-filter__wrapper--nojs");
    legendArray[i].classList.remove("catalog-filter__legend");
  };
  legendArray[0].addEventListener("click", function () {
    if (catalogInputsArray[0].classList.contains("catalog-filter__wrapper--closed")) {
      catalogInputsArray[0].classList.remove("catalog-filter__wrapper--closed");
      catalogInputsArray[0].classList.add("catalog-filter__wrapper--opened");
      legendArray[0].classList.remove("catalog-filter__legend--hobby");
      legendArray[0].classList.add("catalog-filter__legend");
    } else {
      catalogInputsArray[0].classList.remove("catalog-filter__wrapper--opened");
      catalogInputsArray[0].classList.add("catalog-filter__wrapper--closed");
      legendArray[0].classList.add("catalog-filter__legend--hobby");
      legendArray[0].classList.remove("catalog-filter__legend");
    }
  });

  legendArray[1].addEventListener("click", function () {
    if (catalogInputsArray[1].classList.contains("catalog-filter__wrapper--closed")) {
      catalogInputsArray[1].classList.remove("catalog-filter__wrapper--closed");
      catalogInputsArray[1].classList.add("catalog-filter__wrapper--opened");
      legendArray[1].classList.remove("catalog-filter__legend--hobby");
      legendArray[1].classList.add("catalog-filter__legend");
    } else {
      catalogInputsArray[1].classList.remove("catalog-filter__wrapper--opened");
      catalogInputsArray[1].classList.add("catalog-filter__wrapper--closed");
      legendArray[1].classList.add("catalog-filter__legend--hobby");
      legendArray[1].classList.remove("catalog-filter__legend");
    }
  });

  legendArray[2].addEventListener("click", function () {
    if (catalogInputsArray[2].classList.contains("catalog-filter__wrapper--closed")) {
      catalogInputsArray[2].classList.remove("catalog-filter__wrapper--closed");
      catalogInputsArray[2].classList.add("catalog-filter__wrapper--opened");
      legendArray[2].classList.remove("catalog-filter__legend--hobby");
      legendArray[2].classList.add("catalog-filter__legend");
    } else {
      catalogInputsArray[2].classList.remove("catalog-filter__wrapper--opened");
      catalogInputsArray[2].classList.add("catalog-filter__wrapper--closed");
      legendArray[2].classList.add("catalog-filter__legend--hobby");
      legendArray[2].classList.remove("catalog-filter__legend");
    }
  });

  legendArray[3].addEventListener("click", function () {
    if (catalogInputsArray[3].classList.contains("catalog-filter__wrapper--closed")) {
      catalogInputsArray[3].classList.remove("catalog-filter__wrapper--closed");
      catalogInputsArray[3].classList.add("catalog-filter__wrapper--opened");
      legendArray[3].classList.remove("catalog-filter__legend--hobby");
      legendArray[3].classList.add("catalog-filter__legend");
    } else {
      catalogInputsArray[3].classList.remove("catalog-filter__wrapper--opened");
      catalogInputsArray[3].classList.add("catalog-filter__wrapper--closed");
      legendArray[3].classList.add("catalog-filter__legend--hobby");
      legendArray[3].classList.remove("catalog-filter__legend");
    }
  });

  legendArray[4].addEventListener("click", function () {
    if (catalogInputsArray[4].classList.contains("catalog-filter__wrapper--closed")) {
      catalogInputsArray[4].classList.remove("catalog-filter__wrapper--closed");
      catalogInputsArray[4].classList.add("catalog-filter__wrapper--opened");
      legendArray[4].classList.remove("catalog-filter__legend--hobby");
      legendArray[4].classList.add("catalog-filter__legend");
    } else {
      catalogInputsArray[4].classList.remove("catalog-filter__wrapper--opened");
      catalogInputsArray[4].classList.add("catalog-filter__wrapper--closed");
      legendArray[4].classList.add("catalog-filter__legend--hobby");
      legendArray[4].classList.remove("catalog-filter__legend");
    }
  });
} else {
  for (var i = 0; i <= 4; i++) {
    catalogInputsArray[i].classList.remove("catalog-filter__wrapper--nojs");
    catalogInputsArray[i].classList.add("catalog-filter__wrapper--opened");
  };
}
