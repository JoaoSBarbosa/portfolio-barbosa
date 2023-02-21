let cyber = elemento("#cyber img");
let starEl = elemento("#star img");
let pizzaEl = elemento("#pizza img");
let climaEl = elemento("#clima img");
let galeriaEl = elemento("#galeria img");
let quizEl = elemento("#quiz img");
let madEl = elemento("#mad img");


starbucks();
pizzas();
climas();
galerias();
quizzs();

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
}, 2000);

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
  }, 2000);
}


// Pizzas

let p = 0;
function pizzas(){
  setInterval(()=>{
    if(p < pizza.length){
      pizzaEl.src = pizza[p];
      p++;
    }else{
      pizzaEl.src = pizza[0];
      p = 0;
    }
  },2100);
}

// Clima

let c = 0;
function climas(){
  setInterval(()=>{
    if(c < clima.length){
      climaEl.src = clima[c];
      c++
    }else{
      climaEl.src = clima[0];
      c = 0;
    }
  },2300)
}

// Galeria
let g = 0;
function galerias(){
  setInterval(()=>{
    if(g < galeria.length){
      galeriaEl.src = galeria[g];
      g++
    }else{
      galeriaEl.src = galeria[0];
      g = 0;
    }
  },1700)
}

// Quizz
let q = 0;

function quizzs(){

  setInterval(()=>{
    if(q < quiz.length){
      quizEl.src = quiz[q];
      q++
    }else{
      quizEl.src = quiz[0];
      q = 0;
    }
  },2200)
}


