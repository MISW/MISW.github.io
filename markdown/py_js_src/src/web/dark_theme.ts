type Mode = "light-mode" | "dark-mode";

const getMode = (): Mode => {
    try {
        const mode = localStorage.getItem("mode");
        if (mode === "dark-mode") {
            return "dark-mode";
        } else {
            return "light-mode";
        }
    } catch (e) {
        // localStorageへのアクセス権がない場合とか、localStorageが実装されてないブラウザとか
        console.log(e);
        return "light-mode";
    }
};

const saveMode = (mode: Mode) => {
    try {
        localStorage.setItem("mode", mode);
    } catch (e) {
        console.log(e);
    }
};

const setBodyElementClass = (mode: Mode) => {
    if (mode === "dark-mode") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
};

// "ライトモードへ" ボタン
Array.prototype.forEach.call(document.getElementsByClassName("light-mode-button"), (el: unknown) => {
    if (!(el instanceof HTMLElement)) {
        return;
    }
    el.addEventListener("click", () => {
        setBodyElementClass("light-mode");
        saveMode("light-mode");
    });
});

// "ダークモードへ" ボタン
Array.prototype.forEach.call(document.getElementsByClassName("dark-mode-button"), (el: unknown) => {
    if (!(el instanceof HTMLElement)) {
        return;
    }
    el.addEventListener("click", () => {
        setBodyElementClass("dark-mode");
        saveMode("dark-mode");
    });
});

{
    // 旧バージョンのとの互換性を保つ ("theme" -> "mode" に移行した)
    try {
        if (localStorage.getItem("theme") === "dark") {
            saveMode("dark-mode");
        }
        localStorage.removeItem("theme");
    } catch (e) {
        console.log(e);
    }

    // 初期設定
    const mode = getMode();
    setBodyElementClass(mode);
    saveMode(mode);
}
