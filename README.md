# MORISOBA

Webアプリケーションフレームワーク **MORISOBA**

## 開発環境構築

### 前提条件

* OSはWindows 10 Pro x64 環境を前提とする。
* ブラウザはGoogle Chromeの使用を前提とする。

### Git for Windows インストール

1. 下記サイトからGit for Windowsのインストーラーをダウンロードする。
1. Git for Windowsをインストールする。
1. (SSH鍵等をまだ作成していない場合) Git Bashを使用してSSH鍵を生成する。
    * デスクトップの`Git Bash`アイコンをクリックし、コンソールを起動する。
    * `ssh-keygen -b 4096` コマンドで`id_rsa`および`id_rsa.pub`を生成する。
    * `id_rsa.pub`をGithubなどに登録する。`id_rsa`の方は**絶対に外部に漏らさないよう注意する。**

### Visual Studio Code インストール

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
