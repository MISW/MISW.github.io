<template>
    <code class="code-span"><slot></slot></code>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})

</script>
<style lang="scss" scoped>
@import "../consts.scss";

.code-span {
    body.dark-mode & {
        color: $dark-mode-theme-font;
    }
    body:not(.dark-mode) & {
        color: $theme-font;
    }
    font-family: "Source Code Pro", monospace;
    margin: 0 0.3em 0 0.3em;
    padding: 0 0.3em 0 0.3em;
}
</style>