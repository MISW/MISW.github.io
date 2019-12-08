<template>
    <section class="section-h3">
        <h3 class="section-h3"><span class="section-num">{{ num }}</span>{{ title }}</h3>
        <slot></slot>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        num: String,
        title: String,
    }
})

</script>
<style lang="scss" scoped>
@import "../consts.scss";

section.section-h3 {
    padding: 0 0 1rem 0;
    overflow: hidden;
}

h3.section-h3 {
    font-weight: 600;
    font-size: 2em;
    margin-top: 1.2em;
    margin-bottom: 0.4em;
}

.section-num {
    body.dark-mode & {
        background: $dark-mode-theme-background;
    }
    body:not(.dark-mode) & {
        background: $theme-background;
    }
    color: white;
    text-align: right;
    padding: 0em 0.4em 0em $header-indent;
    margin-right: 0.4em;
    display: inline-block;
}

</style>