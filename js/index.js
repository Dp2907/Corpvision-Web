// Header
var btnNavbar = document.querySelector(".navbar-toggler");
var header = document.querySelector(".header");
let flag = true;

btnNavbar.onclick = function () {
  if (flag) {
    header.classList.add("header--active");
    flag = false;
  } else {
    header.classList.remove("header--active");
    flag = true;
  }
};

// Scroll Header
window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".header");
  let toTop = document.querySelector("#pushToTop");

  let navlinkChange = document.querySelectorAll(".nav-link");
  let navlinkContentChange = document.querySelectorAll(".nav-link-content");
  let navbarBrandContent = document.querySelectorAll(".navbar-brand-content");
  let dropdownItem = document.querySelectorAll(".dropdown-item");

  if (window.scrollY > 60) {
    navbarFixed.classList.add("header--sticky");
    toTop.classList.add("visibleButton");

    for (let i = 0; i < navbarBrandContent.length; i++) {
      navbarBrandContent[i].style.color = "var(--heading-color)";
    }
    for (let i = 0; i < navlinkChange.length; i++) {
      navlinkChange[i].style.color = "var(--heading-color)";
      navlinkChange[i].onmouseover = function () {
        navlinkChange[i].style.color = "var(--primary-color)";
      };
      navlinkChange[i].onmouseout = function () {
        navlinkChange[i].style.color = "var(--heading-color)";
      };
    }
    for (let i = 0; i < navlinkContentChange.length; i++) {
      navlinkContentChange[i].style.color = "var(--heading-color)";
      navlinkChange[3].onmouseover = function () {
        navlinkChange[3].style.color = "var(--primary-color)";
        navlinkContentChange[i].style.color = "var(--primary-color)";
      };
      navlinkChange[3].onmouseout = function () {
        navlinkChange[3].style.color = "var(--heading-color)";
        navlinkContentChange[i].style.color = "var(--heading-color)";
      };
    }
    for (let i = 0; i < dropdownItem.length; i++) {
      dropdownItem[i].style.color = "var(--heading-color)";
      dropdownItem[i].onmouseover = function () {
        dropdownItem[i].style.color = "var(--primary-color)";
      };
      dropdownItem[i].onmouseout = function () {
        dropdownItem[i].style.color = "var(--heading-color)";
      };
    }
  } else {
    navbarFixed.classList.remove("header--sticky");
    toTop.classList.remove("visibleButton");

    for (let i = 0; i < navbarBrandContent.length; i++) {
      navbarBrandContent[i].style.color = "#fff";
    }
    for (let i = 0; i < navlinkChange.length; i++) {
      navlinkChange[i].style.color = "#fff";
      navlinkChange[i].onmouseover = function () {
        navlinkChange[i].style.color = "#fff";
      };
      navlinkChange[i].onmouseout = function () {
        navlinkChange[i].style.color = "#fff";
      };
    }
    for (let i = 0; i < navlinkContentChange.length; i++) {
      navlinkContentChange[i].style.color = "#fff";
      navlinkChange[3].onmouseover = function () {
        navlinkContentChange[i].style.color = "#fff";
      };
      navlinkChange[3].onmouseout = function () {
        navlinkContentChange[i].style.color = "#fff";
      };
    }
  }
};

//Search

var btnSearch = document.getElementById("btnSearch");
var iconClose = document.getElementById("icon__close");

function btnSearchHandler() {
  let searchIcon = document.getElementById("searchIcon");
  let body = document.getElementById("body");
  let searchForm = document.getElementById("searchForm");
  let inputSearch = document.getElementById("inputSearch");

  btnSearch.classList.add("search__btn--active");
  searchIcon.classList.add("search__icon--active");
  body.classList.add("search--active");
  searchForm.classList.add("searchForm--active");
  inputSearch.classList.add("searchFormInput--active");
  iconClose.classList.add("icon__close--active");
}

function closeSearchHandler() {
  let searchIcon = document.getElementById("searchIcon");
  let body = document.getElementById("body");
  let searchForm = document.getElementById("searchForm");
  let inputSearch = document.getElementById("inputSearch");

  btnSearch.classList.remove("search__btn--active");
  searchIcon.classList.remove("search__icon--active");
  body.classList.remove("search--active");
  searchForm.classList.remove("searchForm--active");
  inputSearch.classList.remove("searchFormInput--active");
  iconClose.classList.remove("icon__close--active");
}

btnSearch.onclick = btnSearchHandler;
iconClose.onclick = closeSearchHandler;

//Slick Carousel
$(document).ready(function () {
  $(".slider__list").slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    swipe: true,
  });
});

// Light Box
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});

// Owl Carousel
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  // autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});

// Animate
var slider__h1 = document.querySelectorAll("slider__h1 ");
var slider__p = document.querySelectorAll("slider__p");
var slider__btn = document.querySelectorAll("slider__btn");
var slick__arrow = document.querySelectorAll("slick-arrow");
var slider__item = document.querySelectorAll("slider__item");

// $slick__item.on(()=>{console.log("asd");})
for (var i = 0; slick__arrow.length < i++; ) {
  (function (i) {
    slick__arrow[i].addEventListener("click", function () {
      console.log("asdas");
    });
  })(i);
}
