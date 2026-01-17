// import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


function firstpageAnime() {
    var tl = gsap.timeline();
    tl.from("nav", {
        y: -10,
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut"
    })
        .to(".boundingelem", {
            y: 0,
            ease: "power2.inOut",
            duration: 1.2,
            stagger: .2
        })
        .from(".herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: "power2.inOut"
        })
}


function mousescrollfollow() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector('.minicircle').style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    })
}


mousescrollfollow();
firstpageAnime();


document.querySelectorAll(".box").forEach(function (box) {
    box.addEventListener("mousemove", function (dets) {
        gsap.to(box.querySelector("img"), {
            opacity: 1,
            ease: "power1",
        })
    })
    box.addEventListener("mouseleave", function (dets) {
        gsap.to(box.querySelector("img"), {
            opacity: 0,
            ease: "power1",
        })
    })
})

