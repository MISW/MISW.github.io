import fs from "fs";
import { htmlTemplate, questionnaireTemplate, themeButtonHtml } from "../view/template";
import { markedWithMacro } from "./markdown_macro";

const article = markedWithMacro(
    fs.readFileSync("src/view/mis_python_javascript.md").toString(), [
    { name: "QUESTIONNAIRE!", renderer: (arg: string) => questionnaireTemplate(arg) },
    { name: "CHANGE_THEME!", renderer: () => themeButtonHtml},
]);

fs.writeFileSync("../mis_python_javascript.html", htmlTemplate(article));
