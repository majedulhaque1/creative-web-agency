var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });