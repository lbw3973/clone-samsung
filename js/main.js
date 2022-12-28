new Swiper('.swiper', {
  loop: true,
  autoplay: false,
  // autoplay: {
  //   delay:2000,
  //   disableOnInteraction: false
  // },
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
console.log(toTopEl);

window.addEventListener('scroll', _.throttle(function(){
  // console.log(window.scrollY);
  if(window.scrollY > 500){
    gsap.to('#to-top', .2, {
      // ��ư ���̱�!
    // gsap.to(���, ���ӽð�, �ɼ�);
      x: 0
    });
  }
  else{
    // ��ư �����!
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(�Լ�, �ð�)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});