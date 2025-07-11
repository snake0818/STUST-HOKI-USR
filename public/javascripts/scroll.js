gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".c-summary",
  start: "top center",
  onEnter: () => {
    document.querySelector(".c-summary").classList.add("inview");
  },
});

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
    const growStory = gsap.timeline();
    ScrollTrigger.create({
      animation: growStory,
      trigger: "#WhatDo",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
      anticipatePin: 3,
    });
    growStory
      .from(".community-section", { xPercent: 0 })
      .to(".community-section", { xPercent: -100 })
      .to(".community-section", { xPercent: -200 })
      .to(".community-section", { xPercent: -300 });
  },
});
