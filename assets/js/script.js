gsap.registerPlugin(ScrollTrigger);

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    gsap.to(".banner-img", {
      scale: 0.947442,
      y: "19.112px",
      scrollTrigger: {
        trigger: ".banner-img",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  } else {
    gsap.to(".banner-img", {
      scale: 1,
      y: "0px",
      duration: 0.5,
      ease: "power1.out",
    });
  }
});

gsap.to(".marquee", {
  x: "-100%",
  duration: 30,
  repeat: -1,
  ease: "linear",
});
(() => {
  Fancybox.bind("[data-fancybox]", {});
})();

(() => {
  var swiper = new Swiper(".reviews-slider", {
    loop: true,
    autoplay: true,
    spaceBetween: 20,
    slidesPerView: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      567: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
  document.querySelector(".swiper-button-next").innerHTML =
    '<i class="ri-arrow-right-s-line text-black fs-5"></i>';
  document.querySelector(".swiper-button-prev").innerHTML =
    '<i class="ri-arrow-left-s-line text-black fs-5"></i>';
})();
