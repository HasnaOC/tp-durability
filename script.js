/* mode sombre - mode clair */

const boutonTheme = document.querySelector("#bouton-theme");

boutonTheme.addEventListener("click", function () {
  document.body.classList.toggle("sombre");
  if (document.body.classList.contains("sombre")) {
    boutonTheme.textContent = "Mode clair"
  } else {
    boutonTheme.textContent = "Mode sombre"
  };
});

/* Curseur-taille */

const curseur = document.querySelector("#curseur-taille");
const valeurTaille = document.querySelector("#valeur-taille");

curseur.addEventListener("input", function () {
  document.body.style.fontSize = curseur.value + "%";
  valeurTaille.textContent = curseur.value + "%";
});

/* Le message de bienvenue */

const heure = new Date().getHours();
const salutation = document.querySelector("#salutation");

if (heure <12) {
  salutation.textContent = "Bonjour, bonne lecture !";
} else if (heure <18) {
  salutation.textContent = "Bon après-midi, bonne lecture !";
} else {
  salutation.textContent = "Bonsoir, bonne lecture !";
}

/* Poid navigation */

const POIDS_PAGE_MO = 2;

const champPages = document.querySelector("#pages-par-jour");
const resultat = document.querySelector("#resultat");

document.querySelector("#bouton-calculer").addEventListener("click", function () {
  const pages = Number(champPages.value);
  const parAn = pages * 365;
  const poidsGo = Math.round(parAn * POIDS_PAGE_MO / 1000);

  let message = "Environ " + poidsGo + " Go par an.";

  if (poidsGo < 10) {
    message = message + " C'est raisonnable.";
  } else if (poidsGo < 50) {
    message = message + " C'est déjà beaucoup.";
  } else {
    message = message + " C'est énorme !";
  }

  message = message + " Et ce ne sont que des pages : les vidéos pèsent beaucoup plus.";

  resultat.textContent = message;
});