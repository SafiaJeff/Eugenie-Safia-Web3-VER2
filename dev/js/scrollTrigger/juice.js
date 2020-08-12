var juiceTimeline = gsap.timeline();
juiceTimeline.to("#juice",{duration:5, yPercent: 80})
            .to("#straw-juice",{duration:1, yPercent: 80})

ScrollTrigger.create({
    trigger: "#drinking-anim",
    start: "top 40%",
    end: "bottom 60%",
    animation: juiceTimeline,
    toggleActions: "restart none reverse none",
    scrub: 15,
    id: "juice"
    // markers:  true
});