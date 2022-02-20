import {
    initMobileMenu,
    addFocusBySubSecId
} from "/initNavigation.js";

let codePreviewContainer_btn_p = document.querySelector("#container__code-preview--btn-p");
let codePreviewContainer_btn_s = document.querySelector("#container__code-preview--btn-s");
let codePreviewContainer_btn_t = document.querySelector("#container__code-preview--btn-t");
// let codePreviewContainer_btn_sm = document.querySelector("#container__code-preview--btn-sm");
let codePreviewContainerBtnList = document.querySelectorAll(".container__code-preview");


// let codeNodeList = document.querySelectorAll("#containet__code-preview");

let componentHolderEles = document.querySelectorAll("#container__component-holder");

componentHolderEles.forEach((ele) => {

    ele.addEventListener('click',
        // 
        (e) => {
            const eleRowIdx = ele.getAttribute("data-row-idx");
            const eleColIdx = ele.getAttribute("data-col-idx");

            // resetting the color for eleRowIdx
            componentHolderEles.forEach((ele) => {
                if (ele.getAttribute("data-row-idx") === eleRowIdx) {
                    ele.style.removeProperty("background-color");
                }
            })

            // set the color for the clicked element 
            ele.style.backgroundColor = `var(--dui-primary-color-p2-lgt-10pct)`;

            // get index of the clicked element
            let eleIdx = Array.prototype.slice.call(componentHolderEles).indexOf(ele);

            setAllCodeContainerDisplayForRowNone(eleRowIdx)
            // Update Code for the specific element Row idx and Col Idx
            codePreviewContainerBtnList.forEach((cd) => {
                if ((cd.getAttribute("data-row-idx") === eleRowIdx) &&
                    (cd.getAttribute("data-col-idx") === eleColIdx)) {
                    cd.classList.remove("dui-util-disp-none")
                }
            })
        }
        // 
    )
})


// Need to work on
function setDefault() {
    let eleColIdx = '0';

    componentHolderEles.forEach((ele) => {
        if (ele.getAttribute("data-col-idx") === eleColIdx) {
            ele.style.backgroundColor = `var(--dui-primary-color-p2-lgt-10pct)`;
        } else {
            ele.style.removeProperty("background-color");
        }
    })

    codePreviewContainerBtnList.forEach((e) => {
        if ((e.getAttribute("data-col-idx") === eleColIdx)) {
            e.classList.remove("dui-util-disp-none")
        }
    })
}


function setAllCodeContainerDisplayForRowNone(eleRowIdx) {
    codePreviewContainerBtnList.forEach((e) => {
        if ((e.getAttribute("data-row-idx") === eleRowIdx)) {
            e.classList.add("dui-util-disp-none")
        }
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
addFocusBySubSecId("subsec-button");