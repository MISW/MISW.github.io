$ # 以下のコマンドはカレントディレクトリ下にファイルを生成するため、
$ # 新しくフォルダを作ってその中へcdで移動してから行うべき。
$ npm init -y
$
$ # TypeScriptに必要な外部ライブラリのインストールと初期化
$ npm install -g ts-node typescript  # 既にts-nodeをインストールしたならこの行は不要
$ npm install -D typescript tslint  # ツールをインストールする際には-Dを付けるとよい
$ tsc --init  # もしtscコマンドが存在しないと言われたら、PATHを通すこと。Windowsなら%APPDATA%\npmに通す。
$ npx tslint --init  # -gを付けずにインストールしたライブラリをコマンドとして実行するときは、npxを付ける。
$
$ # サーバ用の外部ライブラリとその型定義ファイルのインストール
$ npm install express
$ npm install -D @types/express
