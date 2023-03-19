const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(evento) {
  if (evento.type === "touchstart") {
    evento.preventDefault;
  }
  const nav = document.getElementById("nav");
  nav.classList.toggle("activo");
  const ativo = nav.classList.contains("activo");
  evento.currentTarget.setAttribute("aria-expanded", ativo);
  if (ativo) {
    evento.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    evento.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart ", toggleMenu);
