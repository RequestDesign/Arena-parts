document.addEventListener("DOMContentLoaded", () => {
  const swiperContainer = document.querySelector(".mySwiper");
  if (swiperContainer) {
    var swiper = new Swiper(swiperContainer, {
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
  } else {
    console.log(
      "Элемент .mySwiper не найден, Swiper не будет инициализирован."
    );
  }

  const swiperCategory = document.querySelector(".mySwiperCategory");
  if (swiperCategory) {
    var swiper = new Swiper(swiperCategory, {
      slidesPerView: "auto",
      spaceBetween: 21,
      loop: false,
      navigation: {
        nextEl: "#swiper-next_btn",
        prevEl: null,
      },
      breakpoints: {
        769: {
          slidesPerView: "auto",
          spaceBetween: 21,
        },
        0: {
          slidesPerView: "auto",
          spaceBetween: 9,
        },
      },
    });
  } else {
    console.log(
      "Элемент .mySwiperCategory не найден, Swiper не будет инициализирован."
    );
  }

  const buttons = document.querySelectorAll(".btn-search");
  const dropdowns = document.querySelectorAll(".dropdowns");
  if (buttons.length > 0 && dropdowns.length > 0) {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        dropdowns.forEach((dropdown) => {
          dropdown.style.display = "none";
        });

        buttons.forEach((btn) => btn.classList.remove("btn-search_active"));

        button.classList.add("btn-search_active");

        const target = button.getAttribute("data-target");
        const targetDropdown = document.getElementById(target);

        if (targetDropdown) {
          targetDropdown.style.display = "flex";
        } else {
          console.log(`Целевой элемент с ID ${target} не найден.`);
        }
      });
    });
  } else {
    console.log("Кнопки или дропдауны не инициализированы.");
  }

  // Catalog Menu
  const catalogButton = document.getElementById("catalogButton");
  const catalogIcon = document.getElementById("catalogIcon");
  const catalog = document.getElementById("catalog-menu");
  const closeButtons = document.querySelectorAll(".close-button");
  let isCatalogOpen = false;

  function updateIcon(isOpen) {
    const isSmallScreen = window.matchMedia("(max-width: 48em)").matches;
    catalogIcon.innerHTML = isSmallScreen
      ? isOpen
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L18 18M6 18L18 6" stroke="#1A5FBC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        : '<svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.44444 18H24.5556C25.35 18 26 17.325 26 16.5C26 15.675 25.35 15 24.5556 15H1.44444C0.65 15 0 15.675 0 16.5C0 17.325 0.65 18 1.44444 18ZM1.44444 10.5H24.5556C25.35 10.5 26 9.825 26 9C26 8.175 25.35 7.5 24.5556 7.5H1.44444C0.65 7.5 0 8.175 0 9C0 9.825 0.65 10.5 1.44444 10.5ZM0 1.5C0 2.325 0.65 3 1.44444 3H24.5556C25.35 3 26 2.325 26 1.5C26 0.675 25.35 0 24.5556 0H1.44444C0.65 0 0 0.675 0 1.5Z" fill="#1A5FBC"/></svg>'
      : isOpen
      ? '<svg class="category-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L10 10M10 10L18 2M10 10L2 18M10 10L18 18" stroke="#1A5FBC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      : '<svg class="category-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.03332 1.66666H4.44999C2.62499 1.66666 1.66666 2.625 1.66666 4.44166V6.025C1.66666 7.84166 2.62499 8.8 4.44166 8.8H6.02499C7.84166 8.8 8.79999 7.84166 8.79999 6.025V4.44166C8.80832 2.625 7.84999 1.66666 6.03332 1.66666Z" fill="#1A5FBC"/><path d="M15.5583 1.66666H13.975C12.1583 1.66666 11.2 2.625 11.2 4.44166V6.025C11.2 7.84166 12.1583 8.8 13.975 8.8H15.5583C17.375 8.8 18.3333 7.84166 18.3333 6.025V4.44166C18.3333 2.625 17.375 1.66666 15.5583 1.66666Z" fill="#1A5FBC"/><path d="M15.5583 11.1917H13.975C12.1583 11.1917 11.2 12.15 11.2 13.9667V15.55C11.2 17.3667 12.1583 18.325 13.975 18.325H15.5583C17.375 18.325 18.3333 17.3667 18.3333 15.55V13.9667C18.3333 12.15 17.375 11.1917 15.5583 11.1917Z" fill="#1A5FBC"/><path d="M6.03332 11.1917H4.44999C2.62499 11.1917 1.66666 12.15 1.66666 13.9667V15.55C1.66666 17.375 2.62499 18.3333 4.44166 18.3333H6.02499C7.84166 18.3333 8.79999 17.375 8.79999 15.5583V13.975C8.80832 12.15 7.84999 11.1917 6.03332 11.1917Z" fill="#1A5FBC"/></svg>';
  }
  if (catalogButton && catalog) {
    catalogButton.addEventListener("click", () => {
      isCatalogOpen = !isCatalogOpen;
      catalog.classList.toggle("visible");
      updateIcon(isCatalogOpen);
    });
  } else {
    console.log("Кнопка каталога или меню каталога не инициализирована..");
  }
  if (closeButtons.length > 0) {
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        isCatalogOpen = false;
        catalog.classList.remove("visible");
        updateIcon(isCatalogOpen);
      });
    });
  } else {
    console.log("Кнопки закрытия не инициализирована.");
  }

  const modals = {
    auth: document.getElementById("authModal"),
    register: document.getElementById("registerModal"),
    changePassword: document.getElementById("changePasswordModal"),
    passwordChanged: document.getElementById("passwordChangedModal"),
    cancel: document.getElementById("cancelModal"),
    success: document.getElementById("successModal"),
    findCar: document.getElementById("findCarModal"),
    confirmAddCar: document.getElementById("confirmAddCarModal"),
    payment: document.getElementById("paymentModal"),
    orderSuccess: document.getElementById("orderSuccessModal"),
  };

  // Проверка наличия модальных окон
  Object.entries(modals).forEach(([key, modal]) => {
    if (!modal) {
      console
        .log
        //  не инициализирована.
        ();
    }
  });

  function closeModals() {
    Object.values(modals).forEach((modal) => {
      if (modal) {
        modal.style.display = "none";
      }
    });
  }

  function openModal(modal) {
    if (modals[modal]) {
      closeModals();
      modals[modal].style.display = "flex";
    }
  }

  function showAdditionalButton(option) {
    const allButtons = document.querySelectorAll(".additional-buttons button");
    allButtons.forEach((button) => button.classList.add("hidden"));

    const selectedButton = document.getElementById(option);
    if (selectedButton) {
      selectedButton.classList.remove("hidden");
    }

    const paymentButtons = document.querySelectorAll(".payment-btn");
    paymentButtons.forEach((button) =>
      button.classList.remove("payment-btn_active")
    );

    const currentButton = document.getElementById(
      `paymentOption${option.charAt(option.length - 1)}`
    );
    if (currentButton) {
      currentButton.classList.add("payment-btn_active");
    }
  }

  ["paymentOption1", "paymentOption2", "paymentOption3"].forEach(
    (id, index) => {
      const button = document.getElementById(id);
      if (button) {
        button.addEventListener("click", () => {
          const qrCodeBlock = document.getElementById("qrCodeBlock");
          if (qrCodeBlock) {
            qrCodeBlock.classList.add("hidden");
          }

          const optionButton = document.getElementById(`option${index + 1}`);
          if (optionButton) {
            optionButton.classList.remove("hidden");
          }

          showAdditionalButton(`option${index + 1}`);
        });
      } else {
        //  не инициализирована.
      }
    }
  );

  const option1Button = document.getElementById("option1");
  if (option1Button) {
    option1Button.addEventListener("click", () => {
      const qrCodeBlock = document.getElementById("qrCodeBlock");
      if (qrCodeBlock) {
        qrCodeBlock.classList.remove("hidden");
      }

      option1Button.classList.add("hidden");
    });
  } else {
    // console.log("Кнопка с ID 'option1' не инициализирована.");
    //  не инициализирована.
  }

  const backButton = document.getElementById("backButton");
  if (backButton) {
    backButton.addEventListener("click", () => {
      const qrCodeBlock = document.getElementById("qrCodeBlock");
      if (qrCodeBlock) {
        qrCodeBlock.classList.add("hidden");
      }

      if (option1Button) {
        option1Button.classList.remove("hidden");
      }
    });
  } else {
    //  не инициализирована.
    console.log("Кнопка с ID 'backButton' не инициализирована.");
  }

  document.addEventListener("click", (event) => {
    const { target } = event;

    switch (target.id) {
      case "openAuthModal":
        openModal("auth");
        break;
      case "openRegisterModal":
        openModal("register");
        break;
      case "openChangePasswordModal":
        openModal("changePassword");
        break;
      case "openPasswordChangedModal":
        openModal("passwordChanged");
        break;
      case "openFindCarModal":
        openModal("findCar");
        break;
      case "openConfirmAddCarModal":
        openModal("confirmAddCar");
        break;
      case "openCancelModal":
        openModal("cancel");
        break;
      case "openSuccessModal":
        openModal("success");
        break;
      case "openPaymentModal":
        openModal("payment");
        break;
      case "openOrderSuccessModal":
        openModal("orderSuccess");
        break;
      default:
        break;
    }

    if (target.classList.contains("close-auth")) {
      closeModals();
    }

    if (Object.values(modals).includes(target)) {
      closeModals();
    }
  });

  window.addEventListener("click", function (event) {
    const paymentModal = modals.payment;
    if (paymentModal && event.target === paymentModal) {
      closeModals();
    }
  });
  showAdditionalButton("option1");

  const uploadButton = document.getElementById("uploadButton");
  if (uploadButton) {
    uploadButton.addEventListener("click", () => {
      const fileInput = document.getElementById("fileInput");
      if (fileInput) {
        fileInput.click();
      }
    });
  } else {
    //  не инициализирована.
  }

  const fileInput = document.getElementById("fileInput");
  if (fileInput) {
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement("img");
          img.src = e.target.result;
          img.alt = "Загруженное изображение";
          document.body.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  } else {
    //  не инициализирована.
  }

  const counters = document.querySelectorAll(".orders-product_block-counter");
  counters.forEach((counter) => {
    const orderCountElement = counter.querySelector(".order-count");
    const decreaseButton = counter.querySelector(".decrease-button");
    const increaseButton = counter.querySelector(".increase-button");
    let productCount = 1;

    if (orderCountElement && decreaseButton && increaseButton) {
      function updateProductButtonState() {
        decreaseButton.classList.toggle(
          "orders-circle_active",
          productCount > 1
        );
      }
      updateProductButtonState();

      increaseButton.addEventListener("click", () => {
        productCount++;
        orderCountElement.textContent = productCount;
        updateProductButtonState();
      });

      decreaseButton.addEventListener("click", () => {
        if (productCount > 1) {
          productCount--;
          orderCountElement.textContent = productCount;
          updateProductButtonState();
        }
      });
    } else {
      console.log();
    }
  });

  document.querySelectorAll(".details-top_categories-btn").forEach((group) => {
    const buttonsCatalog = group.querySelectorAll(".catalog-btn");

    buttonsCatalog.forEach((button) => {
      button.addEventListener("click", () => {
        toggleActive(button, buttonsCatalog);
      });
    });
  });
  function toggleActive(activeBtn, buttonsInGroup) {
    buttonsInGroup.forEach((button) => {
      if (button === activeBtn) {
        button.classList.add("catalog-btn_active");
      } else {
        button.classList.remove("catalog-btn_active");
      }
    });
  }

  const customSelects = document.querySelectorAll(".custom-select");
  customSelects.forEach((select) => {
    const selectedOption = select.querySelector(".view-block_select");
    const selectItems = select.querySelector(".select-items");

    if (selectedOption && selectItems) {
      selectedOption.addEventListener("click", () => {
        selectItems.classList.toggle("select-show");
      });

      window.addEventListener("click", (event) => {
        if (!select.contains(event.target)) {
          selectItems.classList.remove("select-show");
        }
      });
    } else {
    }
  });
  window.selectOption = function (item, selectedId) {
    const selectedOption = document.getElementById(selectedId);
    if (selectedOption) {
      selectedOption.innerHTML = `${item.innerHTML} ${getSVGIcon()}`;
      const selectItems = item.closest(".select-items");
      if (selectItems) {
        selectItems.classList.remove("select-show");
      }
    } else {
    }
  };
  function getSVGIcon() {
    return `
      <svg class="select-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7L10 14L17 7" stroke="#121212" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    `;
  }

  ymaps.ready(function () {
    var mapElement = document.getElementById("map");
    if (mapElement) {
      init();
    } else {
      console.log(
        "Элемент с ID 'map' не найден. Карта не будет инициализирована."
      );
    }
  });

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.7282, 37.6915],
      zoom: 16,
      controls: ["zoomControl", "typeSelector"],
    });

    var myPlacemark = new ymaps.Placemark(
      [55.7282, 37.6915],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "assets/images/map/fluent_location-28-filled.png",
        iconImageSize: [30, 30],
        iconImageOffset: [-15, -30],
      }
    );
    myMap.geoObjects.add(myPlacemark);

    var addressDiv = document.createElement("div");
    addressDiv.className = "address-label";
    addressDiv.innerHTML = "Москва, ул. Талалихина, 41 ст.2";

    myMap.container.getElement().appendChild(addressDiv);

    function updateAddressPosition() {
      if (myMap.projection) {
        var coords = myPlacemark.geometry.getCoordinates();
        var pixelCoords = myMap.projection.toGlobalPixels(
          coords,
          myMap.getZoom()
        );
        addressDiv.style.left = pixelCoords[0] + "px";
        addressDiv.style.top = pixelCoords[1] - 30 + "px";
      } else {
        console.log("myMap.projection не определен.");
      }
    }

    updateAddressPosition();

    myPlacemark.events.add("drag", updateAddressPosition);
    myPlacemark.events.add("dragend", updateAddressPosition);
  }
});


