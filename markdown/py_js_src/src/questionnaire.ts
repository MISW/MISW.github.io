const url = "https://script.google.com/macros/s/AKfycbyZ8GSp5pl1Gb82gxPu_fndx4hSFo6mEUUsiJBSamiQhRmtz6k/exec"

const escapeHTMLSpecialChars = (str: string): string => {
    return str.replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/&/g, "&amp;")
              .replace(/"/, "&quot;")
              .replace(/'/, "&#x27;")
              .replace(/\//, "&#x2F;");
};

// 送信に成功したらPromiseの結果がtrue
// 失敗したらfalseまたはエラー（catchが必要）
const post = (data: { [key: string]: unknown }): Promise<boolean> => {
    // ランダム文字列の生成
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript/8084248#8084248
    const id = Math.random().toString(32).substring(2);

    data.id = id;
    const options: RequestInit = {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    };
    return fetch(url, options)
        .then(() => fetch(url))
        .then((res) => res.json())
        .then((json: unknown) => {
            return Array.isArray(json) &&
                    json.some((el: unknown) => Array.isArray(el) && el[0] === id);
        });
};

const disableAllButtons = () => {
    Array.prototype.forEach.call(document.querySelectorAll(".questionnaire button"), (button: HTMLButtonElement) => {
        button.disabled = true;
    });
};

const enableAllButtons = () => {
    Array.prototype.forEach.call(document.querySelectorAll(".questionnaire button"), (button: HTMLButtonElement) => {
        button.disabled = false;
    });
};

Array.prototype.forEach.call(document.getElementsByClassName("questionnaire"), (questionnaire: unknown) => {
        if (!(questionnaire instanceof HTMLElement)) {
            return;
        }
        Array.prototype.forEach.call(questionnaire.getElementsByTagName("button"), (button: unknown) => {
            if (!(button instanceof HTMLButtonElement)) {
                return;
            }
            button.addEventListener("click", () => {
                disableAllButtons()

                const details = escapeHTMLSpecialChars(questionnaire.querySelector("textarea")!.value);
                const box = document.getElementsByClassName("connection-status-box")[0];
                if (!(box instanceof HTMLElement)) {
                    throw new Error("'.connection-status-box' was not found");
                }
                box.classList.add("connection-status-box--show");
                box.innerHTML = `
<h1>以下のデータを送信しています...</h1>
節: ${questionnaire.id}<br>
選択: ${button.innerText}<br>
詳細: ${details === "" ? "なし （詳細を書いてくれると助かります！）" : details}`;
                post({
                    details,
                    sectionId: questionnaire.id,
                    text: button.innerText,
                }).then((ok: boolean) => {
                    box.innerHTML = `<h1>送信に成功しました。</h1>`;
                    setTimeout(() => {
                        box.classList.remove("connection-status-box--show");
                        enableAllButtons();
                    }, 800);
                }).catch((err) => {
                    box.innerHTML = `<h1>エラーが発生しました</h1>${err}`;
                    box.classList.remove("connection-status-box--show");
                    console.error(err);
                    enableAllButtons();
                });
            });
        });
    });
