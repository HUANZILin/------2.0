let nav = document.querySelector("nav ul");
let nav_a = document.querySelectorAll("nav ul li a");
let nav_index_logo = document.querySelector("#index_logo");
let nav_diary_logo = document.querySelector("#diary_logo");
let nav_resource_logo = document.querySelector("#resource_logo");
let nav_photograph_logo = document.querySelector("#photograph_logo");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    nav.style = "background-color:#cd8b02";
    nav_a.forEach((a) => {
      a.style = "color:#fcfaf2";
    });
    nav_index_logo.src = "./logo/index_logo_active.png";
    nav_diary_logo.src = "./logo/diary_logo_active.png";
    nav_resource_logo.src = "./logo/resource_logo_active.png";
    nav_photograph_logo.src = "./logo/photograph_logo_active.png";
  } else {
    nav.style = "";
    nav_a.forEach((a) => {
      a.style = "";
    });
    nav_index_logo.src = "./logo/index_logo.png";
    nav_diary_logo.src = "./logo/diary_logo.png";
    nav_resource_logo.src = "./logo/resource_logo.png";
    nav_photograph_logo.src = "./logo/photograph_logo.png";
  }
});
