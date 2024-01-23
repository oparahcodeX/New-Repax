let y = document.querySelector('.media-atag');

function slidr1(){
    y.classList.toggle('slide')
}

var swiper = new Swiper(".sliDe", {
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay:{
        delay: 7500,
          disableOnInteraction: false,
        },
  });

  var swiper = new Swiper(".bg-m", {
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay:{
        delay: 7500,
          disableOnInteraction: false,
        },
  });