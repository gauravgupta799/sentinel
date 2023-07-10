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

// Active Page Link
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link =>{
  if(link.href.includes(`${activePage }`)){
    link.classList.add("active");
  }
})

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
// const swiper = document.querySelectorAll('.swiper');

// for(let i = 1; i < swiper.length; i++){
//   var swiperWrapper = swiper[i];

//   swiperWrapper = new Swiper(`.swiper-container-${i}`, {
//     spaceBetween: 30,
//     grabCursor: true,
//     slidesPerView:1,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// }

var swiper1 = new Swiper(".swiper-container-1", {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

var swiper2 = new Swiper(".swiper-container-2", {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".swiper-container-3", {
  spaceBetween: 20,
  grabCursor: true,
  slidesPerView:1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992:{
      spaceBetween: 10,
      slidesPerView:1.5,
    }
  }
});

//====== Swiper end ======