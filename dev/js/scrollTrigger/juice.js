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

var strawTimeline = gsap.timeline();
strawTimeline
.to("#straw-juice",{duration:15, yPercent: -7})
.to("#straw-juice",{duration:10, yPercent: -130})

            ScrollTrigger.create({
                trigger: "#drinking-anim",
                start: "top 40%",
                end: "bottom 80%",
                animation: strawTimeline,
                toggleActions: "restart none reverse none",
                scrub: 10,
                id: "straw",
                markers:  true
            });