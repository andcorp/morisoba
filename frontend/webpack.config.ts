/**
 * Webpackビルド設定.
 */

import {
    Configuration,
    Module,
    Resolve,
    RuleSetRule
} from "webpack";

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

/**
 * ビルドルール定義.
 */
const rules: RuleSetRule[] = [

    // TypeScriptルール
    {
        test: /\.ts$/,
        use: "ts-loader"
    }
];

/**
 * モジュール定義.
 */
const module: Module = { rules };

/**
 * モジュール解決方法定義.
 */
const resolve: Resolve = {

    // 省略可能にする拡張子の設定
    extensions: [".ts", ".js"]
}

/**
 * Webpack設定.
 */
const config: Configuration = {

    // アプリケーションエントリーポイント定義
    entry: "./src/ts/index.ts",

    // ソースコード解決
    resolve,

    // モジュール設定
    module,

    // プラグイン設定
    plugins: [
        // ビルド時、出力先をクリーンする。
        new CleanWebpackPlugin(),

        // HTMLファイルを出力する。
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/html/index.html"
        })
    ]
};

export default config;
