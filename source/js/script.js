var noJS = document.querySelector(".nojs");
var headerEl = document.querySelector(".page-header");
var toggleEl = document.querySelector(".page-header__toggle");
var countryFormEl = document.querySelector(".country-filter--form");
var toggleFormEl = document.querySelector(".country__btn--null");
var countryCatalogEl = document.querySelector(".country-filter--catalog");
var toggleCatalogEl = document.querySelector(".country-filter__toggle");

noJS.classList.remove("nojs");

toggleEl.onclick = function() {
  headerEl.classList.toggle("page-header--menu-open");
};

toggleFormEl.onclick = function() {
  countryFormEl.classList.toggle("country-filter--open");
};

toggleCatalogEl.onclick = function() {
  countryCatalogEl.classList.toggle("country-filter--open");
};
