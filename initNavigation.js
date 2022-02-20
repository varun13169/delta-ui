import {sections, subSections} from "./db/navDatabase.js";



const mobileMenu = document.querySelector(".mobile-menu")
const initMobileMenu = () => {
    sections.forEach((sec) => {
        const secId = (sec.charAt(0).toLocaleLowerCase() + sec.slice(1)).replaceAll(" ", "");


        mobileMenu.innerHTML += 
        `
        <h2>${sec}</h2>
        <ul id=${secId} class="mobile-menu_list dui-ul dui-ul--notif-stnd dui-util-spc-pad-1_6rem-s dui-util-bdr-radi-10px-m dui-util-gry-shdw">

        </ul>
        `

        let mobileMenuSubSec = document.querySelector(`#${secId}`)
        subSections[sec].forEach((subSec) => {
            mobileMenuSubSec.innerHTML +=
            `
            <li id=${subSec.id}
                class="dui-ul__li dui-ul__li--notif-stnd  dui-util-bdr-radi-m dui-util-gry-shdw">
                    <a class="dui-link dui-light-theme-contrast-txt dui-util-txt-reg dui-util-disp-block dui-util-spc-pad-m" href=${subSec.link}>
                        ${subSec.title}
                    </a>
            </li>
            `
        })
    })
}

const addFocusBySubSecId = (subSecId) => {
    const subSecEle = document.querySelector(`#${subSecId}`);
    subSecEle.querySelector("a").style.backgroundColor = `var(--dui-primary-color-opc-10pct)`;
    subSecEle.querySelector("a").style.color = `var(--dui-primary-color)`;
}

export{initMobileMenu, addFocusBySubSecId}