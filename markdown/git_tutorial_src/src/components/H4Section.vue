<template>
    <section class="section-h3">
        <h3 class="section-h3">{{ title }}</h3>
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

section.section-h3 {
    padding: 0 0 1rem 0;
    overflow: hidden;
}

h3.section-h3 {
  font-weight: 600;
  font-size: 1.4em;
}
</style>