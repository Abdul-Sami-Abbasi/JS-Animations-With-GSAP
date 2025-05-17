let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let restart = document.querySelector('.restart')

let tween = gsap.to(".box", {
    y: -200,
    duration: 1,
    backgroundColor: "teal",
    repeat: -1,
});

play.addEventListener("click", ()=> tween.play());
pause.addEventListener("click", ()=> tween.pause());
restart.addEventListener("click", ()=> tween.restart());