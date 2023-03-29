const linksInternos = document.querySelectorAll('.js-navMenu a[href^="#"');
console.log(linksInternos);
function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })


  console.log(href);
  console.log(section);
}
linksInternos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

//




// const headerMenu = document.querySelectorAll("header-menu li");

// function liMenu(e) {
//   e.preventDefault();
//   console.log(e.currentTarget);
// }
// headerMenu.forEach((li) => {
//   li.addEventListener("click", liMenu);
// });

let cyber = elemento("#cyber img");
let starEl = elemento("#star img");
let pizzaEl = elemento("#pizza img");
let climaEl = elemento("#clima img");
let galeriaEl = elemento("#galeria img");
let quizEl = elemento("#quiz img");
let madEl = elemento("#mad img");
let urnaEl = elemento("#urna img");

document.querySelector(".scroll-button").addEventListener("click", subirTela);

starbucks();
pizzas();
climas();
galerias();
quizzs();
mads();
urnas();

function elemento(el) {
  return document.querySelector(el);
}

// CyberDyne

let i = 0;

setInterval(function () {
  if (i < src.length) {
    cyber.src = src[i];
    i++;
  } else {
    cyber.src = src[0];
    i = 1;
  }
}, 3000);

// Starbucks
let s = 0;
function starbucks() {
  setInterval(() => {
    if (s < star.length) {
      starEl.src = star[s];

      s++;
    } else {
      starEl.src = star[0];
      s = 1;
    }
  }, 3000);
}

// Pizzas

let p = 0;
function pizzas() {
  setInterval(() => {
    if (p < pizza.length) {
      pizzaEl.src = pizza[p];
      p++;
    } else {
      pizzaEl.src = pizza[0];
      p = 0;
    }
  }, 3000);
}

// Clima

let c = 0;
function climas() {
  setInterval(() => {
    if (c < clima.length) {
      climaEl.src = clima[c];
      c++;
    } else {
      climaEl.src = clima[0];
      c = 0;
    }
  }, 3100);
}

// Galeria
let g = 0;
function galerias() {
  setInterval(() => {
    if (g < galeria.length) {
      galeriaEl.src = galeria[g];
      g++;
    } else {
      galeriaEl.src = galeria[0];
      g = 0;
    }
  }, 3000);
}

// Quizz
let q = 0;

function quizzs() {
  setInterval(() => {
    if (q < quiz.length) {
      quizEl.src = quiz[q];
      q++;
    } else {
      quizEl.src = quiz[0];
      q = 0;
    }
  }, 2600);
}

// MadLand

let m = 0;

function mads() {
  setInterval(() => {
    if (m < mad.length) {
      madEl.src = mad[m];
      m++;
    } else {
      madEl.src = mad[0];
      m = 0;
    }
  }, 3000);
}

// Urna

let u = 0;

function urnas() {
  setInterval(() => {
    if (u < urna.length) {
      urnaEl.src = urna[u];
      u++;
    } else {
      urnaEl.src = urna[0];
      u = 0;
    }
  }, 3000);
}

function subirTela() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function hiddenButton() {
  if (window.scrollY === 0) {
    document.querySelector(".scroll-button").style.display = "none";
  } else {
    document.querySelector(".scroll-button").style.display = "flex";
  }
}

window.addEventListener("scroll", hiddenButton);
// Plugin
if (window.SimpleAnime) {
  new SimpleAnime();
}
