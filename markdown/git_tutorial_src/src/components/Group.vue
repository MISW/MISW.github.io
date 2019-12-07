<template>
    <div class="group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})

</script>
<style lang="scss" scoped>
.group {
    padding: 0.8em 0 0.8em 0;
    overflow: hidden;
}

</style>