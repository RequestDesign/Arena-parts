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

function toggleActive(button) {
  const buttonGroup = button.parentElement;
  const buttons = buttonGroup.querySelectorAll(".catalog-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("catalog-btn_active");
  });

  button.classList.add("catalog-btn_active");
}
