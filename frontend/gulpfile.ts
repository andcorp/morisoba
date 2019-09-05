/**
 * Gulpタスク定義.
 */

import webpack from "webpack";

/**
 * 終了関数.
 */
type DoneFunction = (error?: {}) => void;

// ログ等表示設定
const stats = {
    // ログをカラーコード付きで表示する。
    colors: true,
};

/**
 * ビルドタスク.
 *
 * @param done 終了関数
 */
async function build(done: DoneFunction): Promise<void> {
    // Webpack設定を読み込む。
    const config = (await import("./webpack.config")).default;

    // 本番向けビルド設定に変更する。
    config.mode = "production";
    config.devtool = false;

    // Webpackビルド実行
    webpack(config).run((err, s) => {
        // ビルド結果をログ出力する。
        console.log(s.toString(stats));

        // 処理完了。エラーがあれば報告する。
        done(err ? err : undefined);
    });
}

/**
 * デフォルトタスク.
 */
export default build;
