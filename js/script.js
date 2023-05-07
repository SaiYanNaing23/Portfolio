// Preloader
$(window). on("load", function () {
  $("#status"). fadeOut(2000);
  $("#preloader").delay(1000).fadeOut(100);
});

// ---------- Typing ------------------
var typingEffect = new Typed(".multi-text",{
    strings : [" Coder."," Web Developer.","UI/UX Designer."],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
});

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
checkboxes()

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

