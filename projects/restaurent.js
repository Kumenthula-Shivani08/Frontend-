let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onClick=()=>{
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');

};
var swiper = new Swiper(".home-slider", {
  grabCursor:true,
  loop:true,
  centeredSlide:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".food-slider", {
  grabCursor:true,
  loop:true,
  centeredSlide:true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food=>{
  food.onClick = ()=>{
    previewContainer.style.display='flex';
let name = food.getAttribute('data-name');
previewBox.forEach(preview=>{
  let target = preview.getAttribute('data-target');
  if(name == target){
    preview.classList.add('active');
  }
});

    // previewContainer.style.display='flex';
    // let name = food.getAttribute('data-name');
    // previewBox.forEach(preview=>{
    //   let target = preview.getAttribute('data-target');
    //   if(name==target){
    //     preview.classList.add('active');
    //   }
    // });
     }
})
