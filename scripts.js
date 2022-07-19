
//// Navbar appear on scroll
//window.addEventListener('scroll', function(e) {
//  var navBar = document.getElementById('myNav');
//  var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//  navBar.style.opacity = Math.min(1, (scroll+1) / 1000);
//});


// Page down functionality
function scrollButton (num){
    let intFrameHeight = window.innerHeight || top.innerHeight || 1000;
    intFrameHeight *=num
    console.log(intFrameHeight)
    window.scrollTo({ top: intFrameHeight, behavior: 'smooth' });
}


// Page down fade in functionality
window.onload = function() {
  setTimeout(fade, 20000);
}

function fade (){
    var i = 0;
    let btn = document.getElementById('myBtn');
    myInterval = window.setInterval(
        function (){
        btn.style.opacity = i/10;
        i++
        if (i === 10){
            clearInterval(myInterval);
        }
    }, 100)
}

// Scroll to top button
function pageTop(){
window.scrollTo(
{top: 0,
  left: 0,
  behavior: 'smooth'}
  );

}

// Carousel Functionality
var slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index*100}%`;
});

let curSlide = 0;
let maxSlide = slides.length - 1;
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

//Next slide button
nextSlide.addEventListener("click", function() {
    if (curSlide ===maxSlide){
    curSlide=0
    }
    else{
    curSlide ++;
    }
    slides.forEach((slide, index) => {
    slide.style.transform = `translatex(${100 * (index - curSlide)}%`
    })
});

//Previous slide button
prevSlide.addEventListener("click", function() {
    if (curSlide ===0){
    curSlide=maxSlide
    }
    else{
    curSlide --;
    }
    slides.forEach((slide, index) => {
    slide.style.transform = `translatex(${100 * (index - curSlide)}%`
    })
});

// Page down colour effect
function changeColour(){
   x = document.getElementById("btnSpan");
   let color = 'rgba(';
   for (let i = 0; i <3; i++){
    color += getRandom(255) +",";
    }
   color += '0.7)'
   x.style.color=color
}

function getRandom (max){
    return Math.floor(Math.random()*max)
}

// Local storage number of page visits
// Typewriter
var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
  loop: false,
  delay: 100,
});

visited = window.localStorage.getItem('visited')

if (visited === 'true'){
typewriter
  .pauseFor(2000)
  .typeString('I see you\'re back for another peek!')
  .pauseFor(500)
  .changeDeleteSpeed(1)
  .deleteChars(70)
  .typeString('Why not get in <a href="mailto:alessiomartello@hotmail.co.uk">touch?</a>')
  .pauseFor(1000)
  .typeString('<br>Or check out my <a href="https://github.com/AlessioMartello" target="_blank" rel="noopener noreferrer">GitHub</a>')
  .pauseFor(1000)
  .typeString('<br>My <a href="Alessio Martello CV.pdf" download="Alessio Martello CV">CV</a> is <em>really</em> nice also...')
  .pauseFor(1000)
  .typeString('<br><span style="font-family: Dancing Script, cursive;">P.s. I made this site myself</span>')
  .start();
  }
else if (visited !== 'true'){
visited = window.localStorage.setItem('visited', 'true');
typewriter
  .pauseFor(2000)
  .typeString('Hi I\'m Alessio!')
  .pauseFor(500)
  .deleteAll()
  .typeString('I\'m a <span style="font-family: Titillium Web, sans-serif";><u><b>Data Engineer</b></u>,</span>')
   .pauseFor(500)
  .typeString('<br><span style="color:#ffde57;">Python programmer<span/>')
 .pauseFor(500)
  .changeDeleteSpeed(2)
  .deleteChars(17)
  .typeString('<span style="color: #3d79aa;"><em>Self-taught </em></span><span style="color:#ffde57;">Python programmer</span>')
  .pauseFor(500)
  .typeString('<br>& <span style="font-family: Dancing Script, cursive;font-size: 3rem;">Web-development enthusiast.</span>')
  .start();
  }


// Horizontal scroll in text
const scrollerRight = document.getElementById("scrollerRight");
const scrollerLeft = document.getElementById("scrollerLeft");
let origShift = window.innerHeight

scrollerRight.style.transform = `translateX(${origShift}px)`;
scrollerLeft.style.transform = `translateX(${-origShift}px)`;

const animate = (element,position) => {
     element.style.transform = `translateX(${position}px)`
};

document.addEventListener('scroll', function(e) {
   window.requestAnimationFrame(function() {
      animate(scrollerRight,origShift-scrollY/2);
    });
});

document.addEventListener('scroll', function(e) {
   window.requestAnimationFrame(function() {
      animate(scrollerLeft,-origShift+scrollY/2)
    });
});

// todo try stop scroll beyond center

window.addEventListener('scroll', fader );
function fader() {
        fadeIn();
        fadeOut();
}

function fadeIn (){
var distInView = scrollerRight.getBoundingClientRect().top - window.innerHeight +20;
        if (distInView < 0) {
            scrollerRight.classList.add("inView");
            scrollerLeft.classList.add("inView");
        }
        else {
            scrollerRight.classList.remove("inView");
            scrollerLeft.classList.remove("inView");
        }
}
function fadeOut(){
        if (scrollerRight.getBoundingClientRect().top >= window.innerHeight/2) {
            scrollerRight.classList.add("outView");
            scrollerLeft.classList.add("outView");
        }
        else{
            scrollerRight.classList.remove("outView");
            scrollerLeft.classList.remove("outView");

        }
}

function getAge(){
    const bday = new Date("03/23/1996");
    let tday = new Date();
    time_diff = tday - bday; //in milliseconds
    day_diff = time_diff / (1000*3600*24);
    let age = Math.floor(day_diff/365);
    document.getElementById('myAge').innerHTML = age;
}
getAge()