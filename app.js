// navigation
var tl = gsap.timeline();
tl.from(".nav h1", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})
tl.from(".nav h3", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3
})
tl.from(".nav h2", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3
})

let darkmode = document.getElementById("dark-mode");
darkmode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
})

document.querySelectorAll(a[href ^= "#"]).forEach(anchore => {
    anchore.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')),
            scrollIntoView({
                behavior: 'smooth'
            });
    });
});
// home
gsap.from(".home h2", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})
gsap.from(".home h1", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
})

// form

let myform = document.querySelector('#myform');
let formoutput = document.querySelector('#formoutput')
myform.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").Value;
    let email = document.getElementById("email").Value;
    let number = document.getElementById("number").Value;
    let message = document.getElementById("message").Value;

})