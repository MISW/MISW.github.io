Array.prototype.forEach.call(document.getElementsByClassName("light-mode-button"), (el: unknown) => {
    if (!(el instanceof HTMLElement)) {
        return;
    }
    el.addEventListener("click", () => document.body.classList.remove("dark"));
});

Array.prototype.forEach.call(document.getElementsByClassName("dark-mode-button"), (el: unknown) => {
    if (!(el instanceof HTMLElement)) {
        return;
    }
    el.addEventListener("click", () => document.body.classList.add("dark"));
});
