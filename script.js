gsap.from("nav ,#nav-1, #nav-2, #nav-3", {
  y: -60,
  stagger: 1,
  duration: 2,
  opacity: 0,
});

const tl1 = gsap.timeline();
tl1.from("#center", {
  scale: 0,
  opacity: 0,

  scrollTrigger: {
    trigger: "#center",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
});

tl1.from("#content-3", {
  scale: 0,
  //   opacity: -1,
  rotate: "360",

  scrollTrigger: {
    trigger: "#center",
    scroller: "body",
    // markers: true,
    start: "top 40%",
    end: "top 30%",
    scrub: 5,
  },
});
tl1.from("#page2content-2", {
  scale: 0,
  opacity: 0,

  scrollTrigger: {
    trigger: "#center",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 0%",
    scrub: 5,
  },
});
const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    scroller: "body",
    // markers: true,
    start: "top 30%",
    end: "top 0%",
    scrub: true,
  },
});
tl2.from("#page3", {
  transform: "translateX(-10%)",
  opacity: 0,
  duration: 1,
});

tl2.from("#page4one", {
  transform: "translateX(10%)",
  stagger: 1,
  duration: 1.5,
  scale: 0,
});
