gsap.registerPlugin(ScrollTrigger);

function safeAddClass(selector, className) {
  const el = document.querySelector(selector);
  if (el) {
    el.classList.add(className);
  } else {
    console.warn(`元素未找到: ${selector}`);
  }
}

// 目錄
ScrollTrigger.create({
  trigger: ".c-summary",
  start: "top center",
  onEnter: () => {
    safeAddClass(".c-summary", "inview");
  },
});

// 階段性執行可行性分析展示
ScrollTrigger.create({
  trigger: ".stair-container",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
    safeAddClass(".stair-container", "inview");
  },
});

// 時間軸展示
ScrollTrigger.create({
  trigger: ".timeline",
  start: "top 33%",
  end: "bottom 80%",
  onEnter: () => {
    safeAddClass(".timeline", "inview");
  },
});

// 計畫社區展示
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
