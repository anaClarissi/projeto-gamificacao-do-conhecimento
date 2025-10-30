const swiperPath = new Swiper('#area-of-activity', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,

  pagination: {
    el: '#area-of-activity .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '#area-of-activity .swiper-button-next',
    prevEl: '#area-of-activity .swiper-button-prev',
  },

  scrollbar: {
    el: '#area-of-activity .swiper-scrollbar',
  },

  breakpoints: {
    0: { slidesPerView: 1 },     // Mobile
    768: { slidesPerView: 2 },   // Tablet
    1024: { slidesPerView: 3 }   // Desktop
  }
});

const swiperQuiz = new Swiper('#area-of-quiz', {

  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  grabCursor: true,

  pagination: {
    el: '#area-of-quiz .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '#area-of-quiz .swiper-button-next',
    prevEl: '#area-of-quiz .swiper-button-prev',
  },

  scrollbar: {
    el: '#area-of-quiz .swiper-scrollbar',
  },

  breakpoints: {
    0: { slidesPerView: 1 },     // Mobile
    768: { slidesPerView: 2 },   // Tablet
    1024: { slidesPerView: 3 }   // Desktop
  }

});

const swiperProfession = new Swiper('#careers', {

  direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  grabCursor: true,

  pagination: {
    el: '#careers .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '#careers .swiper-button-next',
    prevEl: '#careers .swiper-button-prev',
  },

  scrollbar: {
    el: '#careers .swiper-scrollbar',
  },

  breakpoints: {
    0: { slidesPerView: 1 },     // Mobile
    768: { slidesPerView: 2 },   // Tablet
    1024: { slidesPerView: 3 }   // Desktop
  }

});


