const mythSwiper = new Swiper('.myths', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class="${className} myth-bullet"></span>`;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
