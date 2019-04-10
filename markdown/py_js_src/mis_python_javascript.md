Python, JavaScriptの始め方
===
- [Python, JavaScriptの始め方](#python-javascript%E3%81%AE%E5%A7%8B%E3%82%81%E6%96%B9)
- [はじめに](#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB)
  - [Pythonとは](#python%E3%81%A8%E3%81%AF)
  - [Pythonのインストール方法](#python%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%96%B9%E6%B3%95)
  - [JavaScriptとは](#javascript%E3%81%A8%E3%81%AF)
  - [JavaScript (Node.js) のインストール方法](#javascript-nodejs-%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%96%B9%E6%B3%95)
- [ファイルから実行してみる](#%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B)
  - [Pythonをファイルから実行してみよう](#python%E3%82%92%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86)
  - [JavaScript (Node.js) をファイルから実行してみよう](#javascript-nodejs-%E3%82%92%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86)
  - [JavaScript (ブラウザ) をファイルから実行してみよう](#javascript-%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6-%E3%82%92%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%8B%E3%82%89%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%BF%E3%82%88%E3%81%86)
- [REPLを実行してみる](#repl%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B)
  - [REPLとは](#repl%E3%81%A8%E3%81%AF)
  - [PythonのREPLを実行しよう](#python%E3%81%AErepl%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%97%E3%82%88%E3%81%86)
  - [JavaScript (Node.js) のREPLを実行しよう](#javascript-nodejs-%E3%81%AErepl%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%97%E3%82%88%E3%81%86)
  - [JavaScript (ブラウザ) のREPLを実行しよう](#javascript-%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6-%E3%81%AErepl%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%97%E3%82%88%E3%81%86)
- [テキストエディタ](#%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%A8%E3%83%87%E3%82%A3%E3%82%BF)
- [Python, JavaScriptの学習方法](#python-javascript%E3%81%AE%E5%AD%A6%E7%BF%92%E6%96%B9%E6%B3%95)
  - [バージョンについて](#%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
  - [Pythonを学習しよう](#python%E3%82%92%E5%AD%A6%E7%BF%92%E3%81%97%E3%82%88%E3%81%86)
  - [JavaScript (ブラウザ) を学習しよう](#javascript-%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6-%E3%82%92%E5%AD%A6%E7%BF%92%E3%81%97%E3%82%88%E3%81%86)
  - [JavaScript (Node.js) を学習しよう](#javascript-nodejs-%E3%82%92%E5%AD%A6%E7%BF%92%E3%81%97%E3%82%88%E3%81%86)
  - [ネット検索について](#%E3%83%8D%E3%83%83%E3%83%88%E6%A4%9C%E7%B4%A2%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
  - [JavaScriptの古い書き方について](#javascript%E3%81%AE%E5%8F%A4%E3%81%84%E6%9B%B8%E3%81%8D%E6%96%B9%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
- [型付けしよう](#%E5%9E%8B%E4%BB%98%E3%81%91%E3%81%97%E3%82%88%E3%81%86)
  - [Pythonの型アノテーションを使う](#python%E3%81%AE%E5%9E%8B%E3%82%A2%E3%83%8E%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E4%BD%BF%E3%81%86)
  - [TypeScriptを使う](#typescript%E3%82%92%E4%BD%BF%E3%81%86)
- [クロスブラウザについて](#%E3%82%AF%E3%83%AD%E3%82%B9%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
- [サンプルプログラム1: 簡単なサーバ](#%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A01-%E7%B0%A1%E5%8D%98%E3%81%AA%E3%82%B5%E3%83%BC%E3%83%90)
  - [この節について](#%E3%81%93%E3%81%AE%E7%AF%80%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
  - [パッケージマネージャとは](#%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3%E3%81%A8%E3%81%AF)
  - [Python](#python)
  - [JavaScript/TypeScript](#javascripttypescript)
  - [何をしたのか](#%E4%BD%95%E3%82%92%E3%81%97%E3%81%9F%E3%81%AE%E3%81%8B)
  - [pypi.orgとnpmjs.comを見よう](#pypiorg%E3%81%A8npmjscom%E3%82%92%E8%A6%8B%E3%82%88%E3%81%86)
  - [@typesとは何か](#types%E3%81%A8%E3%81%AF%E4%BD%95%E3%81%8B)
- [サンプルプログラム2: Parcel & p5.js](#%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A02-parcel--p5js)
  - [この節について](#%E3%81%93%E3%81%AE%E7%AF%80%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-1)
  - [ライブラリのインストール](#%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
  - [Parcelを試す](#parcel%E3%82%92%E8%A9%A6%E3%81%99)
  - [p5.jsを試す](#p5js%E3%82%92%E8%A9%A6%E3%81%99)
  - [型定義ファイルの不足を補おう](#%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E4%B8%8D%E8%B6%B3%E3%82%92%E8%A3%9C%E3%81%8A%E3%81%86)
  - [シューティングゲーム](#%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%B2%E3%83%BC%E3%83%A0)
- [結論](#%E7%B5%90%E8%AB%96)

※ 以下の情報は、2019年3月時点のものです。

# はじめに
## Pythonとは
![](./images/python_javascript/python-logo-generic.svg)

- Wikipedia: https://ja.wikipedia.org/wiki/Python
- Pythonは動的型付けなプログラミング言語。
- 実装にはCPython（https://www.python.org/）、PyPy（http://pypy.org/）などがある。CPythonが最も良く使われる。PyPyはCPythonよりも実行速度が速いが、起動は遅い。

## Pythonのインストール方法
![](./images/python_javascript/python_org.jpg)

- https://www.python.org/ のDownloadsでダウンロードして実行する。Python3を使用してください。
- ネット上では、PythonのインストールにAnacondaを使うことを推奨している記事がありますが、Anacondaは初心者が使うと多くの問題を引き起こすため、使わない方がよいです。（参考1: [Pythonの環境管理ツール良し悪し - Zopfcode](http://www.zopfco.de/entry/2017/04/03/233811), 参考2: [condaとpip：混ぜるな危険 - onoz000’s blog](http://onoz000.hatenablog.com/entry/2018/02/11/142347))

## JavaScriptとは
- Wikipedia: https://ja.wikipedia.org/wiki/JavaScript
- ブラウザやNode.jsで動かすことができる。
- 実装はV8やSpiderMonkeyなどいろいろある。

## JavaScript (Node.js) のインストール方法
![](./images/python_javascript/Node.js_logo.svg)

- https://nodejs.org/ja/ でダウンロードして実行する。
  [LTS](https://en.wikipedia.org/wiki/Long-term_support)はLong-term supportの略で、安定版のこと。LTSでも最新版でもどちらでもよい。
- Node.jsはV8を使用したJavaScript環境。
  Wikipedia: https://ja.wikipedia.org/wiki/Node.js

# ファイルから実行してみる
## Pythonをファイルから実行してみよう
1. 好きな場所に`main.py`というファイルを作って、以下の内容を書き込む
    ```python
    # "Hello, world!" と表示させる
    print("Hello, world!")

    # 関数 f(x) = 2x + 10 を定義
    def f(x):
        return 2 * x + 10

    # f(5)を計算して結果を表示
    print(f(5))
    ```
2. コマンドプロンプト（ターミナル）を開いて、`py 今作ったファイルのパス`と打つ
   （例: `py C:\Users\foo\main.py`）
   ※ MacOSやLinuxの場合は、`py`の部分を`python3`で読み替えてください。
   以下のように表示されたら成功。
   ```python
    Hello, world!
    20
   ```

## JavaScript (Node.js) をファイルから実行してみよう
1. 好きな場所に`main.js`というファイルを作って、以下の内容を打ち込む
    ```javascript
    // "Hello, world!" と表示させる
    console.log("Hello, world!")

    // 関数 f(x) = 2x + 10 を定義
    const f = (x) => {
        return 2 * x + 10;
    };

    // f(5)を計算して表示
    console.log(f(5))
    ```
2. コマンドプロンプト（ターミナル）を開いて、`node 今作ったファイルのパス`と打つ
    （例: `node C:\Users\foo\main.js`）
    以下のように表示されたら成功。
    ```
    Hello, world!
    20
    ```

## JavaScript (ブラウザ) をファイルから実行してみよう
1. JavaScriptファイルをブラウザ上で実行するにはHTMLファイルが必要。
    好きな場所に`index.html`というファイルを作って、以下の内容を打ち込む
    ```html
    <!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
        <script src="./main.js"></script>
    </body>
    </html>
    ```
2. `index.html`と同じフォルダ内に`main.js`というファイルを作って、以下の内容を打ち込む
    ```javascript
    // "Hello, world!" と表示させる
    console.log("Hello, world!")

    // 関数 f(x) = 2x + 10 を定義
    const f = (x) => {
        return 2 * x + 10;
    };

    // f(5)を計算して表示
    console.log(f(5))
    ```
3. ブラウザ（Internet Explorerだとうまく実行できない可能性があるため、Microsoft EdgeやGoogle ChromeやMozilla Firefoxなどの他のブラウザを使用してください。）を開き、`index.html` ファイルをブラウザへドラッグしてください。
4. F12キーを押して、出てきたパネル上でConsole (コンソール) タブを開いて、以下のように表示されていたら成功。
    ```
    Hello, world!
    20
    ```

# REPLを実行してみる
## REPLとは
- 多くの言語には[REPL (Read-Eval-Print Loop) ](https://ja.wikipedia.org/wiki/REPL)が存在する。
    - C#ならcsi、Javaならjshell、Goならgore、Rubyならirb、...
- REPLを使うと、ファイルを用意せずに短いコードを簡単に実行できる。
- REPL上では、入力した式の計算結果を`print`や`console.log`を使わなくても表示してくれる。

## PythonのREPLを実行しよう
1. コマンドプロンプト（ターミナル）を開いて、`py`と打つ
   
   ※ MacOSやLinuxの場合は、`python3`と打ってください。
2. 以下のように打つ。
   ```python
   >>> "Hello, world!"
   'Hello, world!'
   >>> def f(x):
   ...     return 2 * x + 10
   ...
   >>> f(5)
   20
   ```
3. いろいろ入力してみてください。（`f(10)`や`2 + 4`など）

## JavaScript (Node.js) のREPLを実行しよう
1. コマンドプロンプト（ターミナル）を開いて、`node`と打つ
2. 以下のように打つ。
   ```javascript
   > "Hello, world!"
   'Hello, world!'
   > const f = (x) => {
   ...     return 2 * x + 10;
   ... };
   undefined
   > f(5)
   20
   ```
3. いろいろ入力してみてください。（`f(10)`や`2 + 4`など）

## JavaScript (ブラウザ) のREPLを実行しよう
1. ブラウザ（Microsoft EdgeやMozilla FirefoxやGoogle ChromeやInternet Explorerなど）を開き、F12キーを押す
   
   ※ 空のタブを使ってください。
2. Console (コンソール) タブを開き、以下のように打つ。
   ```javascript
   > "Hello, world!"
   "Hello, world!"
   > const f = (x) => {
         return 2 * x + 10;
     };
   undefined
   > f(5)
   20
   ```
3. いろいろ入力してみてください。（`f(10)`や`2 + 4`など）

# テキストエディタ
![](./images/python_javascript/Visual_Studio_Code_1.18_icon.svg)

- テキストエディタにはMicrosoftが開発している、[VSCode](https://nodejs.org/ja/docs/)を使うのがおすすめです。
- 起動が速くて高機能です。
- 特に、VSCodeはTypeScript（後述）で開発されているのもあって、TypeScriptを使うならVSCodeを使うべきです。
- 拡張機能の[Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python), [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)を入れて使うべきです。他にも、[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome), [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)なども入れるといいと思います。（細かい使い方はネットで調べてください。）

# Python, JavaScriptの学習方法
## バージョンについて
PythonもJavaScriptも活発に開発されていて、アップデートが速いです。

そのため、ネット上のサイトや本を見るときはどのバージョンを対象にした記事なのかに注意しないと、コードが動かなかったり、古くて今は使われていない手法だったりします。

参考:
- Pythonのバージョン

    | バージョン    | リリース年 |
    | ------------- | ---------- |
    | 1             | 1994       |
    | 2 (2.0 ~ 2.7) | 2000       |
    | 3 (3.0 ~)     | 2008       |
※ Python 2は2020年にサポート終了になる。
   現時点での最新は3.7で、2018年にリリース。

- JavaScriptのバージョン

    | バージョン   | リリース年 | 主な新機能 |
    | ------------ | ---------- | ---------- |
    | ES3          | 1999       |  |
    | ES4          | リリース無し |  |
    | ES5          | 2009       | strict mode, Arrayのメソッド追加 |
    | ES2015 (ES6) | 2015       | let, const, class, Arrayのメソッド追加, アロー関数, テンプレート文字列, for~of, Promise, ... |
    | ES2016       | 2016       | 累乗演算子, Arrayのincludesメソッド |
    | ES2017       | 2017       | async/await |

## Pythonを学習しよう
- CPythonの公式サイトがチュートリアルを用意してくれています。必ず読みましょう。
  https://docs.python.org/ja/3/tutorial/index.html

  理解できない部分がある場合、人に聞くか、本を買ってみるのもよいかもしれません。

## JavaScript (ブラウザ) を学習しよう
- ブラウザの1つであるMozilla Firefoxを開発しているMozillaが、[MDN](https://developer.mozilla.org/ja/) (Mozilla Developer Network) でJavaScriptのドキュメントを公開しています。
    MDNのWebチュートリアル:  https://developer.mozilla.org/ja/docs/Web/Tutorials

    ただ、このチュートリアルは少し読みずらいので、他のサイトを見るか本を買った方が良いかもしれません。
    - おすすめのサイト: [uhyohyo.net/JavaScript初級者から中級者になろう](https://uhyohyo.net/javascript/) （名前に反して、JavaScriptを全く知らない方にも良いサイトです。）
- ブラウザ上で複数のJavaScriptファイルを組み合わせて使う場合、WebPackやParcelが必要になります（使わなくてもできるが、大変）。
- JavaScriptはInternet Explorerではまともに開発できません（動作が重いことや、JavaScriptのバージョンが古いことなどが原因）。他のブラウザを使いましょう。

## JavaScript (Node.js) を学習しよう
- Node.jsは基本的にコンソール上で動作するため、ブラウザ上でJavaScriptを実行するときに使える`document`や`alert`などの画面の表示に関する変数・関数が存在しません。
- その代わり、Node.js専用の機能があり、
  [Node.jsのドキュメント](https://nodejs.org/ja/docs/)で確認できます。
- Node.jsにはパッケージマネージャであるnpm (Node Package Manager)が付属しています。（Pythonのpipに相当）

## ネット検索について
- ネットでプログラミングに関することを調べるとき、残念ながら、日本語では1つもまともな記事がヒットしないということがよくあります。
- Googleの検索欄に英語を打っても、デフォルトでは日本のページが優先されて表示されてしまいます。
  英語版のGoogleを使うにはこのURLを使ってください。
  
  https://www.google.com/?gl=us&hl=en&gws_rd=cr&pws=0
- あるいは、[DuckDuckGo](https://duckduckgo.com/)を使うという方法もあります。
  検索結果のページの左上に"日本"というトグルボタンがあるので、これをOFFにすることで英語で検索できます。

## JavaScriptの古い書き方について
- JavaScriptは後方互換性を保ちながらアップデートされているため、今はまず使われない古い書き方が多く存在します。
    それらの一部をここで示しておきます。
    - 関数
        ```javascript
        // 古い書き方
        //     ※ 変数名の巻き上げやthisの参照を目的として、あるいは趣味で、あえてこちらを使うこともある。
        function foo() {
            // 関数の本体
        }

        // 新しい書き方
        const foo = () => {
            // 関数の本体
        };
        ```
    - 変数
        ```javascript
        // 古い書き方
        var x;

        // 新しい書き方
        //     再代入するならlet、再代入しないならconstを使う。
        let x;
        const x;
        ```
    - クラス
        ```javascript
        // 古い書き方
        //     functionでコンストラクタを定義し、prototypeでメソッドを定義する。
        function Foo() {
            this.x = 30;
        }

        Foo.prototype.bar = function() {
            console.log(this.x);
        };

        new Foo().bar();  // 30

        // 新しい書き方
        //     class文を使う。class文は古い書き方の糖衣構文。
        class Foo {
            constructor() {
                this.x = 30;
            }
            
            bar() {
                console.log(this.x);
            }
        }

        new Foo().bar();
        ```
    - ブロックスコープ
        ```javascript
        // 古い書き方
        //     (function(){})() や !function(){}() など。
        (function() {
            // スコープ
        })();

        // 新しい書き方
        {
            // スコープ
        }
        ```
# 型付けしよう
- PythonやJavaScriptは動的型付け言語であり、変数に型がありません。
- これは不便なことが多いので、型付けする方法があります。積極的に使っていくべきです。

## Pythonの型アノテーションを使う
- Pythonでは型アノテーションを使って型付けできます。
- 使い方はCPythonの公式ドキュメントを参照: https://docs.python.org/ja/3/library/typing.html

## TypeScriptを使う
- JavaScriptではTypeScriptを使って型付けできます。TypeScriptは、JavaScriptに型付け用の文法を足した言語で、JavaScriptに変換されてから実行されます。
- [公式サイトのチュートリアル](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)を見た後、[TypeScriptの型初級](https://qiita.com/uhyo/items/da21e2b3c10c8a03952f)らへんを見るとよいと思います。（TypeScriptはJavaScriptさえ分かっていれば学習コストが低いことが特徴なので、とりあえずは軽く使ってみて、興味が出たらTypeScriptの型初級を読むといいです。）
- [TypeScriptの公式サイトのPlayground](http://www.typescriptlang.org/play/)ではブラウザ上で簡単にTypeScriptを試せます。
- Node.jsでTypeScriptを使う場合、`ts-node`が便利です。
  コマンドプロンプト（ターミナル）上で`npm install -g ts-node typescript`と打つとts-nodeがインストールされます（ts-nodeの使用にはtypescriptのインストールも必要）。あとは、`ts-node ファイル名`と打てば、TypeScriptのファイルを実行できるはずです。

  （内部的には、TypeScriptのファイルがJavaScriptに変換されてからNode.jsで実行されます。）

  ※`ts-node`コマンドが存在しないと表示された場合は、[PATHを通す](https://qiita.com/yuki12/items/9723f60907508b11504b)必要があります。Windowsなら`%APPDATA%\npm`を追加すればよいです。
- TypeScriptファイルをJavaScriptに変換するには、以下のコマンドをコマンドプロンプト（ターミナル）上で打てばよいです。
  ```bash
  # 以下のコマンドを変換したいファイルのあるディレクトリ上で実行する
  npm init -y  # npmの初期化。package.jsonが生成される。
  npm install -D typescript  # TypeScriptのインストール
  npx tsc --init  # TypeScriptの初期化。tsconfig.jsonが生成される。
  ```
  `main.ts`のようなファイルを作り、コードを書き、コマンドプロンプト（ターミナル）上で`npx tsc`と打てば、TypeScriptからJavaScriptへ変換されます。
- TypeScriptでは、変換先のJavaScriptのバージョンが低いときJavaScriptのいくつかの最新の機能（Arrayの関数やMapなど）を使えません。`tsconfig.json`の`"target"`を`"ES2017"`とかにすれば使えるようになります。

# クロスブラウザについて
各ブラウザのJavaScriptのバージョン（実装状況）は[caniuse.com](https://caniuse.com/)で確認できます。

![](./images/python_javascript/can_i_use_es6.jpg)

例えばES2015 (ES6)を使えるかは、https://caniuse.com/#search=ES6 で確認できます。これを見ると、IE (Internet Explorer)ではES6をほとんど使えないことがわかります。現在は[Babel](https://babeljs.io/)などを使ってES2015以降のコードをES5以前のコードに変換して対応するのが主流ですが、IEは2020年の1月にサポートが切れるので、それ以降はIEを切り捨てる方向になると思われます。（TypeScriptはデフォルトではES5のコードに変換されます。）

# サンプルプログラム1: 簡単なサーバ
## この節について
- ためしに簡単なプログラムを書いて、各言語の雰囲気を感じてもらうために書きました。
- パッケージマネージャの使い方を示すために、意味もなく外部ライブラリを持ち出しています。
- Python/Node.jsのコードは、実行環境やライブラリのアップデートで動かなくなることがあります。最新バージョンの環境で動かないことを確認した方は、管理者にご報告ください。
    - 今回は入門のため使いませんが、実際にはpackage-lock.json (各ライブラリのどのバージョンを使うか書かれたファイル) や nvm (Node Version Manager) などで対処できます。

## パッケージマネージャとは
- Pythonにはpip、Node.jsにはnpmというパッケージマネージャが付属している。
- パッケージマネージャは外部ライブラリのダウンロードに使うツールで、pipなら[pypi.org](https://pypi.org)、npmなら[npmjs.com](https://www.npmjs.com/)からダウンロードしてくる。
- pipではダウンロードしたファイルはPC全体から呼び出せるが、npmでは`-g`オプションを付けないとき特定のフォルダ内からのみ呼び出せる。
- 各ライブラリにはたいてい多くの依存ライブラリが存在して、1つのライブラリを`install`すると同時にそのライブラリが依存している多くのライブラリが自動でダウンロードされる。
- ライブラリを使うときは、必ずライセンスを確認すること。（MITとかBSDとかGPLとか）

## Python
1. まずpipを使って必要なライブラリをインストールする。
    - VSCodeを使う場合、
        
        1 空のフォルダを好きな場所に作る
        
        2 もしVSCodeで既に別のフォルダを開いていたら`Ctrl+K -> O`で閉じる
        
        3 `Ctrl+K -> Ctrl+F`からフォルダを開く（あるいはコマンドプロンプト上で`code フォルダへのパス`）
        
        4 `Ctrl+Shift+@`でコマンドプロンプト（ターミナル）を開いてコマンドを打つ
            - PowerShell/コマンドプロンプト/Bashの切り替えは`Ctrl+Shift+P` -> `select default shell`からできます。
    - `pip`コマンドが存在しないと表示された場合は、`py -m pip`（MacOSやLinuxでは`python3 -m pip`）を使ってください。
    - Windowsで「アクセスが拒否されました」と表示される場合、コマンドプロンプトを[管理者権限で開いて](https://qiita.com/takuya0301/items/df6cde3bbaf9e13ef8f0)もう一度実行してください。
    - `pip`コマンドでダウンロードしたファイルは、バージョンやOSによって異なるが、Windowsでバージョン3.7なら`C:\Program Files\Python37`下らへんに置かれます。
    - インストールしたパッケージの一覧は`pip list`で見れます。
    ```bash
    pip install -U Flask
    ```
2. 次に、ファイル`main.py`（名前は何でもよい）を作って、以下のように書く。
    - 一行目で今インストールしたFlaskを呼び出しています。
    - `/`にアクセスしたら"Index Page"と訪問者数、`/foo`にアクセスしたら"Foo Page"を表示するプログラムです。
    ```python
    from flask import Flask
    app = Flask(__name__)

    count = 0
    @app.route('/')
    def index_page():
        global count
        count += 1
        return f"Index Page<br>あなたは{count}番目の訪問者です。"

    @app.route('/foo')
    def foo_page():
        return "Foo Page"

    app.run('0.0.0.0', 3000, False)

    ```

3. `py main.py`（あるいは`python3 main.py`）で実行した状態で、http://localhost:3000/ を開くと"Index Page"と訪問者数、http://localhost:3000/foo を開くと"Foo Page"と表示される。

## JavaScript/TypeScript
1. まずnpmを使って必要なライブラリをインストールする。
    - VSCodeを使う場合、
        
        1 空のフォルダを好きな場所に作る
        
        2 もしVSCodeで既に別のフォルダを開いていたら`Ctrl+K -> O`で閉じる
        
        3 `Ctrl+K -> Ctrl+F`からフォルダを開く（あるいはコマンドプロンプト上で`code フォルダへのパス`）
        
        4 `Ctrl+Shift+@`でコマンドプロンプト（ターミナル）を開いてコマンドを打つ
            - PowerShell/コマンドプロンプト/Bashの切り替えは`Ctrl+Shift+P` -> `select default shell`からできます。
    - npmを使うには、最初に`npm init -y`での初期化が必要です。これによって、カレントディレクトリ下に`package.json`ファイルが生成されます。
    - `npm install`を使うと、ライブラリをダウンロードできます。ライブラリは`-g`を付けなかった場合カレントディレクトリ下の`node_modules`フォルダ内に置かれます。中を見ると多くのファイルが存在することを確認できると思います。
    - TypeScriptで外部ライブラリを使うときには、同時に型定義ファイル（.d.tsで終わる名前を持つファイル）が必要になる。`@types/ライブラリ名`として型定義ファイルが配布されている場合が多い。
    ```bash
    # 以下のコマンドはカレントディレクトリ下にファイルを生成するため、
    # 新しくフォルダを作ってその中へcdで移動してから行うべき。
    npm init -y

    # TypeScriptに必要な外部ライブラリのインストールと初期化
    npm install -g ts-node typescript  # 既にts-nodeをインストールしたならこの行は不要
    npm install -D typescript tslint  # ツールをインストールする際には-Dを付けるとよい
    tsc --init  # もしtscコマンドが存在しないと言われたら、PATHを通すこと。Windowsなら%APPDATA%\npmに通す。
    npx tslint --init  # -gを付けずにインストールしたライブラリをコマンドとして実行するときは、npxを付ける。

    # サーバ用の外部ライブラリとその型定義ファイルのインストール
    npm install express
    npm install -D @types/express
    ```

2. 次にファイル`main.ts`（名前は何でもよい）を作って、以下のように書く。ただし、1.でコマンドを打ったディレクトリにファイルを置くこと。
    - 一行目で先ほどインストールしたexpressをインポートしている。
      TypeScriptでは、JavaScriptの`const X = require("Y")`を`import X = require("Y")`と書く必要がある。
    ```typescript
    import express = require("express");
    const app = express();

    let count = 0;
    app.get("/", (req, res) => {
        count++;
        res.send(`Index Page<br>あなたは${count}番目の訪問者です。`);
    });

    app.get("/foo", (req, res) => res.send("Foo Page"));

    const port = 3000;
    app.listen(port, () => console.log("Listening on port " + port));
    ```
3. `ts-node main.ts`で実行した状態で、http://localhost:3000/ を開くと"Index Page"と訪問者数、http://localhost:3000/foo を開くと"Foo Page"と表示される。

4. このままだと、`console.log`の部分に`Calls to 'console.log' are not allowed.tslint(no-console)`という警告がでます。
   無視してもいいですが、フォルダ内のtslint.jsonの"rules"に以下のように一行足せば消えます。
   ```json
    "rules": {
        "no-console": false
    },
   ```

## 何をしたのか
- 自分のPCが接続されているLAN内からのみアクセスできるサーバを作りました。
- 自分のプライベートIPアドレスがわかれば、他のPCからもアクセスできます。
- コマンドプロンプトでipconfig（MacOSやLinuxならifconfig）と打ち、`192.168.`や`10.`や`172.`で始まるアドレスを探してください（複数ありますが、"IPv4アドレス"や"inet"となっているものです）。これがプライベートアドレスなので、たとえば`192.168.2.104`だったら、http://192.168.2.104:3000 で同一LAN内の他のPCからもアクセスできます。スマホ等で試してみてください。

## pypi.orgとnpmjs.comを見よう
- 先ほど使用した外部ライブラリをpypi.orgとnpmjs.comで見てみよう。英語しかないが、簡単な使い方や、各ライブラリのドキュメントやホームページへのリンクなどを確認できる。
  - Flask:  https://pypi.org/project/Flask/
  - express:  https://www.npmjs.com/package/express
  - typescript:  https://www.npmjs.com/package/typescript
  - ts-node:  https://www.npmjs.com/package/ts-node
  - @types/express:  https://www.npmjs.com/package/@types/express
- npmなら、weekly downloads で人気度を確認できる。pypiはダウンロード数を公開していないので、ライブラリのGitHubページのスター数を見るとよい。

## @typesとは何か
- npmにおいて、"@A/B"という名前のパッケージ名は、"ユーザーAが公開しているパッケージB"という意味。[@types](https://www.npmjs.com/~types)は[Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped)という団体が管理している。

# サンプルプログラム2: Parcel & p5.js
## この節について
- この節はTypeScriptの詳細な使い方を示すために書きました。
- 完全な初心者用ではないです。コードはすべてCC0です。

## ライブラリのインストール
- 今回は、[p5.js](https://p5js.org/)を使います。（最初は[PixiJSv4](https://www.npmjs.com/package/pixi.js)を使おうと思ったが、型定義ファイルが不完全だったり難易度が高かったりするのでやめた。ただ、機能はPixiJSの方が上なはず。）
- ブラウザ上で複数ファイルのJavaScriptファイルを動かすために、Parcelを使います。（WebPackでもよいが、こちらの方が簡単。）
```bash
npm init -y

# Parcel, TypeScript
npm install -g parcel-bundler  # 既にparcel-bundlerをインストールしたならこの行は不要
npm install -D typescript tslint
npx tslint --init
npx tsc --init

# p5.js
npm install p5
npm install -D @types/p5
```

## Parcelを試す
- まず、上記のコマンドを打ったのと同じディレクトリで、`index.html`を作る。
  ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Sample Game</title>
    </head>     
    <body>
        <script src="./main.ts"></script>
    </body>
    </html>
  ```
- `main.ts`も作る。
  ```typescript
  document.body.innerText = `3 + 2 = ${3 + 2}`;
  ```
- あとは、コマンドプロンプト（ターミナル）で`parcel index.html`と打てば、ビルドされて同時にサーバーが起動する。
  http://localhost:1234  にブラウザでアクセスして、`3 + 2 = 5`と表示されていることを確認しよう。（`parcel index.html --open`とすれば、自動で開く。）
- コードを編集して保存すると、ブラウザがリロードされて表示が変わる。
- `Ctrl + C`でサーバーを終了させる。

## p5.jsを試す
- main.tsに以下のように書く
    - p5.jsをglobal mode（デフォルト）で使う場合@types/p5/global.d.tsを使うようにと書いてあったため、p5/globalをインポートしています。
    ```typescript
    import "p5";
    import {} from "./node_modules/@types/p5/global.d";

    function setup() {
        createCanvas(640, 480);
    }

    function draw() {
        ellipse(50, 50, 80, 80);
    }

    // p5はグローバルに定義されたsetupやdraw関数を参照するため、
    // 手作業でグローバルオブジェクト（window）に各関数を追加する。
    (window as any).setup = setup;
    (window as any).draw = draw;

    ```
- `parcel index.html`で実行して http://localhost:1234/ を見れば、楕円が表示されているはず。

## 型定義ファイルの不足を補おう
- [p5.jsのリファレンス](https://p5js.org/reference/)のKeyboardの欄を見ると、キー入力の判定には[keyIsDown](https://p5js.org/reference/#/p5/keyIsDown)を使うことがわかる。
- [レファレンス](https://p5js.org/reference/#/p5/keyIsDown)ではこのように使っている。
    ```typescript
    if (keyIsDown(RIGHT_ARROW)) {
        // 右矢印キーを押しているときの処理
    }
    ```
- main.ts
    円がキー入力で動くようにする。
    ```typescript
    import "p5";
    import {} from "./node_modules/@types/p5/global.d";

    function setup() {
        createCanvas(640, 480);
    }

    let x = 50;
    function draw() {
        clear();
        if (keyIsDown(RIGHT_ARROW)) {
            x += 4;
        }
        ellipse(x, 50, 80, 80);
    }

    (window as any).setup = setup;
    (window as any).draw = draw;
    ```
- すると、`RIGHT_ARROW`に、`Cannot find name 'RIGHT_ARROW'.`というエラーがでる（既に修正されていたら、出ない可能性もある）。

    `p5`とその型定義である`@types/p5`は別々に作られているため、実際には`RIGHT_ARROW`という変数は存在するにも関わらず、型定義に`RIGHT_ARROW`が存在しなくてエラーになっている。これはTypeScriptではよくあること。

    解決方法はいくつかある。
    ```typescript
    // a. 呼び出し元オブジェクトをany型にキャストする
    //        RIGHT_ARROW は window.RIGHT_ARROW の略なので、
    //        windowをany（型チェックを無視することを表す型）にキャストすることで、強制的にエラーをなくせる。
    if (keyIsDown((window as any).RIGHT_ARROW) {
        // ...
    }

    // b. declare文で型を定義する
    //        型定義ファイルはdeclareを使って型を定義している。
    //        自分でdeclareで型定義を付け足す。
    declare const RIGHT_ARROW: number;  // main.tsの好きな場所に書く
    ```

## シューティングゲーム
![](./images/python_javascript/shooting.jpg)

- シューティングゲームを書きました。参考にしてください。
- 趣味でreadonlyを全プロパティにつけていますが、気にしないでください。
- main.ts
    ```typescript
    import "p5";
    import { Graphics } from "p5";
    import {} from "./node_modules/@types/p5/global.d";
    import { RigidBody } from "./rigid_body";
    import { Vec2D, Vec3D } from "./vec";

    const SCREEN_SIZE: { readonly w: number, readonly h: number} = { w: 550, h: 900 };
    const PLAYER_SPEED = 8;

    interface Light {
        color: Vec3D;
        pos: Vec2D;
    }

    interface Shot {
        readonly lights: ReadonlyArray<Light>;
        readonly rigidBody: RigidBody;
        readonly vibration: number;
    }

    const Shot = {
        new: (pos: Vec2D, velocity: Vec2D, colors: ReadonlyArray<Vec3D>, vibration: number): Shot => {
            return {
                lights: colors.map((color) => ({ color, pos: Vec2D.new(0, 0) })),
                rigidBody: RigidBody.new(pos, velocity),
                vibration,
            };
        },
        update: (shot: Shot): Shot => {
            return {
                lights: shot.lights.map((light) => {
                    const posMoveFor = Vec2D.new(
                        Math.random() * shot.vibration,
                        Math.random() * shot.vibration);
                    const pos = Vec2D.add(
                        Vec2D.times(light.pos, 0.9),
                        Vec2D.times(posMoveFor, 0.1));
                    return {
                        color: light.color,
                        pos,
                    };
                }),
                rigidBody: RigidBody.update(shot.rigidBody),
                vibration: shot.vibration,
            };
        },
    };

    interface GameState {
        readonly playerPos: Vec2D;
        readonly enemyPos: Vec2D;
        readonly playerHp: number;
        readonly enemyHp: number;
        readonly playerShots: ReadonlyArray<Shot>;
        readonly enemyShots: ReadonlyArray<Shot>;
        readonly frameCount: number;
        readonly scene: "Playing" | "GameClear" | "GameOver";
    }

    const movePlayer = (playerPos: Vec2D): Vec2D => {
        if (keyIsDown(RIGHT_ARROW)) {
            playerPos = Vec2D.add(playerPos, Vec2D.new(PLAYER_SPEED, 0));
        }
        if (keyIsDown(LEFT_ARROW)) {
            playerPos = Vec2D.add(playerPos, Vec2D.new(-PLAYER_SPEED, 0));
        }
        if (keyIsDown(DOWN_ARROW)) {
            playerPos = Vec2D.add(playerPos, Vec2D.new(0, PLAYER_SPEED));
        }
        if (keyIsDown(UP_ARROW)) {
            playerPos = Vec2D.add(playerPos, Vec2D.new(0, -PLAYER_SPEED));
        }
        return Vec2D.new(
            Math.min(SCREEN_SIZE.w, Math.max(0, playerPos.x)),
            Math.min(SCREEN_SIZE.h, Math.max(0, playerPos.y)));
    };

    const moveEnemy = (enemyPos: Vec2D, frameCount: number): Vec2D => {
        return Vec2D.new(
            300 + Math.cos(frameCount / 30) * 100,
            100 + Math.sin(frameCount / 30) * 20);
    };

    const appendNewPlayerShots = (
            playerShots: ReadonlyArray<Shot>,
            playerPos: Vec2D, frameCount: number): ReadonlyArray<Shot> => {
        const shotsGenerated = new Array<Shot>();
        if (frameCount % 9 === 0) {
            shotsGenerated.push(Shot.new(
                Vec2D.add(playerPos, Vec2D.new(-30, -30)),
                Vec2D.new(0, -20),
                [Vec3D.new(255, 255, 100)], 0));
            shotsGenerated.push(Shot.new(
                Vec2D.add(playerPos, Vec2D.new(30, -30)),
                Vec2D.new(0, -20),
                [Vec3D.new(255, 255, 100)], 0));
        }

        return [...playerShots, ...shotsGenerated];
    };

    const createEnemyShot = (pos: Vec2D, theta: number, speed: number, color: Vec3D, vibration: number): Shot => {
        const unitVector = Vec2D.new(Math.cos(theta), Math.sin(theta));
        const colors = [color];
        colors.push(
            Vec3D.new(0, 0, 255), Vec3D.new(255, 0, 0), Vec3D.new(0, 255, 0));
        return Shot.new(
            Vec2D.add(pos, Vec2D.times(unitVector, 30)),
            Vec2D.times(unitVector, speed),
            colors, vibration);
    };

    const appendNewEnemyShots = (
            enemyShots: ReadonlyArray<Shot>,
            enemyPos: Vec2D, frameCount: number): ReadonlyArray<Shot> => {
        const shotsGenerated = new Array<Shot>();

        switch (Math.floor(frameCount / 400) % 4) {
        case 0:
            // 全方向ランダム
            if (frameCount % 25 === 0) {
                for (let i = 0; i < 8; i++) {
                    shotsGenerated.push(createEnemyShot(
                        enemyPos, Math.random() * Math.PI * 2, 3, Vec3D.new(255, 255, 255), 40));
                }
            }
            break;
        case 1:
            // n方向固定
            if (frameCount % 25 === 0) {
                const numWays = 20;
                for (let i = 0; i < numWays; i++) {
                    shotsGenerated.push(createEnemyShot(
                        enemyPos, i / numWays * Math.PI * 2, 6, Vec3D.new(0, 255, 0), 15));
                }
            }
            break;
        case 2:
            // n方向回転 * m
            if (frameCount % 18 === 0) {
                const numWays = 13;
                for (let i = 0; i < numWays; i++) {
                    shotsGenerated.push(createEnemyShot(
                        enemyPos, (i + frameCount / 100) / numWays * Math.PI * 2, 8, Vec3D.new(0, 255, 255), 12));
                    shotsGenerated.push(createEnemyShot(
                        enemyPos, (i - frameCount / 100) / numWays * Math.PI * 2, 8, Vec3D.new(0, 0, 255), 12));
                }
            }
            break;
        case 3:
            // 全方向ランダム（高速）
            if (frameCount % 18 === 0) {
                for (let i = 0; i < 20; i++) {
                    shotsGenerated.push(createEnemyShot(
                        enemyPos, Math.random() * Math.PI * 2, 15, Vec3D.new(255, 0, 255), 15));
                }
            }
            break;
        }

        return [...enemyShots, ...shotsGenerated];
    };

    const handleShotsCollisions = (aPos: Vec2D, bShots: ReadonlyArray<Shot>, aHp: number)
            : { newBShots: ReadonlyArray<Shot>, newAHp: number} => {
        const enemyShotsFiltered = bShots.filter((shot) => {
            if (Vec2D.abs(Vec2D.subtract(shot.rigidBody.pos, aPos)) < 20) {
                aHp -= 1;
                return false;
            }
            return true;
        });
        return {
            newAHp: aHp,
            newBShots: enemyShotsFiltered,
        };
    };

    const isShotInScreen = (shotPos: Vec2D): boolean => {
        return -30 < shotPos.x && shotPos.x < SCREEN_SIZE.w + 30 &&
            -30 < shotPos.y && shotPos.y < SCREEN_SIZE.h + 30;
    };

    const getGameScene = (
            scene: GameState["scene"], enemyHp: number, playerHp: number): GameState["scene"] => {
        if (scene !== "Playing") {
            return scene;
        }
        if (enemyHp <= 0) {
            return "GameClear";
        } else if (playerHp <= 0) {
            return "GameOver";
        }
        return scene;
    };

    const update = (gameState: GameState): GameState => {
        // プレイヤー、敵の移動
        const playerPos = movePlayer(gameState.playerPos);
        const enemyPos = moveEnemy(gameState.enemyPos, gameState.frameCount);

        // 弾の生成と移動と削除
        const playerShots: ReadonlyArray<Shot> =
            appendNewPlayerShots(gameState.playerShots, playerPos, gameState.frameCount)
            .map((shot) => Shot.update(shot))
            .filter((shot) => isShotInScreen(shot.rigidBody.pos));
        const enemyShots: ReadonlyArray<Shot> =
            appendNewEnemyShots(gameState.enemyShots, enemyPos, gameState.frameCount)
            .map((shot) => Shot.update(shot))
            .filter((shot) => isShotInScreen(shot.rigidBody.pos));

        // プレイヤーと敵の弾の衝突
        const { newBShots: enemyShotsAfterCollision, newAHp: playerHpAfterCollision} =
            handleShotsCollisions(playerPos, enemyShots, gameState.playerHp);

        // 敵とプレイヤーの弾の衝突
        const { newBShots: playerShotsAfterCollision, newAHp: enemyHpAfterCollision} =
            handleShotsCollisions(enemyPos, playerShots, gameState.enemyHp);

        return {
            enemyHp: enemyHpAfterCollision,
            enemyPos,
            enemyShots: enemyShotsAfterCollision,
            frameCount: gameState.frameCount + 1,
            playerHp: playerHpAfterCollision,
            playerPos,
            playerShots: playerShotsAfterCollision,
            scene: getGameScene(gameState.scene, enemyHpAfterCollision, playerHpAfterCollision),
        };
    };

    const drawUI = (gameState: GameState): void => {
        switch (gameState.scene) {
        case "GameClear":
            textSize(35);
            textAlign(CENTER);
            text("ゲームクリア！", 0, SCREEN_SIZE.h / 2, SCREEN_SIZE.w);
            break;
        case "GameOver":
            textSize(35);
            textAlign(CENTER);
            text("ゲームオーバー！", 0, SCREEN_SIZE.h / 2, SCREEN_SIZE.w);
            break;
        case "Playing":
            textSize(23);
            textAlign(LEFT);
            text(`敵のHP: ${gameState.enemyHp}/100`, 10, 40);
            text(`プレイヤーのHP: ${gameState.playerHp}/5`, 10, 80);
            break;
        }

        if (gameState.scene !== "Playing") {
            textSize(23);
            textAlign(RIGHT);
            text("画面をクリックしてリセット", 10, 40, SCREEN_SIZE.w - 10);
        }
    };

    const drawShots = (shots: ReadonlyArray<Shot>): void => {
        shots.forEach((shot) => {
            shot.lights.forEach((light) => {
                const pos = Vec2D.add(shot.rigidBody.pos, light.pos);
                image(
                    getShotLightImage(light.color),
                    pos.x - 20, pos.y - 20, 55, 55);
            });
        });
    };

    const drawGame = (gameState: GameState): void => {
        background(40, 40, 100);

        // 敵
        fill(color(255, 255, 255));
        circle(gameState.enemyPos.x, gameState.enemyPos.y, 40);
        circle(gameState.playerPos.x, gameState.playerPos.y, 40);

        // 弾
        blendMode(ADD);
        drawShots(gameState.playerShots);
        drawShots(gameState.enemyShots);
        blendMode(BLEND);

        // 画面上の表示
        drawUI(gameState);
    };

    const getShotLightImage = (() => {
        const imgList: { [rgb: string]: Graphics } = {};
        return (color: Vec3D): Graphics => {
            const colorName = `${color.x}, ${color.y}, ${color.z}`;
            if (colorName in imgList) {
                return imgList[colorName];
            }
            const img: any = createGraphics(100, 100);
            img.noStroke();
            for (let i = 50; i > 0; i--) {
                const circleColor = Vec3D.add(
                    Vec3D.times(color, (1 - i / 50)),
                    Vec3D.times(Vec3D.new(0, 0, 0), i / 50));
                img.fill(circleColor.x, circleColor.y, circleColor.z);
                img.circle(img.width / 2, img.height / 2, i);
            }
            imgList[colorName] = img;
            return img;
        };
    })();

    {
        (window as any).setup = () => {
            createCanvas(SCREEN_SIZE.w, SCREEN_SIZE.h);
        };

        const initialGameState: GameState = {
            enemyHp: 100,
            enemyPos: Vec2D.new(SCREEN_SIZE.w / 2, 100),
            enemyShots: [],
            frameCount: 0,
            playerHp: 5,
            playerPos: Vec2D.new(SCREEN_SIZE.w / 2, 700),
            playerShots: [],
            scene: "Playing",
        };

        let gameState = initialGameState;

        (window as any).draw = () => {
            if (gameState.scene !== "Playing" && mouseIsPressed) {
                gameState = initialGameState;
            }
            gameState = update(gameState);
            drawGame(gameState);
        };
    }
    ```
- p5_key_names.ts
    ```typescript
    declare const ALT: 18;
    declare const BACKSPACE: 8;
    declare const CONTROL: 17;
    declare const DELETE: 46;
    declare const DOWN_ARROW: 40;
    declare const ENTER: 13;
    declare const ESCAPE: 27;
    declare const LEFT_ARROW: 37;
    declare const OPTION: 18;
    declare const RETURN: 13;
    declare const RIGHT_ARROW: 39;
    declare const SHIFT: 16;
    declare const TAB: 9;
    declare const UP_ARROW: 38;
    ```
- rigid_body.ts
    ```typescript
    import { Vec2D } from "./vec";

    // 速度と位置を持つ物体
    export interface RigidBody {
        pos: Vec2D;
        velocity: Vec2D;
    }

    export const RigidBody = {
        new: (pos: Vec2D, velocity: Vec2D) => ({ pos, velocity }),

        // 位置に速度を加算
        update: (obj: RigidBody): RigidBody =>
            ({ pos: Vec2D.add(obj.pos, obj.velocity), velocity: obj.velocity }),
    };
    ```
- vec.ts
    ```typescript
    // イミュータブルな二次元ベクトル
    export interface Vec2D {
        readonly x: number;
        readonly y: number;
    }

    export const Vec2D = {
        // 加減乗除, 絶対値, 生成
        abs: (a: Vec2D): number =>
            Math.sqrt(a.x * a.x + a.y * a.y),
        add: (a: Vec2D, b: Vec2D): Vec2D => ({
            x: a.x + b.x,
            y: a.y + b.y,
        }),
        divide: (a: Vec2D, x: number): Vec2D => ({
            x: a.x / x,
            y: a.y / x,
        }),
        dot: (a: Vec2D, b: Vec2D): number =>
            a.x * b.x + a.y * b.y,
        new: (x: number, y: number): Vec2D => ({ x, y }),
        subtract: (a: Vec2D, b: Vec2D): Vec2D => ({
            x: a.x - b.x,
            y: a.y - b.y,
        }),
        times: (a: Vec2D, x: number): Vec2D => ({
            x: a.x * x,
            y: a.y * x,
        }),
    };

    // イミュータブルな三次元ベクトル
    export interface Vec3D {
        readonly x: number;
        readonly y: number;
        readonly z: number;
    }

    export const Vec3D = {
        // 加減乗除, 絶対値, 生成
        abs: (a: Vec3D): number =>
            Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z),
        add: (a: Vec3D, b: Vec3D): Vec3D => ({
            x: a.x + b.x,
            y: a.y + b.y,
            z: a.z + b.z,
        }),
        divide: (a: Vec3D, x: number): Vec3D => ({
            x: a.x / x,
            y: a.y / x,
            z: a.z / x,
        }),
        dot: (a: Vec3D, b: Vec3D): number =>
            a.x * b.x + a.y * b.y,
        new: (x: number, y: number, z: number): Vec3D =>
            ({ x, y, z }),
        subtract: (a: Vec3D, b: Vec3D): Vec3D => ({
            x: a.x - b.x,
            y: a.y - b.y,
            z: a.z - b.z,
        }),
        times: (a: Vec3D, x: number): Vec3D => ({
            x: a.x * x,
            y: a.y * x,
            z: a.z * x,
        }),
    };
    ```
- index.html
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Sample Game</title>
        <style>
    * {
        margin: 0;
        padding: 0;
    }
    html, body {
        height: 100%;
        background: black;
    }
    .p5Canvas {
        display: block;
        margin: auto;
        width: auto !important;
        height: 100% !important;
    }
        </style>
    </head>
    <body>
        <script src="./main.ts"></script>
    </body>
    </html>
    ```

# 結論
- [CPythonの公式ドキュメント](https://docs.python.org/ja/3/tutorial/index.html)や[uhyohyo.net](https://uhyohyo.net/javascript/)や[TypeScriptの型初級(uhyo)](https://qiita.com/uhyo/items/da21e2b3c10c8a03952f)などを読みましょう。
