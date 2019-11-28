var headerEl = document.querySelector(".page-header");
var toggleEl = document.querySelector(".page-header__toggle");

headerEl.classList.remove("page-header--nojs");

toggleEl.onclick = function() {
  headerEl.classList.toggle("page-header--menu-open");
};
