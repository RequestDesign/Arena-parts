var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 13,
  loop: false,
  navigation: {
    nextEl: null,
    prevEl: null,
  },
  breakpoints: {
    769: {
      slidesPerView: "auto",
      spaceBetween: 13,
    },
    0: {
      slidesPerView: "auto",
      spaceBetween: 10,
    },
  },
});

window.addEventListener("resize", () => updateIcon(isCatalogOpen));
window.addEventListener("load", () => updateIcon(isCatalogOpen));

const buttons = document.querySelectorAll(".btn-search");
const dropdowns = document.querySelectorAll(".dropdowns");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    dropdowns.forEach((dropdown) => {
      dropdown.style.display = "none";
    });
    buttons.forEach((btn) => btn.classList.remove("btn-search_active"));
    button.classList.add("btn-search_active");
    const target = button.getAttribute("data-target");
    document.getElementById(target).style.display = "flex";
  });
});

