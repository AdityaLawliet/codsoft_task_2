
var typed = new Typed(".multiple-text",{
    strings:["Frontend Developer", "Student", "Intern"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

//smooth scroll


// stiky header
const selectionHeroEl = document.querySelector(".home-section");

const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }
},
  {
    // In the Viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px"
  });
obs.observe(selectionHeroEl);

// scroll reveal ****************************************
ScrollReveal({
  reset:true,
  distance:'80px',
  duration:1500,
  delay:200
})
ScrollReveal().reveal('.heading-secondary',{origin:'top'} );
ScrollReveal().reveal('.about-content ',{origin:'right'} );
ScrollReveal().reveal('.skill-container ',{origin:'left'} );
ScrollReveal().reveal('.project-container ',{origin:'bottom'} );

ScrollReveal().reveal('.footer');

// ________________________________________________________

// nav bar active

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll =()=>{
  sections.forEach(sec=>{
    let top =window.scrollY;
    let offset = sec.offsetTop -150;
    let height =sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset +height){
      navLink.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href *=' + id + ']').classList.add('active');
      })
    }
  })
}

// mobile nav
