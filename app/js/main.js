const loader = document.querySelector(".page-loader");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const mobileMenu = document.querySelector(".header__mobile-wrapper");
const hamburgerBtn = document.querySelector(".burger__wrapper");
const closeMenuBtn = document.querySelector(".close-btn");

//====== Pre-loader start ======
window.onload = () =>{
  loader.style.display = "none";
}
//====== Pre-loader end ======

//====== Sticky header start ======
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
//====== Sticky header end ======

hamburgerBtn.addEventListener("click", function(){
  mobileMenu.classList.add("show-menu");
})

closeMenuBtn.addEventListener("click", function(){
  mobileMenu.classList.remove("show-menu");
})


//====== Swiper start ======
var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});


var swiper2 = new Swiper(".mySwiper--hero", {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

//====== Swiper end ======


