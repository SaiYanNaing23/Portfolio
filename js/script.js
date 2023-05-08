// Preloader
$(window). on("load", function () {
  $("#status"). fadeOut(2000);
  $("#preloader").delay(1000).fadeOut(100);
});
// Scrolling Nav// 
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
// scroll reveal
ScrollReveal({ 
  reset: true, 
  distance  : "50rem",
  duration : 2500,
  delay : 200,
});
// hero-img
ScrollReveal().reveal('.item-1', { delay: 400,distance : "20rem" });
// contact
ScrollReveal().reveal('.item-2', { delay: 300, origin: "left",distance : "20rem"});
// fb-icon
ScrollReveal().reveal('.item-3', { delay: 500, origin: "left",distance : "10rem"});
// linkin-icon
ScrollReveal().reveal('.item-4', { delay: 500, origin: "right", distance : "10rem"});
// Name
ScrollReveal().reveal('.item-5', { delay: 500, origin: "top", distance : "20rem"});
ScrollReveal().reveal('.item-6', { delay: 500, origin: "top", distance : "10rem"});

// ---------- Typing ------------------
var typingEffect = new Typed(".multi-text",{
    strings : [" Coder."," Web Developer.","UI/UX Designer."],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
});

// Sticky
window.addEventListener("scroll",()=>{
  const header = document.querySelector(".header")
  header.classList.toggle("sticky", window.scrollY > 500)
  // mobile-nav-remove
  document.querySelector(".header").classList.remove  ("nav-open")

})
// ---------- Project Swiper ------------------
let swiper = new Swiper(".project-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// ---------- Share-icon-toggle ------------------

let toggle = document.querySelector(".toggle")
let menu = document.querySelector(".menu")
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active")
})

// ---------- Scrolling------------------
const boxes = document.querySelectorAll(".box")
window.addEventListener("scroll", checkBoxes)
// checkboxes()

function checkBoxes (){
  const triggerBottom = window.innerHeight /5 *4
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top
    if(boxTop < triggerBottom){
      box.classList.add("show")
    }else{
      box.classList.remove("show")
    }
  })
}

// ---------- mobile nav bar------------------
document.querySelector(".mobile-nav").addEventListener("click", ()=>{
  document.querySelector(".header").classList.toggle("nav-open")
})