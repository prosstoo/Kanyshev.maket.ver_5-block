// import Swiper from 'swiper/bundle';
// import Swiper from '/node_modules/swiper';
// import 'swiper/css/bundle';
// import { Pagination } from "swiper/modules";
// import Swiper bundle with all modules installed
// import Swiper, { Pagination } from 'swiper'
// import Swiper from "swiper";
// import { Pagination } from "swiper/modules";
// var switchSlider = new Swiper(".swiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   loop: true,
//   direction: "horizontal",
//   slideClass:'swiper-slide',
//   slidesPerView: 1.3
// });
// switchSlider();

const brendList = document.querySelector('.brend__list');
const brends = document.querySelector('.block-brend');
const swipeWrapper = brends.querySelector('.swiper-wrapper');
const brendsBtn = document.querySelector('.expander');
const brendsShow = brendsBtn.querySelector('.expander__text');
const brendsArrow = brendsBtn.querySelector('.expander__img');
const slidsHidden = document.querySelectorAll('.swiper_slide__hidden');

var show = brendsBtn.addEventListener('click', function () {
  slidsHidden.forEach(element =>
    element.classList.toggle('swiper_slide__hidden')
  );

  if (brendsShow.textContent === `Скрыть`) {
    brendsShow.textContent = `Показать все`;
    brendsArrow.src = 'assets/expand.svg';
  } else {
    brendsShow.textContent = `Скрыть`;
    brendsArrow.src = 'assets/collapse.svg';
  }
});

const brendSlider = document.querySelector(".swiper");
let mobileSlider;

if (brendSlider) {
  var switchSlider = () => {
    if (window.innerWidth <= 767 && brendSlider.dataset.mobile === "false") {
      mobileSlider = new Swiper(brendSlider, {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        loop: true,
        slidesPerView: 1.3
      });
      brendSlider.dataset.mobile = "true";
    }

    if (window.innerWidth >= 768) {
      brendSlider.dataset.mobile = "false";
      if (mobileSlider && typeof mobileSlider.destroy === 'function') {
        mobileSlider.destroy();
      }

      if (brendSlider.classList.contains("swiper-initialized")) {
        if (typeof mobileSlider.destroy === 'function') {
          mobileSlider.destroy();
        }
      }
    }
  };

  switchSlider();
  window.addEventListener("resize", () => {
    switchSlider();
    show();
  });
} else {
  console.error("Нет элемента с классом 'swiper' в DOM.");
}



// const brends = document.querySelector('.block-brend');
// const swipeWrapper = brends.querySelector('.swiper-wrapper');
// const brendsBtn = document.querySelector('.expander');
// const brendsShow = brendsBtn.querySelector('.expander__text');
// const brendsArrow = brendsBtn.querySelector('.expander__img');
// const slidsHidden = document.querySelectorAll('.swiper_slide__hidden');

// brendsBtn.addEventListener('click', function () {
//   slidsHidden.forEach(element =>
//     element.classList.toggle('swiper_slide__hidden')
//   );
//   if (brendsShow.textContent === `Показать все`) {
//     brendsShow.textContent = `Скрыть`;
//     brendsArrow.src = 'assets/expand.svg';
//   } else {
//     brendsShow.textContent = `Показать все`;
//     brendsArrow.src = 'assets/collapse.svg';
//   }
// });


