/**
 * アプリケーションのエントリーポイント.
 */

import Vue from "vue";
import Root from "@/components/Root.vue";

// ルート要素のVueインスタンスを生成する。
new Vue({
    el: "#app",
    render: (h): Vue.VNode => h(Root)
});
