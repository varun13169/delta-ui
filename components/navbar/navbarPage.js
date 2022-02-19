import {initMobileMenu, addFocusBySubSecId} from "/initNavigation.js";

// Add buttin listener for hamburger functionality
const moblFltMenu = document.querySelector(".mobl-flt-menu");
moblFltMenu.addEventListener('click', (e) => {
    const mobileMenu = document.querySelector(".mobile-menu")
    console.log(mobileMenu.classList)
    mobileMenu.style.display !== "none" ? mobileMenu.style.display="flex" : mobileMenu.style.display="none";
})

initMobileMenu();
addFocusBySubSecId("subsec-navbar");