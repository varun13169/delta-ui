import {
    initMobileMenu,
    addFocusBySubSecId
} from "/initNavigation.js";

let codePreviewContainerAlert_s = document.querySelector("#container__code-preview--alert-success");
let codePreviewContainerAlert_e = document.querySelector("#container__code-preview--alert-error");
let codePreviewContainerAlert_w = document.querySelector("#container__code-preview--alert-warning");
let codePreviewContainerAlert_i = document.querySelector("#container__code-preview--alert-info");
let codePreviewContainerAlertList = document.querySelectorAll(".container__code-preview");


let componentHolderEles = document.querySelectorAll("#container__component-holder");

componentHolderEles.forEach((ele) => {

    ele.addEventListener('click', (e) => {
        //resetting the border
        componentHolderEles.forEach((ele) => {
            ele.style.removeProperty("border")
        })

        // set the border for the clicked element 
        ele.style.border = `3px solid var(--dui-primary-color-p2-lgt-10pct)`;

        // get index of the clicked element
        let eleIdx = Array.prototype.slice.call(componentHolderEles).indexOf(ele);

        setCodeAllContainerDisplayNone();
        switch (eleIdx) {
            case 0:
                codePreviewContainerAlert_s.classList.remove("dui-util-disp-none");
                break;
            case 1:
                codePreviewContainerAlert_e.classList.remove("dui-util-disp-none");
                break;
            case 2:
                codePreviewContainerAlert_w.classList.remove("dui-util-disp-none");
                break;
            case 3:
                codePreviewContainerAlert_i.classList.remove("dui-util-disp-none");
                break;
        }
    })
})

function setDefault() {
    let eleIdx = 0;
    componentHolderEles.item(eleIdx).style.border = `3px solid var(--dui-primary-color-p2-lgt-10pct)`;
    codePreviewContainerAlert_s.classList.remove("dui-util-disp-none");
}

function setCodeAllContainerDisplayNone() {
    codePreviewContainerAlertList.forEach((e) => {
        e.classList.add("dui-util-disp-none")
    })
}

setDefault();

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
addFocusBySubSecId("subsec-alert");