// Menu Hamburguer

const nav = document.querySelector(".navegation");
const closeModal = document.querySelector(".close-modal");

function openMenuModal() {
  nav.classList.add("open-modal");
  closeModal.style.display = "block";
}

function closeMenuModal() {
  nav.classList.remove("open-modal");
  closeModal.style.display = "none";
}

// Modo dark e light

let lightAndDark = false;
const thema = document.querySelector(".thema");

thema.innerHTML = `
    <img
      src="assets/moon.svg"
      onclick="themaAlternation()"
      alt="Imagem lua"
    />
  `;

function themaAlternation() {
  const body = document.querySelector("body");

  lightAndDark ? (lightAndDark = false) : (lightAndDark = true);

  if (lightAndDark) {
    body.classList.add("thema-dark");
    thema.innerHTML = `
    <img
      src="assets/sun.svg"
      onclick="themaAlternation()"
      alt="Imagem lua"
    />
    `;
  } else {
    body.classList.remove("thema-dark");
    thema.innerHTML = `
    <img
       src="assets/moon.svg"
       onclick="themaAlternation()"
       alt="Imagem lua"
    /> `;
  }
}
