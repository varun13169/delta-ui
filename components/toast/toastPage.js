import {initMobileMenu, addFocusBySubSecId} from "/initNavigation.js";

const toastComponent = document.querySelector(".dui-toast");
const demoBtn = document.querySelector("#demo-btn");

demoBtn.addEventListener('click', (e) => {
    toastComponent.classList.remove("dui-util-disp-none");
    setTimeout(() => {
        toastComponent.classList.add("dui-util-disp-none");
    }, 5000);
});

// Add buttin listener for hamburger functionality
const moblFltMenu = document.querySelector(".mobl-flt-menu");
moblFltMenu.addEventListener('click', (e) => {
    const mobileMenu = document.querySelector(".mobile-menu")
    console.log(mobileMenu.classList)
    mobileMenu.style.display !== "none" ? mobileMenu.style.display="flex" : mobileMenu.style.display="none";
})

initMobileMenu();
addFocusBySubSecId("subsec-toast");