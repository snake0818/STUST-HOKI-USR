setTimeout((function () {
    document.documentElement.classList.remove("is-loading");
    document.documentElement.classList.add("is-loaded");
    document.documentElement.classList.add("is-ready")
}), 300);

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {
        breakpoint: 1000
    }
});