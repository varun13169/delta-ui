const darkModeBtn = document.querySelector(".header__drk-mode-btn");
const darModeImg = document.querySelector(".header__drk-mode-drk");
const lgtModeImg = document.querySelector(".header__drk-mode-lgt");

darkModeBtn.addEventListener("click", () => {
    const isDarkModeEn = localStorage.getItem("isDarkModeEn");
    isDarkModeEn === null || isDarkModeEn === "0" ? localStorage.setItem("isDarkModeEn", "1") : localStorage.setItem("isDarkModeEn", "0");
    location.reload();

    console.log(localStorage.getItem("isDarkModeEn"));
});

const initTheme = () => {
    const isDarkModeEn = localStorage.getItem("isDarkModeEn");
    if(isDarkModeEn === null || isDarkModeEn === "0") {
        darModeImg.style.display = "none";
        lgtModeImg.style.display = "block";
    }
    else if(isDarkModeEn === "1") {
        darModeImg.style.display = "block";
        lgtModeImg.style.display = "none";
        document.documentElement.style.setProperty('--dui-light-theme-bg', '#000000');
        document.documentElement.style.setProperty('--dui-light-theme-contrast-txt', '#ffffff');
        document.documentElement.style.setProperty('--site-background-color', '#374151');
    }
    else {
        console.error("Error in theme mode, please debug")
    }
}
initTheme();
