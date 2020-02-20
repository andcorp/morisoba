<template>
    <div class="root">
        <div class="message">{{ message }}</div>
    </div>
</template>

<style lang="scss">
.root {
    .message {
        color: blue;
        font-weight: bold;
    }
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

/**
 * ルートコンポーネント.
 */
@Component
export default class Root extends Vue {
    message = "Hello, MORISOBA!";
}
</script>
