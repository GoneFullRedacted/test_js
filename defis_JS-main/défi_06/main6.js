let previousScroll = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > previousScroll) {
    
    navbar.style.top = "-60px"; 
  } else {
    
    navbar.style.top = "0";
  }

  previousScroll = currentScroll;
});