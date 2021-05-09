// Change Header
window.onscroll = function (event) {
  let navbarFixed = document.querySelector(".header");
  let toTop = document.querySelector("#pushToTop");
  if (window.scrollY > 60) {
    navbarFixed.classList.add("header--sticky");
    toTop.classList.add("visibleButton");
  } else {
    navbarFixed.classList.remove("header--sticky");
    toTop.classList.remove("visibleButton");
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