gsap.to("#child",{scrollTrigger:{
    trigger:"#child",
    endTrigger:"#story-text",
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "bottom bottom",
    markers:true,
    id:"child-pin"
}})