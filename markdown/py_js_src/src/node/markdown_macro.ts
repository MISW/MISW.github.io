import marked from "marked";

export const markedWithMacro = (
        markdown: string,
        macros: ReadonlyArray<{ name: string, renderer: (arg: string) => string }>): string => {
    const renderer = new marked.Renderer();
    renderer.em = (text) => {
        for (const macro of macros) {
            if (text.startsWith(macro.name)) {
                return macro.renderer(text.replace(macro.name, "").trimLeft());
            }
        }
        return `<em>${text}</em>`;
    };
    return marked(markdown, { renderer });
};
