(function () {
    var menu = document.getElementById('menu')
    var texto = document.getElementById('menu__texto')
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            menu.classList.add('menuFixo', 'menuTexto')
        } else {
            menu.classList.remove('menuFixo', 'menuTexto')
        }
    })
})()


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    centeredSlides: true,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