const filterTitle = document.querySelector(
  ".product_content-bottom-filter-title"
);
const filterBlock = document.querySelector(".product_content-bottom-filter");
if (filterTitle && filterBlock) {
  filterTitle.addEventListener("click", () => {
    filterBlock.classList.toggle("hiddenr");
  });
  const buttons = filterBlock.querySelectorAll(
    ".personalAccount-content_left-data"
  );
  if (buttons.length > 0) {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) =>
          btn.classList.remove("personalAccount-content_left-data_active")
        );
        button.classList.add("personalAccount-content_left-data_active");
      });
    });
  } else {
    console.warn("Кнопки не найдены внутри блока фильтра.");
  }
} else {
  if (!filterTitle) {
    console.warn("Элемент заголовка фильтра не инициализирован.");
  }
  if (!filterBlock) {
    console.warn("Элемент блока фильтра не инициализирован.");
  }
}


const buttons = document.querySelectorAll(
".productCard_content-bottom_btns button"
);
const contentBlocks = document.querySelectorAll(".product-main_block");
if (buttons.length > 0 && contentBlocks.length > 0) {

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");

      contentBlocks.forEach((block) => {
        block.style.display = "none";
      });
      const targetBlock = document.getElementById(targetId);
      if (targetBlock) {
        targetBlock.style.display = "grid";
      }
      buttons.forEach((btn) => {
        btn.classList.remove("original-top_item-active");
      });
      button.classList.add("original-top_item-active");
    });
  });
} else {
  console.warn("Кнопки или контент-блоки не найдены на странице.");
}
