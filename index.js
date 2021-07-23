const navbar = document.querySelector(".navbar");
const links = document.querySelector(".links")
const menu =document.querySelector(".menu");
const secciones = document.querySelectorAll(".section");
const link = document.querySelectorAll(".link");

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = 'rgba(255,255,255,1)');
  window.scrollY < 100 && (navbar.style.background = 'transparent');
});

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle("visible");
  }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

$(".link a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

const functionObserver = entradas =>{
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            const itemActual = Array.from(link).find(item => item.dataset.url === entrada.target.id)
            itemActual.classList.add('activo')
            for (const item of link) {
                if (item != itemActual) {
                    item.classList.remove('activo')
                }
                
            }
        }
    });
}


const observer = new IntersectionObserver(functionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
})

secciones.forEach(seccion => observer.observe(seccion))


const sliders = document.querySelector(".carouselbox");
var scrollPerClick;

scrollPerClick =  300;


var scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick ),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  console.log("Scroll Amount: ", scrollAmount);
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount);

  
}




ScrollReveal().reveal('.sobre_mi', { delay: 450 });
ScrollReveal().reveal('.portafolio', { delay: 450 });
ScrollReveal().reveal('.contacto', { delay: 450 });

