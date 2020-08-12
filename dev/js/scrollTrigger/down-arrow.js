

var arrowTimeline = gsap.timeline();
arrowTimeline.from("#down-arrow",{duration:5, rotate:360})
            

ScrollTrigger.create({
    trigger: "#other-links",
    start: "top 20%",
    end: "bottom 20%",
    animation: arrowTimeline,
    toggleActions: "restart none reverse none",
    scrub: 1,
    markers: true
});


