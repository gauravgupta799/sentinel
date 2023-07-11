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

//======  Active Page Link start ======
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link =>{
  if(link.href.includes(`${activePage }`)){
    link.classList.add("active");
  }
})
//======  Active Page Link end ======

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


//====== Animation  start ======
const tl = gsap.timeline();
window.addEventListener("load", () => {
  tl.from(".header__logo",{
    delay:0,
    opacity:1,
    y:-50,
    ease: Power4.easeOut,
  });
  tl.from(".nav__item",{
    delay:0,
    opacity:1,
    stagger:0.1,
    y:-60,
    ease: Power4.easeOut,
  });

  tl.from(".hero-animate-fade-up", 0.35, {
    opacity: 0,
    y:-50,
    // delay:0.1,
    ease: Power4.easeOut,
  });
  
  tl.fromTo(".hero-animate-fade",{
    opacity: 0,
    x:-100,
  },{
    opacity:1,
    x:0,
    // duration:0.45,
    delay:0.2,
    ease: Expo.easeInOut,
  });

  tl.from(".hero-button",{
    opacity:0,
    delay:0.3,
    y:50,
    ease: "bounce.Out",
  });

  tl.from(".pagination-btn-fade-up",{
    delay:0.4,
    opacity:1,
    stagger:0.1,
    y:50,
    ease: "bounce.Out",
  });

})

//  animation fade in 
const fadeIn = gsap.utils.toArray(".animate-fade-in");
fadeIn.forEach((mainContent, i) => {
  const anim = gsap.fromTo(
    mainContent,
    { opacity: 0 },
    { duration: 1, opacity: 1, stagger: 0.2 }
  );
  ScrollTrigger.create({
    trigger: mainContent,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    ease: Power4.easeOut,
  });
});

// animate fade in up
const textContainers = gsap.utils.toArray(".animate-fade-in-up");
textContainers.forEach((item, i) => {
  const anim = gsap.fromTo(
    item,
    { opacity: 0, y: 50 },
    { duration: 1, opacity: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    stagger:0.1,
    ease: Power4.easeOut,
  });
});

const imgAnimeLeft = gsap.utils.toArray(".img-animate-left");
imgAnimeLeft.forEach((imgItem, i) =>{
  const anim = gsap.fromTo(imgItem, 
    { opacity: 0, scale:1.6 ,x:-100},
    { opacity: 1, scale:1, duration:1.2, x:0}
  );
  ScrollTrigger.create({
    trigger: imgItem,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    ease: Power4.easeOut,
  });
})

const imgAnimeRight = gsap.utils.toArray(".img-animate-right");
imgAnimeRight.forEach((imgItem, i) =>{
  const anim = gsap.fromTo(imgItem, 
    { opacity: 0, scale:1.6 ,x:60},
    {opacity:1, scale:1, duration:1.2, x:0}
  );
  ScrollTrigger.create({
    trigger: imgItem,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    stagger:0.1,
    ease: Power4.easeOut,
  });
})

const counterLeft = gsap.utils.toArray(".counter-animate-left");
counterLeft.forEach((counter, i) =>{
  const anim = gsap.fromTo(counter, 
    { opacity: 0, x:-100},
    {opacity:1, x:0}
  );
  ScrollTrigger.create({
    trigger: counter,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    stagger:0.1,
    ease: Power4.easeOut,
  });
})

const counterRight = gsap.utils.toArray(".counter-animate-right");
counterRight.forEach((counter, i) =>{
  const anim = gsap.fromTo(counter, 
    { opacity: 0, x:100},
    {opacity:1, x:0}
  );
  ScrollTrigger.create({
    trigger: counter,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    stagger:0.1,
    ease: Power4.easeOut,
  });
})

const leftSlide = gsap.utils.toArray(".slide-left");
leftSlide.forEach((left, i) =>{
  const anim = gsap.fromTo(left, 
    { opacity: 0, x:-100},
    { opacity: 1, x:0 }
  );
  ScrollTrigger.create({
    trigger: left,
    animation: anim,
    toggleActions: "play",
    duration: 3,
    ease: Power4.easeInOut,
  });
})
const rightSlide = gsap.utils.toArray(".slide-right");
rightSlide.forEach((right, i) =>{
  const anim = gsap.fromTo(right, 
    { opacity: 0, x:100},
    { opacity: 1, x:0 }
  );
  ScrollTrigger.create({
    trigger: right,
    animation: anim,
    toggleActions: "play",
    duration: 3,
    ease: Power4.easeInOut,
  });
})
const imgScale = gsap.utils.toArray(".img-scale");
imgScale.forEach((img, i) =>{
  const anim = gsap.fromTo(img, 
    { opacity: 0, scale:0},
    { opacity: 1, scale:1, duration:0.5}
  );
  ScrollTrigger.create({
    trigger: img,
    animation: anim,
    toggleActions: "play",
    delay:0.5,
    stagger:0.1,
    ease: Power4.ease,
  });
})
//====== Animation End ======


//====== Counter start ======
function visible(partial) {
  var $t = partial,
    $w = jQuery(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

  return (
    compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible")
  );
}

$(window).scroll(function () {
  if (visible($(".count-digit"))) {
    if ($(".count-digit").hasClass("counter-loaded")) return;
    $(".count-digit").addClass("counter-loaded");

    $(".count-digit").each(function () {
      if ($(this).html() == Math.floor($(this).html())) {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate(
          { Counter: $this.text() },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.trunc(this.Counter) + 1);
            },
          }
        );
      } else {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate(
          { Counter: $this.text() },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(((this.Counter * 10) / 10).toFixed(1));
            },
          }
        );
      }
    });
  }
});
//====== Counter end ======




// const progress = document.querySelector(".steps__progres");
// const circles = document.querySelectorAll(".steps__circle");
// let currentIndex = 1;
// circles.forEach((circle,i)=>{
//   console.log(circle)
//   circle.addEventListener("click",()=>{
//     if(i < currentIndex){
//       circle.classList.add("active")
//     }else{
//         circle.classList.remove("active")
//     }
//   })
// })
