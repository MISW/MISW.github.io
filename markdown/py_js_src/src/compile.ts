import fs from "fs";
import path from "path";
import { markedWithMacro } from "./markdown_macro";
import { htmlTemplate, questionnaireTemplate } from "./template";

const articleMarkdown = fs.readFileSync(
    path.join("src", "mis_python_javascript.md")).toString();
const style = fs.readFileSync("node_modules/github-markdown-css/github-markdown.css").toString() +
    fs.readFileSync("src/style.css").toString();
const script = fs.readFileSync(
    path.join("tmp", "questionnaire.js")).toString();

const macros = [
    { name: "QUESTIONNAIRE!", renderer: (arg: string) => questionnaireTemplate(arg) },
];
const article = markedWithMacro(articleMarkdown, macros);
const generatedHtml = htmlTemplate(style, article, script);

if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}
fs.writeFileSync(path.join("../", "mis_python_javascript.html"), generatedHtml);
