var noJS = document.querySelector(".nojs");
var headerEl = document.querySelector(".page-header");
var toggleEl = document.querySelector(".page-header__toggle");

noJS.classList.remove("nojs");

toggleEl.onclick = function() {
  headerEl.classList.toggle("page-header--menu-open");
};
