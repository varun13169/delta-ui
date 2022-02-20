import {initMobileMenu, addFocusBySubSecId} from "/initNavigation.js";

const container = document.querySelector(".container");
const closeModal = document.querySelector(".dui-modal__close");
const modalComponent = document.querySelector(".dui-modal");

const demoBtn = document.querySelector("#demo-btn");

closeModal.addEventListener('click', (e) => {
    container.classList.remove("is-blurred");
    modalComponent.classList.add("dui-util-disp-none");
})

demoBtn.addEventListener('click', (e) => {
    container.classList.add("is-blurred")
    modalComponent.classList.remove("dui-util-disp-none");
});

// Add button listener for hamburger functionality
const moblFltMenu = document.querySelector(".mobl-flt-menu");
moblFltMenu.addEventListener('click', (e) => {
    const mobileMenu = document.querySelector(".mobile-menu");

    const hamBtn = document.querySelector(".dui-btn__icon-ham");
    const clsBtn = document.querySelector(".dui-btn__icon-cls");

    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        hamBtn.style.display = "block";
        clsBtn.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
        hamBtn.style.display = "none";
        clsBtn.style.display = "block";
    }
})

initMobileMenu();
addFocusBySubSecId("subsec-modal");