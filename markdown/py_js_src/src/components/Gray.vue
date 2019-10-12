<template>
    <span class="gray"><slot></slot></span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})

</script>
<style lang="scss" scoped>
.gray {
    body.dark-mode & {
        opacity: 0.8;
    }
    body:not(.dark-mode) & {
        opacity: 0.7;
    }
    font-size: 0.8em;
}

</style>