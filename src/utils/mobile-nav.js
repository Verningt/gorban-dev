const mobileNav = () => {
  const headerBtn = document.querySelector(".header__toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      mobileNav.classList.add("open");
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.classList.remove("open");
      setTimeout(() => {
        document.body.style.overflowY = "flex";
      }, 300); // Duration should match the CSS transition duration
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.classList.remove("open");
      setTimeout(() => {
        document.body.style.overflowY = "flex";
      }, 300); // Duration should match the CSS transition duration
    });
  });
};

export default mobileNav;
