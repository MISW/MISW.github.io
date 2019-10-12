<template>
    <section class="section-h1">
        <h1 class="section-h1">{{ title }}</h1>
        <slot></slot>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        title: String,
    }
})

</script>
<style lang="scss" scoped>
@import "../consts.scss";

section.section-h1 {
    padding: 0 0 3rem 0;
    margin-left: $page-margin;
    margin-right: $page-margin;
    overflow: hidden;
}

h1.section-h1 {
    body.dark-mode & {
        background: $dark-mode-theme-background;
    }
    body:not(.dark-mode) & {
        background: $theme-background;
    }

    font-weight: 900;
    font-size: 4em;
    color: white;
    padding: 3rem 0 3rem $header-indent;
    margin: 0 0 1em 0;
}
</style>