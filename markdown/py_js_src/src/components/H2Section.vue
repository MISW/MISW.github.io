<template>
    <section class="section-h2">
        <h2 class="section-h2"><span class="section-num">{{ num }}</span>{{ title }}</h2>
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

section.section-h2 {
    padding: 6em 0 2rem 0;
    overflow: hidden;
}

h2.section-h2 {
    font-weight: 700;
    font-size: 2.5em;
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
    padding: 0 0.4em 0 $header-indent;
    margin-right: 0.4em;
}
</style>