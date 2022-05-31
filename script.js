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

// ScrollRevealJS

const scrollRevealTop = {
  origin: "top",
  distance: "30px",
  duration: 1500,
  reset: true,
};

const scrollRevealLeft = {
  origin: "left",
  distance: "30px",
  duration: 1500,
  reset: true,
};

const scrollRevealRight = {
  origin: "right",
  distance: "30px",
  duration: 1500,
  reset: true,
};

const scrollRevealBottom = {
  origin: "bottom",
  distance: "30px",
  duration: 1500,
  reset: true,
};

ScrollReveal().reveal(`.section-four h2`, scrollRevealTop);

ScrollReveal().reveal(
  `.message-introduction, .section-one h2, .section-one p, .section-three h2, .section-three p,
   .form-contact`,
  scrollRevealLeft
);

ScrollReveal().reveal(
  `.img-face, .about p,#portfolio .introduction, .contact-phone`,
  scrollRevealRight
);

ScrollReveal().reveal(
  `.social-media, .container, .container-techs .item`,
  scrollRevealBottom
);

// TypedJS

let typed = new Typed(".type", {
  strings: ["Mateus Magalhaes"],
  typeSpeed: 150,
});
