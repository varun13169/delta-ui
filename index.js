

let drawerContent = document.querySelectorAll(".drawer__content");

let iframeList = document.querySelectorAll(".container__iframe");
let avatarIframe = document.querySelector(".container__iframe--avatar-component");
let alertIframe = document.querySelector(".container__iframe--alert-component");
let badgeIframe = document.querySelector(".container__iframe--badge-component");

drawerContent.forEach((element) =>{
    element.addEventListener("click", (e)=>{
        addClassToAllElements(iframeList, "display-none");
        removeClassFromAllElements(drawerContent, "drawer__content--focus");

        const drawerContentClicked = e.target;
        drawerContentClicked.classList.add("drawer__content--focus");

        switch(drawerContentClicked.id) {
            case "drawer__content--avatar":
                avatarIframe.classList.remove("display-none");
              break;
            case "drawer__content--alert":
                alertIframe.classList.remove("display-none")
              break;
            case "drawer__content--badge":
                badgeIframe.classList.remove("display-none")
            break;
            default:
                console.error("Error: No switch case found !!")
          }
    });
})

function addClassToAllElements(eleList, className) {
    eleList.forEach((ifr) => {ifr.classList.add(className)});
}
function removeClassFromAllElements(eleList, className) {
    eleList.forEach((ifr) => {ifr.classList.remove(className)});
}
