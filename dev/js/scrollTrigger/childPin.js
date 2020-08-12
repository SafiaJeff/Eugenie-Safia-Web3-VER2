gsap.to("#child",{scrollTrigger:{
    trigger:"#child",
    pin: true,
    pinSpacing: false,
    start: "top 80",
    end: "bottom -1250px",
    markers:true,
    id:"child-pin"
}})