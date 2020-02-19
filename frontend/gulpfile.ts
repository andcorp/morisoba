/**
 * Gulpタスク定義.
 */

import webpack, { Configuration } from "webpack";
import WebpackDevServer from "webpack-dev-server";

/**
 * 終了関数.
 */
type DoneFunction = (error?: {}) => void;

// ログ等表示設定
const stats = {
    // ログをカラーコード付きで表示する。
    colors: true
};

/**
 * Webpack設定を読み込む.
 *
 * @return Webpack設定
 */
async function importWebpackConfiguration(): Promise<Configuration> {
    return (await import("./webpack.config")).default;
}

/**
 * 開発サーバーを起動する.
 *
 * @return 処理結果
 */
export async function serve(): Promise<void> {
    // 開発サーバー設定
    const options: WebpackDevServer.Configuration = {
        // 起動ホスト・ポート番号設定
        host: "localhost",
        port: 3000,

        // ログ等の表示設定
        stats
    };

    // Webpack設定を読み込む。
    const config = await importWebpackConfiguration();

    // 開発サーバー向けビルド設定に変更する。
    config.mode = "development";

    // 開発サーバー起動
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, options);
    server.listen(options.port || 3000);
}

/**
 * ビルドタスク.
 *
 * @param done 終了関数
 */
export async function build(done: DoneFunction): Promise<void> {
    // Webpack設定を読み込む。
    const config = await importWebpackConfiguration();

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
