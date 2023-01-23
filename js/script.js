("use strict");

console.log("hello");

// mobile menu
let iconsMenu = document.querySelectorAll(".menu-btn");
let menuBody = document.querySelector(".menu");
let navLinks = document.querySelectorAll(".nav__link");
let navLogo = document.querySelector(".header__logo");
let menuWord = document.querySelector('.word');

if (iconsMenu) { 
  iconsMenu.forEach((iconMenu) => {
    iconMenu.addEventListener("click", function (event) {
    event.preventDefault();
    document.body.classList.toggle("_lock");
    menuBody.classList.toggle("_active");
      menuWord.classList.toggle('_hidden');
      iconMenu.classList.toggle('rotate');
  });
  })
}

if (navLinks) {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      document.body.classList.remove("_lock");
      menuBody.classList.remove("_active");
      menuWord.classList.remove('_hidden');
      iconMenu.classList.remove('rotate');
    });
  });
};

 
let offset = 0;  //зміщення зліва
let sliderLine = document.querySelector('.slider__line');

document.querySelector('.next').addEventListener('click', function () {
  offset = offset + 326.31; //
  if (offset > 3905.72) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});


// // sliders 
//   const sliders = document.querySelectorAll('.slider');
//   let isDown = false;
//   let startX;
//   let scrollLeft;

// sliders.forEach((slider) => {
//   slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//     console.log("erreerre", scrollLeft)
//   });
//   slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
//   });

//   slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
//   });

//   slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return; // stop the fn from running
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 2;
//     slider.scrollLeft = scrollLeft - walk;

//     console.log('sdsd', scrollLeft)
//     console.log(slider.scrollLeft)
//   });

//   //   touchEvents

//   slider.addEventListener('touchstart', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//   });

//   slider.addEventListener('touchend', () => {
//     isDown = false;
//     slider.classList.remove('active');
//   });

//   slider.addEventListener('touchcancel', () => {
//     isDown = false;
//     slider.classList.remove('active');
//   });

//   slider.addEventListener('touchmove', (e) => {
//     if (!isDown) return; // stop the fn from running
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 2;
//     slider.scrollLeft = scrollLeft - walk;
//   });
  
// });



