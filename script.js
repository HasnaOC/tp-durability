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