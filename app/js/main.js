const loader = document.querySelector(".page-loader");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const mobileMenu = document.querySelector(".header__mobile-wrapper");
const hamburgerBtn = document.querySelector(".burger__wrapper");
const closeMenuBtn = document.querySelector(".close-btn");
// const navItem = document.querySelectorAll(".nav__item");

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

//======  Active menu link start ======
// navItem.forEach((item)=>{
//   item.addEventListener("click", ()=>{
//     item.classList.add("active");
//   })
// })
//======  Active menu link end ======



//====== Swiper start ======
var swiper = new Swiper(".mySwiper", {
  // spaceBetween: 30,
  grabCursor: true,
  slidesPerView:1,
  // loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 25
    }
  }
});


var swiper = new Swiper(".mySwiper--hero", {
  // spaceBetween: 30,
  grabCursor: true,
  slidesPerView:1,
  // loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 25
    }
  }
});

//====== Swiper end ======