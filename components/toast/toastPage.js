const toastComponent = document.querySelector(".dui-toast");
const demoBtn = document.querySelector("#demo-btn");

demoBtn.addEventListener('click', (e) => {
    toastComponent.classList.remove("dui-util-disp-none");
    setTimeout(() => {
        toastComponent.classList.add("dui-util-disp-none");
    }, 5000);
});