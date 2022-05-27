const checkbox = document.querySelector("#input");
/*
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    let t = document.querySelector(".switch");
    t.classList.add("switch-izquierda")
}*/
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            document.documentElement.setAttribute("data-theme", "dark");
            let t = document.querySelector(".switch");
            t.classList.add("switch-izquierda");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            let t = document.querySelector(".switch");
            t.classList.remove("switch-izquierda");
        }
    });
function changeTheme() {
    if (checkbox.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        let t = document.querySelector(".switch");
        t.classList.add("switch-izquierda");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
        let t = document.querySelector(".switch");
        t.classList.remove("switch-izquierda"); 
    }
}

