# MORISOBA

Webアプリケーションフレームワーク **MORISOBA**

## 開発環境構築

### 前提条件

* OSはWindows 10 Pro x64 環境を前提とする。
* ブラウザはGoogle Chromeの使用を前提とする。

### Visual Studio Codeインストール

1. 下記サイトからWindows向け64bitの User Installerをダウンロードする。
    * https://code.visualstudio.com/download
1. インストーラーでインストールを行う。

### Amzaon Corretto インストール

Amazonが提供しているJDKの[Amzaon Corretto](https://aws.amazon.com/jp/corretto/)をインストールする。

1. 下記サイトからWindows向け64bitの Amzaon Corretto 11 のZIPファイルをダウンロードする。
    * `amazon-corretto-11.x.x.xx.x-windows-x64.zip` となっているものを選択する。
    * https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html
1. ダウンロードしたZIPファイルを展開する。
    * ダウンロードしたZIPファイルに格納されている`jdk11.x.x_xx`の**内容**を、本ワークスペースの`jdk/amazon-corretto-11`ディレクトリ内にコピーする。
