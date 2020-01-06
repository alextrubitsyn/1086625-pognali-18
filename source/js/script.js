var noJS = document.querySelector(".nojs");
var headerEl = document.querySelector(".page-header");
var toggleEl = document.querySelector(".page-header__toggle");
var countryFormEl = document.querySelector(".country-filter--form");
var toggleFormEl = document.querySelector(".country__btn--null");
var countryCatalogEl = document.querySelector(".country-filter--catalog");
var toggleCatalog1El = document.querySelector(".country-filter__toggle");
var toggleCatalog2El = document.querySelector(".country-filter__close");
var businessRatesEl = document.querySelector(".business-rates");
var modalOverlayEl = document.querySelector(".modal-overlay");
var modalOpenEl = document.querySelector(".add-profile__business-link");
var modalCloseEl = document.querySelector(".business-rates__close");

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

if (modalOpenEl && modalCloseEl && modalOverlayEl && businessRatesEl) {
  modalOpenEl.addEventListener("click", openModal);
  modalCloseEl.addEventListener("click", closeModal);
  modalOverlayEl.addEventListener("click", closeModal);

  function openModal(event) {
    event.preventDefault();

    modalOverlayEl.classList.add("modal-overlay--open");
    businessRatesEl.classList.add("business-rates--open");
  }

  function closeModal(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    modalOverlayEl.classList.remove("modal-overlay--open");
    businessRatesEl.classList.remove("business-rates--open");
  }

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      event.preventDefault();

      if (businessRatesEl.classList.contains("business-rates--open")) {
        closeModal();
      }
    }
  });
}

if (headerEl) {
  var headerFixed = false;

  window.addEventListener("scroll", headerOnScroll);

  function headerOnScroll() {
    if (document.documentElement.scrollTop > 0) {
      if (headerFixed) {
        return;
      }

      headerEl.classList.add("page-header--scroll");
      headerFixed = true;
    } else {
      if (!headerFixed) {
        return;
      }

      headerEl.classList.remove("page-header--scroll");
      headerFixed = false;
    }
  }
}
