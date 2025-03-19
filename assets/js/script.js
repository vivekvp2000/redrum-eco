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
