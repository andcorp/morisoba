/**
 * Webpackビルド設定.
 */

import { Configuration, Module, Resolve, RuleSetRule } from "webpack";

import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserWebpackPlugin from "terser-webpack-plugin";
import VueLoader from "vue-loader";
import path from "path";

/**
 * ビルドルール定義.
 */
const rules: RuleSetRule[] = [
    // TypeScriptルール
    {
        test: /\.ts$/,
        use: {
            loader: "ts-loader",
            options: {
                // Webpack向けモジュール参照設定。Tree shakingが有効になるよう設定する。
                compilerOptions: {
                    module: "esnext",
                    moduleResolution: "node"
                },

                // Vue SFCに拡張子tsを追加してTypeScript扱いする。
                appendTsSuffixTo: [/\.vue$/]
            }
        }
    },

    // Vue SFCルール
    {
        test: /\.vue$/,
        loader: "vue-loader"
    },

    // SASSルール
    {
        test: /\.s[ac]ss$/i,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
    },

    // CSSルール
    {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
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
    extensions: [".ts", ".js"],

    // パスの別名設定
    alias: {
        // "@/"を"src/ts"に対応させる。
        "@": path.resolve(__dirname, "src/ts")
    }
};

/**
 * Webpack設定.
 */
const config: Configuration = {
    // アプリケーションエントリーポイント定義
    entry: "./src/ts/index.ts",

    // チャンク分割設定
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin()],
        splitChunks: {
            chunks: "all"
        }
    },

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
        }),

        // Vue SFCを処理する。
        new VueLoader.VueLoaderPlugin()
    ]
};

export default config;
