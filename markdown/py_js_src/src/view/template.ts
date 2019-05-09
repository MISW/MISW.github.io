import fs from "fs";

export const htmlTemplate = (article: string) =>
`<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Python, JavaScriptの始め方</title>
    <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Source+Code+Pro" rel="stylesheet">
    <style>${fs.readFileSync("node_modules/github-markdown-css/github-markdown.css").toString()}</style>
    <style>${fs.readFileSync("src/view/style.css").toString()}</style>
    <style>${fs.readFileSync("src/view/hljs_theme.css").toString()}</style>
    <style>${fs.readFileSync("src/view/dark_theme.css").toString()}</style>
</head>
<body>
    <main class="markdown-body">
        ${article}
    </main>
    <div class="connection-status-box">
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.5/platform.min.js" integrity="sha256-a5JlAx3qX6Rkvx+38zcjAPQLDQVUIwwwUeOrlDQ5W8s=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js" integrity="sha256-aYTdUrn6Ow1DDgh5JTc3aDGnnju48y/1c8s1dgkYPQ8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/languages/typescript.min.js" integrity="sha256-LWmmFG1DeNLUUp0G4vr7vjaHOEFAvzYZ9exFbHFvg8w=" crossorigin="anonymous"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    <script>${fs.readFileSync("tmp/questionnaire.js").toString()}</script>
    <script>${fs.readFileSync("tmp/dark_theme.js").toString()}</script>
</body>
</html>`;

export const questionnaireTemplate = (id: string) =>
`<div class="questionnaire" id="${id}">
<section class="questionnaire__outline">
<h1>アンケート: ここまで理解できましたか？</h1>
<button>分かった</button>
<button>分からなかった</button>
<button>実行したらエラーが出た</button>
<textarea placeholder="詳細をここに書いてください（任意）"></textarea>
</section>
</div>`;

export const themeButtonHtml = `
<button class="light-mode-button">ライトモードへ</button>
<button class="dark-mode-button">ダークモードへ</button>
`;
