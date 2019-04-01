# Git, SourceTree環境構築
---
## 1.Gitのインストール
### 1.1 インストーラのダウンロード
まず以下のサイトに飛んで、**Git for Windows Setup**の**64-bit Git for Windows Setup**.をクリックしてインストーラをダウンロードしてください。

https://git-scm.com/download/win

ダウンロードが完了したらインストーラを起動してください。

### 1.2 ライセンス確認
![](./images/sourcetree_win/1.png)

**Next**を押す。

### 1.3 インストール先フォルダの設定
![](./images/sourcetree_win/2.png)

特にこだわりがなければそのままで**Next**。

### 1.4 コンポーネント選択
![](./images/sourcetree_win/3.png)

**Additional icons**はデスクトップにアイコンが欲しければチェックする。
それ以外はスクリーンショットの通りにチェックして**Next**。

### 1.5 スタートメニューに追加するフォルダ名
![](./images/sourcetree_win/4.png)

特にこだわりがなければそのままで**Next**。

### 1.6 エディタ選択
![](./images/sourcetree_win/5.png)

特にこだわりがなければそのままで**Next**。

### 1.7 環境変数に何を追加するか
![](./images/sourcetree_win/6.png)

コマンドプロンプトからGitコマンドを使用したいので**真ん中をチェック**して**Next**。

### 1.8 SSL通信の証明書の選択
![](./images/sourcetree_win/7.png)

**OpenSSL**を選択して**Next**。

### 1.9 改行の取り扱い
![](./images/sourcetree_win/8.png)

gitに何も変更を加えさせない**一番下**を選択して**Next**。

### 1.10 コンソールの選択
![](./images/sourcetree_win/9.png)

**Windows標準のコマンドプロンプト**を選択して**Next**。

### 1.11 extra options
![](./images/sourcetree_win/10.png)

**すべてにチェック**を入れてインストール開始。

### 1.12 完了！
![](./images/sourcetree_win/11.png)

**Finish**を押してインストール完了。

---
## 2.SourceTreeのインストール(Windows版)
### 2.1 インストーラのダウンロード
以下のサイトに飛んで、**Download for Windows**をクリック。
ライセンスに関するチェックボックスが出てくるのでチェックしてダウンロード開始。
https://www.sourcetreeapp.com/

ダウンロードが完了したらインストーラを起動してください。

### 2.2 Atlassianのアカウント作成
![](./images/sourcetree_win/12.png)

アカウントを持っていない人が大半だと思うので**Create one for free**をクリックして新規アカウントを作成する。

![](./images/sourcetree_win/13.png)

画面の指示に従ってアカウントを作成してください。
 
![](./images/sourcetree_win/14.png)

インストーラにこの画面が出れば成功です。

### 2.3 インストールするツールの選択
![](./images/sourcetree_win/15.png)
**Mercurial**は今回必要ないのでチェックを**外す**。

### 2.4 ユーザー情報
![](./images/sourcetree_win/16.png)

名前とメールアドレスを入力する。

### 2.5 SSHキーの登録
![](./images/sourcetree_win/17.png)

後で設定するのでひとまず**いいえを選択**。

### 2.6 完了！
![](./images/sourcetree_win/18.png)

この画面が出たらSourceTreeのインストールは完了です。

---
## 3. GitHubとSourceTreeの連携(Windows版)
### 3.1 オプションを開く
![](./images/sourcetree_win/19.png)
まず、上の**ツール**から**オプション**を開きます。

### 3.2 アカウントを追加する
![](./images/sourcetree_win/20.png)
**認証タブ**に移動して、**追加**をクリック。

![](./images/sourcetree_win/21.png)
ホスティングサービスは**GitHub**、プロトコルは**HTTPS**、認証は**Basic**を選択する。
次に**GitHubの**ユーザー名、パスワードを入力する。
できたらOKを押す。

![](./images/sourcetree_win/22.png)
認証タブにこのようにアカウントが追加されていたら成功です。

## 4. SSH鍵の登録
### 4.1 Key Generatorを開く
![](./images/sourcetree_win/23.png)
上のバーの**ツール**から**SSHキーの作成/インポート**を押して、PuTTY Key Generatorを開く。

### 4.2 鍵の作成
![](./images/sourcetree_win/24.png)
**Generate**を押して、上の緑色のバーが右に行くまでウィンドウ上で**ランダムにカーソルを動かす**。

### 4.3 秘密鍵の保存
![](./images/sourcetree_win/25.png)
Key passphraseは鍵自体にかけることのできるパスワードですが、今回は登録せずに進みます。
("パスワードをかけなくていいのか？"というウィンドウが出ますが、かけない方を選んでください)

**Save private key**を押して、**C:\Users\ユーザ名\\.sshディレクトリ**に**id_rsa.ppk**というファイル名で保存する。

### 4.4 公開鍵をGitHub上に保存
![](./images/sourcetree_win/26.png)

上の四角に囲まれているssh-rsaから始まる**文字列すべてをコピー**する。

![](./images/sourcetree_win/27.png)
GitHubの**Setting**画面の**SSH and GPG Keys**タブを開く。
**New SSH Key**を押す。

![](./images/sourcetree_win/28.png)

Titleは適当に自分の分かる名前を付けて、Keyの下にコピーした**文字列を張り付け**て、**Add SSH key**を押す。

### 4.5 認証プロトコルの変更
![](./images/sourcetree_win/29.png)
**ツール**から**オプション**を開く。

![](./images/sourcetree_win/30.png)
**認証タブ**の**アカウント**の**編集**を押す。

![](./images/sourcetree_win/31.png)
**優先するプロトコル**を**SSH**に変更する。
変更した後は**パスワードを再読み込み**を押して、**GitHubのパスワード**を打ち込んでください。

### 4.6 Pageantに秘密鍵を登録する
**ツール**から**SSHエージェントを起動**を押す。

![](./images/sourcetree_win/32.png)

スクリーン一番下のタスクバーにある^マークをクリックして、

![](./images/sourcetree_win/33.png)
このアイコンを右クリックして、Add Keyを押す。
**C:\Users\ユーザ名\\.sshディレクトリ**においた**id_rsa.ppk**ファイルを指定する。

これでSSHの設定は完了です！
