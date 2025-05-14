let previousScroll = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > previousScroll) {
    // Scroll vers le bas → cacher la navbar
    navbar.style.top = "-60px"; // Ajuste si ta navbar est plus haute
  } else {
    // Scroll vers le haut → montrer la navbar
    navbar.style.top = "0";
  }

  previousScroll = currentScroll;
});