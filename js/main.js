new Swiper('.swiper', {
  loop: true,
  // autoplay: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  spaceBetween: 30,
  effect: 'fade',
  pagination: {
    el: 'swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const toTopEl = document.querySelector('#to-top');
const menu = document.querySelector('#floating-menu');
console.log(menu);

window.addEventListener('scroll', _.throttle(function(){
  // console.log(window.scrollY);
  if(window.scrollY > 500){
    // 버튼 보이기!
  // gsap.to(요소, 지속시간, 옵션);
    gsap.to(toTopEl, 0, {
      x: 0
    });
    gsap.to(menu, 0, {
      y: -80
    });
  }
  else{
    // 버튼 숨기기!
    gsap.to(toTopEl, 0, {
      x: 200
    });
    gsap.to(menu, 0, {
      y: 0
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});
