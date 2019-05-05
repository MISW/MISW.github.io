const escapeHTMLSpecialChars = (str: string): string => {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#x27;")
              .replace(/\//g, "&#x2F;");
};

const questionnaireAlertProgressTemplate = (id: string, selection: string, details: string) => {
    return `
<h1>以下のデータを送信しています...</h1>
節: ${id}<br>
選択: ${selection}<br>
詳細: ${details === "" ? "なし （詳細を書いてくれると助かります！）" : escapeHTMLSpecialChars(details)}`;
};

const url = "https://script.google.com/macros/s/AKfycbyZ8GSp5pl1Gb82gxPu_fndx4hSFo6mEUUsiJBSamiQhRmtz6k/exec";

// 送信に成功したらPromiseの結果がtrue
// 失敗したらfalseまたはエラー（catchが必要）
const post = (data: { [key: string]: unknown }): Promise<boolean> => {
    // ランダム文字列の生成
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript/8084248#8084248
    const id = Math.random().toString(32).substring(2);

    data.id = id;
    const options: RequestInit = {
        body: JSON.stringify(data),
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        mode: "no-cors",
    };
    return fetch(url, options)
        .then(() => fetch(url))
        .then((res) => res.json())
        .then((json: unknown) => {
            return Array.isArray(json) &&
                    json.some((el: unknown) => Array.isArray(el) && el[0] === id);
        });
};

const showAlert = () => {
    Array.prototype.forEach.call(document.querySelectorAll(".questionnaire button"), (button: HTMLButtonElement) => {
        button.disabled = true;
    });
};

const hideAlert = (box: HTMLElement, messageHTML: string) => {
    box.innerHTML = messageHTML;
    setTimeout(() => {
        box.classList.remove("connection-status-box--show");
        Array.prototype.forEach.call(
            document.querySelectorAll(".questionnaire button"),
            (button: HTMLButtonElement) => {
                button.disabled = false;
            });
    }, 800);
};

Array.prototype.forEach.call(document.getElementsByClassName("questionnaire"), (questionnaire: unknown) => {
    if (!(questionnaire instanceof HTMLElement)) {
        return;
    }

    // IEとかならアンケートを表示しない
    if ((window as any).platform.name !== "Chrome" &&
            (window as any).platform.name !== "Firefox" &&
            (window as any).platform.name !== "Microsoft Edge") {
        // Safariは動作確認できないのでIEと同じ処理
        questionnaire.innerHTML = "";
        return;
    }

    Array.prototype.forEach.call(questionnaire.getElementsByTagName("button"), (button: unknown) => {
        if (!(button instanceof HTMLButtonElement)) {
            return;
        }
        button.addEventListener("click", () => {
            showAlert();
            const details = questionnaire.querySelector("textarea")!.value;
            const box = document.getElementsByClassName("connection-status-box")[0];
            if (!(box instanceof HTMLElement)) {
                throw new Error("'.connection-status-box' was not found");
            }
            box.classList.add("connection-status-box--show");
            box.innerHTML = questionnaireAlertProgressTemplate(questionnaire.id, button.innerText, details);
            post({
                details,
                sectionId: questionnaire.id,
                text: button.innerText,
            }).then((ok: boolean) => {
                if (!ok) {
                    hideAlert(box, `<h1>送信に失敗しました。</h1>`);
                    return;
                }
                hideAlert(box, `<h1>送信に成功しました。</h1>`);
            }).catch((err: unknown) => {
                hideAlert(box, `<h1>エラーが発生しました。</h1>${escapeHTMLSpecialChars("" + err)}`);
                console.error(err);
            });
        });
    });
});
