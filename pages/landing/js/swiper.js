const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    0: { slidesPerView: 1 },     // Mobile
    768: { slidesPerView: 2 },   // Tablet
    1024: { slidesPerView: 3 }   // Desktop
  }
});
