const explorerSwiper = new Swiper('.explorer', {
  pagination: {
    el: '.swiper-pagination.explorer-pagination',
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class="${className} custom-bullet"></span>`;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next.explorer-navigation',
    prevEl: '.swiper-button-prev.explorer-navigation',
  },
});

const mythSwiper = new Swiper('.myths', {
  pagination: {
    el: '.swiper-pagination.myths-pagination',
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class="${className} custom-bullet"></span>`;
    },
  },
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next.myths-navigation',
    prevEl: '.swiper-button-prev.myths-navigation',
  },
});
