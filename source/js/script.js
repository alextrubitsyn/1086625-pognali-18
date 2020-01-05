var noJS = document.querySelector(".nojs");
var headerEl = document.querySelector(".page-header");
var toggleEl = document.querySelector(".page-header__toggle");
var countryFormEl = document.querySelector(".country-filter--form");
var toggleFormEl = document.querySelector(".country__btn--null");
var countryCatalogEl = document.querySelector(".country-filter--catalog");
var toggleCatalog1El = document.querySelector(".country-filter__toggle");
var toggleCatalog2El = document.querySelector(".country-filter__close");

if (noJS) {
  noJS.classList.remove("nojs");
}

if (toggleEl) {
  toggleEl.onclick = function() {
    headerEl.classList.toggle("page-header--menu-open");
  };
}

if (toggleFormEl) {
  toggleFormEl.onclick = function() {
    countryFormEl.classList.toggle("country-filter--open");
  };
}

if (toggleCatalog1El) {
  toggleCatalog1El.onclick = function() {
    countryCatalogEl.classList.toggle("country-filter--open");
  };
}

if (toggleCatalog2El) {
  toggleCatalog2El.onclick = function() {
    countryCatalogEl.classList.toggle("country-filter--open");
  };
}
