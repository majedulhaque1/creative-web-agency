
        var swiper = new Swiper(".clientSwiper", {
          slidesPerView: 1,
          spaceBetween: 100,
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
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
          },
        });