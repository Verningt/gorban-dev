const mobileNav = () => {
  const headerBtn = document.querySelector(".header__toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  let isMobileNavOpen = false;
  let scrollPosition = 0;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;

    if (isMobileNavOpen) {
      scrollPosition = window.pageYOffset;
      mobileNav.classList.add("open");
      document.body.style.overflowY = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    } else {
      mobileNav.classList.remove("open");
      setTimeout(() => {
        document.body.style.overflowY = "auto";
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollPosition); // Возвращаемся на исходную позицию страницы
      }, 300); // Длительность должна совпадать с CSS transition
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.classList.remove("open");
      setTimeout(() => {
        document.body.style.overflowY = "auto";
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollPosition); // Возвращаемся на исходную позицию страницы
      }, 300); // Длительность должна совпадать с CSS transition
    });
  });
};

export default mobileNav;
