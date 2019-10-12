<template>
    <button
        type="button"
        class="dark-light-button"
        title="Toggle dark/light mode"
        @click="(ev) => this.$emit('click', ev)">☀</button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})

</script>
<style lang="scss" scoped>
.dark-light-button {
    position: fixed;
    bottom: 30px;
    right: 3%;
    width: 48px;
    height: 48px;
    font-size: 24px;
    border-radius: 50%;
    border-style: none;
    text-align: center;
    letter-spacing: 1px;
    font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
    -webkit-appearance: none;
    padding: 0;

    body.transition-enabled & {
        transition: ease .5s;
    }

    body:not(.dark-mode) & {
        background: black;
        color: white;
    }
    body.dark-mode & {
        background: white;
        color: black;
    }
}

@media screen and (max-width: 720px) {
    .dark-light-button {
        top: 20px; left: 3%;
    }
}
</style>