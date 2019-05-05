Array.prototype.forEach.call(document.getElementsByClassName("light-mode-button"), (el: unknown) => {
    if (!(el instanceof HTMLElement)) {
        return;
    }
    el.addEventListener("click", () => {
        document.body.classList.remove("dark")
        try {
            localStorage.setItem("theme", "light");
        } catch (e) {
            console.log(e);
        }
    });
});

Array.prototype.forEach.call(document.getElementsByClassName("dark-mode-button"), (el: unknown) => {
    if (!(el instanceof HTMLElement)) {
        return;
    }
    el.addEventListener("click", () => {
        document.body.classList.add("dark")
        try {
            localStorage.setItem("theme", "dark");
        } catch (e) {
            console.log(e);
        }
    });
});

try {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
} catch (e) {
    console.log(e);
}
