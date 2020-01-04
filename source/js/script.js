var noJS = document.querySelector(".nojs");
var headerEl = document.querySelector(".page-header");
var toggleEl = document.querySelector(".page-header__toggle");
var countryFormEl = document.querySelector(".country-filter--form");
var toggleFormEl = document.querySelector(".country__btn--null");

noJS.classList.remove("nojs");

toggleEl.onclick = function() {
  headerEl.classList.toggle("page-header--menu-open");
};

toggleFormEl.onclick = function() {
  countryFormEl.classList.toggle("country-filter--open");
};
