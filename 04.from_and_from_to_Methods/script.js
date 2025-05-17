//from and from to methods
gsap.from(".box1", {
    x:120,
    y:300,
    duration: 1.5,
    ease: 'linear',
    repeat: -1,
    yoyo: true,
})

gsap.from(".box3", {
    x:-120,
    y:-300,
    duration: 1.5,
    ease: 'linear',
    repeat: -1,
    yoyo: true,
})

gsap.fromTo(".box2", {
    opacity: 1,
    borderRadius: 0,
    x:-120,
    y:-300,
    ease: 'linear',
    yoyo: true,
    // duration: 1.5,
    // repeat: -1,
}, {
    opacity: 0,
    borderRadius: '100px',
    x: 120,
    y: 300,
    ease: 'linear',
    duration: 1.5,
    repeat: -1,
    yoyo: true,
})