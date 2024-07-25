let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > lastScrollY && window.scrollY > 50) {
    // Скрываем хедер при прокрутке вниз, если прокрутили больше 50px
    header.classList.add("hidden");
  } else {
    // Показываем хедер при прокрутке вверх
    header.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});
