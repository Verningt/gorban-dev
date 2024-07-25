let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    header.classList.add("hidden");
  } else {
    // Scrolling up
    header.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});
