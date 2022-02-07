let codePreviewContainerAvatar_xlg = document.querySelector("#container__code-preview--avatar-xlg");
let codePreviewContainerAvatar_lg = document.querySelector("#container__code-preview--avatar-lg");
let codePreviewContainerAvatar_md = document.querySelector("#container__code-preview--avatar-md");
let codePreviewContainerAvatar_sm = document.querySelector("#container__code-preview--avatar-sm");
let codePreviewContainerAvatarList = document.querySelectorAll(".container__code-preview");

let componentHolderEles = document.querySelectorAll("#container__component-holder");

componentHolderEles.forEach((ele) => {

    ele.addEventListener('click', (e) => {
        //resetting the color
        componentHolderEles.forEach((ele) => {
            ele.style.removeProperty("background-color")
        })

        // set the color for the clicked element 
        ele.style.backgroundColor = `var(--primary-color-p2-lgt-10pct)`;

        // get index of the clicked element
        let eleIdx = Array.prototype.slice.call(componentHolderEles).indexOf(ele);
        setCodeAllContainerDisplayNone();
        switch (eleIdx) {
            case 0:
                codePreviewContainerAvatar_xlg.classList.remove("dui-util-disp-none");
                break;
            case 1:
                codePreviewContainerAvatar_lg.classList.remove("dui-util-disp-none");
                break;
            case 2:
                codePreviewContainerAvatar_md.classList.remove("dui-util-disp-none");
                break;
            case 3:
                codePreviewContainerAvatar_sm.classList.remove("dui-util-disp-none");
                break;
        }
    })
})

function setDefault() {
    let eleIdx = 0;
    componentHolderEles.item(eleIdx).style.backgroundColor = `var(--primary-color-p2-lgt-10pct)`;
    codePreviewContainerAvatar_xlg.classList.remove("dui-util-disp-none");
}

function setCodeAllContainerDisplayNone() {
    codePreviewContainerAvatarList.forEach((e) => {
        e.classList.add("dui-util-disp-none")
    })
}

setDefault();