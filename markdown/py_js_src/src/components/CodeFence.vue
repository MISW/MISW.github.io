<template>
    <pre><code :class="[`language-${ lang }`, 'code-fence']">{{ code }}</code></pre>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        lang: String, // "python"
        code: String,
    },
    mounted() {
        if (typeof this.code !== "string" || this.code.length === 0) {
            console.warn("コードが渡されませんでした");
        }
        (window as any).hljs.initHighlightingOnLoad();
    }
})

</script>
<style lang="scss" scoped>
code.code-fence {
    font-family: "Source Code Pro", monospace;
}
</style>
<style lang="scss">

// https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/github.min.css
// https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/monokai-sublime.min.css
// にbody.darkとbody:not(.dark)を付けて、色合いを調整したもの

.hljs.code-fence {
    body.dark-mode & {
        color: #f8f8f2;
        background: #2e2e2e;
        // box-shadow: 3px 0px 5px rgba(255, 255, 255, 0.6);
        border: solid 1px rgba(255, 255, 255, 0.3);
    }
    body:not(.dark-mode) & {
        color: #333;
        background: #fbfbfb;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    }

    display: block;
    overflow-x: auto;
    padding: .5em;
    line-height: 1.5;
    font-size: 0.9em;
}

body.dark-mode {
    .hljs-tag,
    .hljs-subst {
        color: #f8f8f2;
    }

    .hljs-strong,
    .hljs-emphasis {
        color: #a8a8a2;
    }

    .hljs-bullet,
    .hljs-quote,
    .hljs-number,
    .hljs-regexp,
    .hljs-literal,
    .hljs-link {
        color: #ae81ff;
    }

    .hljs-code,
    .hljs-title,
    .hljs-section,
    .hljs-selector-class {
        color: #a6e22e;
    }

    .hljs-strong {
        font-weight: bold;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-name,
    .hljs-attr {
        color: #f92672;
    }

    .hljs-symbol,
    .hljs-attribute {
        color: #66d9ef;
    }

    .hljs-params,
    .hljs-class .hljs-title {
        color: #f8f8f2;
    }

    .hljs-string,
    .hljs-type,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-selector-id,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-addition,
    .hljs-variable,
    .hljs-template-variable {
        color: #e6db74;
    }

    .hljs-comment {
        color: #e7ffb9;
    }

    .hljs-deletion,
    .hljs-meta {
        color: #e4e4e4;
    }
}

body:not(.dark-mode) {
    .hljs-comment,
    .hljs-quote {
        color: #998;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-subst {
        color: rgb(16, 99, 207);
    }

    .hljs-number,
    .hljs-literal,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-tag .hljs-attr {
        color: #28cfcf;
    }

    .hljs-string,
    .hljs-doctag {
        color: #d14;
    }

    .hljs-title,
    .hljs-section,
    .hljs-selector-id {
        color: #900;
    }

    .hljs-subst {
        font-weight: normal;
    }

    .hljs-type,
    .hljs-class .hljs-title {
        color: #458;
    }

    .hljs-tag,
    .hljs-name,
    .hljs-attribute {
        color: #000080;
        font-weight: normal;
    }

    .hljs-regexp,
    .hljs-link {
        color: #009926;
    }

    .hljs-symbol,
    .hljs-bullet {
        color: #990073;
    }

    .hljs-built_in,
    .hljs-builtin-name {
        color: #0086b3;
    }

    .hljs-meta {
        color: #999;
    }

    .hljs-deletion {
        background: #fdd;
    }

    .hljs-addition {
        background: #dfd;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: bold;
    }
}

</style>