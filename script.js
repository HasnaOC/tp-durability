const boutonTheme = document.querySelector("#bouton-theme");

boutonTheme.addEventListener("click", function () {
  document.body.classList.toggle("sombre");
  document.body.classList.contains("sombre");
});