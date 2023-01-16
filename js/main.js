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
    // ��ư ���̱�!
  // gsap.to(���, ���ӽð�, �ɼ�);
    gsap.to(toTopEl, 0, {
      x: -132
    });
    gsap.to(menu, 0, {
      y: -80
    });
  }
  else{
    // ��ư �����!
    gsap.to(toTopEl, 0, {
      x: 100
    });
    gsap.to(menu, 0, {
      y: -0
    });
  }
}, 300));
// _.throttle(�Լ�, �ð�)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});
