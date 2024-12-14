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

function toggleActive(button) {
  const buttonGroup = button.parentElement;
  const buttons = buttonGroup.querySelectorAll(".catalog-btn");

  buttons.forEach((btn) => {
    btn.classList.remove("catalog-btn_active");
  });
  button.classList.add("catalog-btn_active");
}

const catalogButton = document.getElementById("catalogButton");
const catalogIcon = document.getElementById("catalogIcon");
const catalog = document.getElementById("catalog-menu");
const closeButtons = document.querySelectorAll(".close-button");

function updateIcon(isOpen) {
  const isSmallScreen = window.matchMedia("(max-width: 48em)").matches;

  if (isSmallScreen) {
    catalogIcon.innerHTML = isOpen
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L18 18M6 18L18 6" stroke="#1A5FBC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      : '<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.44444 18H24.5556C25.35 18 26 17.325 26 16.5C26 15.675 25.35 15 24.5556 15H1.44444C0.65 15 0 15.675 0 16.5C0 17.325 0.65 18 1.44444 18ZM1.44444 10.5H24.5556C25.35 10.5 26 9.825 26 9C26 8.175 25.35 7.5 24.5556 7.5H1.44444C0.65 7.5 0 8.175 0 9C0 9.825 0.65 10.5 1.44444 10.5ZM0 1.5C0 2.325 0.65 3 1.44444 3H24.5556C25.35 3 26 2.325 26 1.5C26 0.675 25.35 0 24.5556 0H1.44444C0.65 0 0 0.675 0 1.5Z" fill="#1A5FBC"/></svg>';
  } else {
    catalogIcon.innerHTML = isOpen
      ? '<svg class="category-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L10 10M10 10L18 2M10 10L2 18M10 10L18 18" stroke="#1A5FBC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      : '<svg class="category-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.03332 1.66666H4.44999C2.62499 1.66666 1.66666 2.625 1.66666 4.44166V6.025C1.66666 7.84166 2.62499 8.8 4.44166 8.8H6.02499C7.84166 8.8 8.79999 7.84166 8.79999 6.025V4.44166C8.80832 2.625 7.84999 1.66666 6.03332 1.66666Z" fill="#1A5FBC"/><path d="M15.5583 1.66666H13.975C12.1583 1.66666 11.2 2.625 11.2 4.44166V6.025C11.2 7.84166 12.1583 8.8 13.975 8.8H15.5583C17.375 8.8 18.3333 7.84166 18.3333 6.025V4.44166C18.3333 2.625 17.375 1.66666 15.5583 1.66666Z" fill="#1A5FBC"/><path d="M15.5583 11.1917H13.975C12.1583 11.1917 11.2 12.15 11.2 13.9667V15.55C11.2 17.3667 12.1583 18.325 13.975 18.325H15.5583C17.375 18.325 18.3333 17.3667 18.3333 15.55V13.9667C18.3333 12.15 17.375 11.1917 15.5583 11.1917Z" fill="#1A5FBC"/><path d="M6.03332 11.1917H4.44999C2.62499 11.1917 1.66666 12.15 1.66666 13.9667V15.55C1.66666 17.375 2.62499 18.3333 4.44166 18.3333H6.02499C7.84166 18.3333 8.79999 17.375 8.79999 15.5583V13.975C8.80832 12.15 7.84999 11.1917 6.03332 11.1917Z" fill="#1A5FBC"/></svg>';
  }
}
let isCatalogOpen = false;

catalogButton.addEventListener("click", function () {
  isCatalogOpen = !isCatalogOpen;
  catalog.classList.toggle("visible");
  updateIcon(isCatalogOpen);
});

closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    isCatalogOpen = false;
    catalog.classList.remove("visible");
    updateIcon(isCatalogOpen);
  });
});

document.querySelectorAll(".catalog-menu_btn").forEach((button) => {
  button.addEventListener("click", function () {
    document.querySelectorAll(".catalog-menu_btn").forEach((btn) => {
      btn.classList.remove("catalog-menu_btn-active");
    });
    this.classList.add("catalog-menu_btn-active");
  });
});

const authModal = document.getElementById("authModal");
const registerModal = document.getElementById("registerModal");

document.getElementById("openAuthModal").onclick = function () {
  authModal.style.display = "flex";
};

document.getElementById("openRegisterModal").onclick = function () {
  registerModal.style.display = "flex";
};

document.getElementById("closeAuthModal").onclick = function () {
  authModal.style.display = "none";
};

document.getElementById("closeRegisterModal").onclick = function () {
  registerModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == authModal) {
    authModal.style.display = "none";
  }
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
};

const changePasswordModal = document.getElementById("changePasswordModal");
const passwordChangedModal = document.getElementById("passwordChangedModal");

document.getElementById("openChangePasswordModal").onclick = function () {
  changePasswordModal.style.display = "flex"; 
};

document.getElementById("openPasswordChangedModal").onclick = function () {
  passwordChangedModal.style.display = "flex"; 
};

document.getElementById("closeChangePasswordModal").onclick = function () {
  changePasswordModal.style.display = "none"; 
};

document.getElementById("closePasswordChangedModal").onclick = function () {
  passwordChangedModal.style.display = "none"; 
};


window.onclick = function (event) {
  if (event.target == changePasswordModal) {
    changePasswordModal.style.display = "none"; 
  }
  if (event.target == passwordChangedModal) {
    passwordChangedModal.style.display = "none"; 
  }
};
