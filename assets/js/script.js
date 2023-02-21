let cyber = elemento("#cyber img");
let starEl = elemento("#star img");

starbucks();


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


