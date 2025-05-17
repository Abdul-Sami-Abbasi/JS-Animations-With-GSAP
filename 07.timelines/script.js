let tl = gsap.timeline({
    default: {
        duration: 1,
    }
}).to("h1", {
    y: -100,
    color: "white",  
}).to(".box1", {
    x: -200,
    backgroundColor: "pink",
}).to(".box2", {
    y: 200,
    backgroundColor: "purple",
}).to(".box3", {
    x: 200,
    y: 200,
    backgroundColor: "crimson"
}).to(".box2", {
    x: 200,
    y: -200,
})