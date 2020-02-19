<template>
    <div>{{ message }}</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

/**
 * ルートコンポーネント.
 */
@Component
export default class Root extends Vue {
    message = "Hello, MORISOBA";
}
</script>
