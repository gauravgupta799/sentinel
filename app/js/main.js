const loader = document.querySelector(".page-loader");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
// const hamBtn =document.querySelector("#hamnurgur-btn");

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

// hamBtn.addEventListener("click", function(){
//     nav.classList.add(".show")
// })

//====== Swiper start ======
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView:1,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});