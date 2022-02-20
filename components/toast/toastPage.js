import {
    initMobileMenu,
    addFocusBySubSecId
} from "/initNavigation.js";

const toastComponent = document.querySelector(".dui-toast");
const demoBtn = document.querySelector("#demo-btn");

demoBtn.addEventListener('click', (e) => {
    toastComponent.classList.remove("dui-util-disp-none");
    setTimeout(() => {
        toastComponent.classList.add("dui-util-disp-none");
    }, 5000);
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
addFocusBySubSecId("subsec-toast");