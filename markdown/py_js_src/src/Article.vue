<template>
    <h1-section title="Python, JavaScriptの始め方">
        <dark-light-button @click="toggleDarkLight"></dark-light-button>
        <h2-section num="1." title="インストールしよう" id="first-h2">
            <h3-section title="Pythonのインストール">
                <group>
                    <a href="https://ja.wikipedia.org/wiki/Python">Python</a>は動的型付け言語のひとつ。
                </group>
                <group>
                    以下のような実装がある。
                    <group>
                        <a href="https://www.python.org/">CPython</a>
                        <img
                            src="../images/python-logo-generic.svg"
                            alt="Pythonのロゴ"
                            class="inline-img">
                        <br>最もよく使われる実装。今回はこれを使う。
                    </group>
                    <group>
                        <a href="http://pypy.org/">PyPy</a>
                        <img
                            src="../images/pypy-logo.png"
                            alt="Pythonのロゴ"
                            class="inline-img">
                        <br>CPythonよりも実行速度が速い。その代わり起動は遅い。
                        <gray>※ PyPyのロゴは Samuel Reis によります</gray>
                    </group>
                </group>
                <group>
                    <group>
                        <img
                                src="../images/python_org.jpg"
                                alt="CPythonの公式サイトのスクリーンショット"
                                class="float-left">
                        <div>
                            インストールは
                            <a href="https://www.python.org">CPythonの公式サイト</a>からインストーラをダウンロードして行う。Python2とPython3があるが、2は古いため3を使う。<br>
                            ※ 左図はCPythonのホームページのスクリーンショット
                        </div>
                    </group>
                    <group>
                        ネット上にはPythonのインストールにAnacondaを使うことを推奨している記事があるが、Anacondaは初心者が使うと問題が起きるため推奨しない。また、上記サイトからインストールする場合は先にアンインストールしておくこと。
                        （参考1:
                        <a
                            href="http://www.zopfco.de/entry/2017/04/03/233811"
                        >Pythonの環境管理ツール良し悪し - Zopfcode</a>, 参考2:
                        <a
                            href="http://onoz000.hatenablog.com/entry/2018/02/11/142347"
                        >condaとpip：混ぜるな危険 - onoz000’s blog</a>）
                    </group>
                </group>
            </h3-section>
            <h3-section title="Node.jsのインストール">
                <group>
                    <a href="https://ja.wikipedia.org/wiki/JavaScript">JavaScript</a>はブラウザやNode.jsで動かすことのできる言語。実装にはV8やSpiderMonkeyなどがある。
                </group>
                <group>
                    <img
                        src="../images/Node.js_logo.svg"
                        alt="Node.jsのロゴ"
                        class="float-left">
                    <div>
                        <a href="https://nodejs.org/ja/">Node.jsの公式サイト</a>でインストーラーをダウンロードできる。
                        公式サイトにはLTSとCurrentの2つのバージョンがある。
                        <a href="https://en.wikipedia.org/wiki/Long-term_support">LTS</a>はLong-term supportの略で、安定版のこと。このページにあるサンプルプログラムはLTSでしか動作確認していないため、LTSを推奨する。
                    </div>
                </group>
            </h3-section>
        </h2-section>
        <h2-section num="2." title="ファイルから実行してみる">
            <h3-section title="Pythonをファイルから実行してみよう">
                <group>
                    好きな場所に<code-span>main.py</code-span>というファイルを作って、以下の内容を書き込む
                    <code-fence lang="python" :code="sampleCode['2']['py_hello.py']"></code-fence>
                </group>
                <group>
                    コマンドプロンプト（ターミナル）を開いて、<code-span>py 今作ったファイルのパス</code-span>と打つ
                    （例: <code-span>py C:\Users\foo\main.py</code-span>）<br>
                    ※ MacOSやLinuxの場合は、<code-span>py</code-span>の部分を<code-span>python3</code-span>で読み替えてください。<br>
                    以下のように表示されたら成功。
                    <code-fence lang="python" :code="sampleCode['2']['py_hello_result.py']"></code-fence>
                </group>
            </h3-section>
            <h3-section title="JavaScript (Node.js) をファイルから実行してみよう">
                <group>
                    好きな場所に`main.js`というファイルを作って、以下の内容を打ち込む
                    <code-fence lang="javascript" :code="sampleCode['2']['js_hello.js']"></code-fence>
                </group>
                <group>
                    コマンドプロンプト（ターミナル）を開いて、<code-span>node 今作ったファイルのパス</code-span>と打つ
                    （例: <code-span>node C:\Users\foo\main.js</code-span>）<br>
                    以下のように表示されたら成功。
                    <code-fence lang="javascript" :code="sampleCode['2']['js_hello_result.js']"></code-fence>
                </group>
            </h3-section>
            <h3-section title="JavaScript (ブラウザ) をファイルから実行してみよう">
                <group>
                    JavaScriptファイルをブラウザ上で実行するにはHTMLファイルが必要。<br>
                    好きな場所に<code-span>index.html</code-span>というファイルを作って、以下の内容を打ち込む
                    <code-fence lang="html" :code="sampleCode['2']['browser_hello-index.html']"></code-fence>
                </group>
                <group>
                    <code-span>index.html</code-span>と同じフォルダ内に<code-span>main.js</code-span>というファイルを作って、以下の内容を打ち込む
                    <code-fence lang="javascript" :code="sampleCode['2']['browser_hello-main.js']"></code-fence>
                </group>
                <group>
                    ブラウザ（Internet Explorerだとうまく実行できない可能性があるため、Microsoft EdgeやGoogle ChromeやMozilla Firefoxなどの他のブラウザを使用してください。）を開き、<code-span>index.html</code-span>ファイルをブラウザへドラッグ
                </group>
                <group>
                    F12キーを押して、出てきたパネル上でConsole (コンソール) タブを開いて、以下のように表示されていたら成功。
                    <code-fence lang="javascript" :code="sampleCode['2']['browser_hello-result.js']"></code-fence>
                </group>
            </h3-section>
        </h2-section>
        <h2-section num="3." title="REPLを実行してみる">
            <h3-section title="REPLとは">
                <group>
                    多くの言語には<a href="https://ja.wikipedia.org/wiki/REPL">REPL (Read-Eval-Print Loop)</a>が存在する。
                    <gray>C#ならcsi、Javaならjshell、Goならgore、Rubyならirb、...</gray><br>
                    REPLを使うと、ファイルを用意せずに短いコードを簡単に実行できる。<br>
                    REPL上では、入力した式の計算結果を<code-span>print</code-span>や<code-span>console.log</code-span>を使わなくても表示してくれる。
                </group>
            </h3-section>
            <h3-section title="PythonのREPLを実行しよう">
                <group>
                    コマンドプロンプト（ターミナル）を開いて、<code-span>py</code-span>と打つ<br>
                    ※ MacOSやLinuxの場合は、<code-span>python3</code-span>と打ってください。
                </group>
                <group>
                    以下のように打つ。
                    <code-fence lang="python" :code="sampleCode['3']['py_repl_hello.py']"></code-fence>
                </group>
                <group>
                    いろいろ入力してみてください。（<code-span>f(10)</code-span> や<code-span>2 + 4</code-span>など）
                </group>
            </h3-section>
            <h3-section title="JavaScript (Node.js) のREPLを実行しよう">
                <group>
                    コマンドプロンプト（ターミナル）を開いて、<code-span>node</code-span>と打つ
                </group>
                <group>
                    以下のように打つ。
                    <code-fence lang="javascript" :code="sampleCode['3']['node_hello.js']"></code-fence>
                </group>
                <group>
                    いろいろ入力してみてください。（<code-span>f(10)</code-span> や<code-span>2 + 4</code-span>など）
                </group>
            </h3-section>
            <h3-section title="JavaScript (ブラウザ) のREPLを実行しよう">
                <group>
                    ブラウザ（Microsoft EdgeやMozilla FirefoxやGoogle ChromeやInternet Explorerなど）を開き、F12キーを押す<br>
                    ※ 空のタブを使ってください。
                </group>
                <group>
                    Console (コンソール) タブを開き、以下のように打つ。
                    <code-fence lang="javascript" :code="sampleCode['3']['console_hello.js']"></code-fence>
                </group>
                <group>
                    いろいろ入力してみてください。（<code-span>f(10)</code-span> や<code-span>2 + 4</code-span>など）
                </group>
            </h3-section>
        </h2-section>
        <h2-section num="4." title="テキストエディタ">
            <group>
                <img
                    src="../images/Visual_Studio_Code_1.18_icon.svg"
                    alt="VSCodeのアイコン"
                    class="float-left">
                <div>
                    テキストエディタにはMicrosoftが開発している、<a href="https://nodejs.org/ja/docs/">VSCode</a>を使うのがおすすめです。<br>
                    起動が速くて高機能です。<br>
                    特に、VSCodeはTypeScript（後述）で開発されているのもあって、TypeScriptを使うならVSCodeを使うべきです。<br>
                    拡張機能の
                    <a href="https://marketplace.visualstudio.com/items?itemName=ms-python.python">Python</a>
                    <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin">TSLint</a>
                    を入れて使うべきです（<gray>※ TSLintは廃止予定で、将来的にESLintへ移ります</gray>）。他にも、
                    <a href="https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome">Debugger for Chrome</a>, <a href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker">Code Spell Checker</a>なども入れるといいと思います。（細かい使い方はネットで調べてください。）
                </div>
            </group>
        </h2-section>
        <h2-section num="5." title="Python, JavaScriptの学習方法">
            <h3-section title="バージョンについて">
                <group>
                    PythonもJavaScriptも活発に開発されていて、アップデートが速いです。<br>
                    そのため、ネット上のサイトや本を見るときはどのバージョンを対象にした記事なのかに注意しないと、コードが動かなかったり、古くて今は使われていない手法だったりします。
                </group>
                <group>
                    Pythonのバージョン<br>
                    <table>
                        <tr><th>バージョン</th><th>リリース年</th></tr>
                        <tr><td>1</td><td>1994</td></tr>
                        <tr><td>2 (2.0 ~ 2.7)</td><td>2000</td></tr>
                        <tr><td>3 (3.0 ~)</td><td>2008</td></tr>
                    </table>
                    <gray>
                        ※ Python 2は2020年にサポート終了になる。
                        現時点での最新は3.7で、2018年にリリース。
                    </gray>
                </group>
                <group>
                    JavaScriptのバージョン<br>
                    <table>
                        <tr><th>バージョン</th><th>リリース年</th><th>主な新機能</th></tr>
                        <tr><td>ES3</td><td>1999</td><td></td></tr>
                        <tr><td>ES4</td><td>リリース無し</td><td></td></tr>
                        <tr><td>ES5</td><td>2009</td><td>strict mode, Arrayのメソッド追加</td></tr>
                        <tr><td>ES2015 (ES6)</td><td>2015</td><td>let, const, class, Arrayのメソッド追加, アロー関数, テンプレート文字列, for~of, Promise, ...</td></tr>
                        <tr><td>ES2016</td><td>2016</td><td>累乗演算子, Arrayのincludesメソッド</td></tr>
                        <tr><td>ES2017</td><td>2017</td><td>async/await</td></tr>
                    </table>
                </group>
            </h3-section>
            <h3-section title="Pythonを学習しよう">
                <group>
                    CPythonの公式サイトがチュートリアルを用意してくれています。必ず読みましょう。<br>
                    <a href="https://docs.python.org/ja/3/tutorial/index.html">https://docs.python.org/ja/3/tutorial/index.html</a><br>
                </group>
                <group>
                    理解できない部分がある場合、人に聞くか、本を買ってみるのもよいかもしれません。
                </group>
            </h3-section>
            <h3-section title="JavaScript (ブラウザ) を学習しよう">
                <group>
                    ブラウザの1つであるMozilla Firefoxを開発しているMozillaが、<a href="https://developer.mozilla.org/ja/">MDN (Mozilla Developer Network)</a>でJavaScriptのドキュメントを公開しています。<br>
                    <gray>MDNのWebチュートリアル: <a href="https://developer.mozilla.org/ja/docs/Web/Tutorials">https://developer.mozilla.org/ja/docs/Web/Tutorials</a></gray>
                </group>
                <group>
                    ただ、このチュートリアルは少し読みづらいので、他のサイトを見るか本を買った方が良いかもしれません。
                    とくにこちらのサイトがおすすめです: <a href="https://uhyohyo.net/javascript/">uhyohyo.net/JavaScript初級者から中級者になろう</a> （名前に反して、JavaScriptを全く知らない方にも良いサイトです。）
                </group>
                <group>
                    ブラウザ上で複数のJavaScriptファイルを組み合わせて使う場合、WebPackやParcelが必要になります。<gray>（使わなくてもできるが、大変）</gray><br>
                    JavaScriptはInternet Explorerではまともに開発できません<gray>（動作が重いことや、JavaScriptのバージョンが古いことなどが原因）</gray>。他のブラウザを使いましょう。
                </group>
            </h3-section>
            <h3-section title="JavaScript (Node.js) を学習しよう">
                Node.jsは基本的にターミナル上で動作するため、ブラウザ上でJavaScriptを実行するときに使える<code-span>document</code-span>や<code-span>alert</code-span>などの画面の表示に関する変数・関数が存在しません。<br>
                その代わりに、主にサーバーに関わる、Node.js専用の多くの機能が提供されています。<gray><a href="https://nodejs.org/ja/docs/">Node.jsのドキュメント</a>で確認できます。</gray><br>
                Node.jsにはパッケージマネージャであるnpm (Node Package Manager)が付属しています。（Pythonのpipに相当）
            </h3-section>
            <h3-section title="ネット検索について"></h3-section>
                <group>
                    ネットでプログラミングに関することを調べるとき、残念ながら、日本語では1つもまともな記事がヒットしないということがよくあります。
                </group>
                <group>
                    Googleの検索欄に英語を打っても、デフォルトでは日本のページが優先されて表示されてしまいます。
                    英語版のGoogleを使うにはこのURLを使ってください。
                    <a href="https://www.google.com/?gl=us&hl=en&gws_rd=cr&pws=0">https://www.google.com/?gl=us&hl=en&gws_rd=cr&pws=0</a>
                </group>
                <group>
                    あるいは、<a href="https://duckduckgo.com/">DuckDuckGo</a>などのGoogle以外の検索エンジンを使う方法もあります。<br>
                    検索結果のページの左上に"日本"というトグルボタンがあるので、これをOFFにすることで英語で検索できます。
                </group>
            <h3-section title="JavaScriptの古い書き方について">
                <group>
                    JavaScriptは後方互換性を保ちながらアップデートされているため、今はまず使われない古い書き方が多く存在します。それらの一部をここで示しておきます。
                </group>
                <group>
                    関数
                    <code-fence lang="javascript" :code="sampleCode['5']['function.js']"></code-fence>
                </group>
                <group>
                    変数
                    <code-fence lang="javascript" :code="sampleCode['5']['variable.js']"></code-fence>
                </group>
                <group>
                    クラス
                    <code-fence lang="javascript" :code="sampleCode['5']['class.js']"></code-fence>
                </group>
                <group>
                    ブロックスコープ
                    <code-fence lang="javascript" :code="sampleCode['5']['block.js']"></code-fence>
                </group>
            </h3-section>
        </h2-section>
        <h2-section num="6." title="型を付けよう">
            <group>
                PythonやJavaScriptは動的型付け言語であり、変数に型がありません。<br>
                これは不便なことが多いので、型付けする方法が用意されています。積極的に使っていくべきです。
            </group>
            <h3-section title="Pythonの型アノテーションを使う">
                <group>
                    Pythonでは型アノテーションを使って型を明示的に指定できます。
                    使い方はCPythonの公式ドキュメントを参照: <a href="https://docs.python.org/ja/3/library/typing.html">https://docs.python.org/ja/3/library/typing.html</a>
                </group>

                例
                <code-fence lang="python" :code="sampleCode['6']['typed.py']"></code-fence>
            </h3-section>
            <h3-section title="TypeScriptを使う">
                <group>
                    JavaScriptにはTypeScriptを使って型を付けられます。TypeScriptはJavaScriptに型を指定する文法を加えた言語で、JavaScriptに変換されてから実行されます。
                    <a href="http://www.typescriptlang.org/play/">TypeScriptの公式サイトのPlayground</a>ではブラウザ上で簡単にTypeScriptを試せます。
                </group>
                <group>
                    Node.jsでTypeScriptを使う場合、<code-span>ts-node</code-span>が便利です。
                    コマンドプロンプト（ターミナル）上で<code-span>npm install -g ts-node typescript</code-span>と打つとts-nodeがインストールされます
                    （ts-nodeの使用にはtypescriptのインストールも必要）。
                    あとは、<code-span>ts-node ファイル名</code-span>と打てば、TypeScriptのファイルを実行できるはずです。<br>
                    （内部的には、TypeScriptのファイルがJavaScriptに変換されてからNode.jsで実行されます。）<br>
                    <gray>※ <code-span>ts-node</code-span>コマンドが存在しないと表示された場合は、<a href="https://qiita.com/yuki12/items/9723f60907508b11504b">PATHを通す</a>必要があります。Windowsの場合は<code-span>%APPDATA%\npm</code-span>を追加すればよいです。</gray>
                </group>
                <group>
                    TypeScriptファイルをJavaScriptに変換するには、以下のコマンドをコマンドプロンプト（ターミナル）上で打ちます。
                    <code-fence lang="bash" :code="sampleCode['6']['tsc_usage.sh']"></code-fence>
                    <code-span>main.ts</code-span>のようなファイルを作り、コードを書き、コマンドプロンプト（ターミナル）上で<code-span>npx tsc</code-span>と打てば、TypeScriptからJavaScriptへ変換されます。
                </group>
                <group>
                    TypeScriptでは、変換先のJavaScriptのバージョンが低いときJavaScriptのいくつかの最新の機能（Arrayの関数やMapなど）を使えません。
                    <code-span>tsconfig.json</code-span>の<code-span>"target"</code-span>を<code-span>"ES2017"</code-span>とかにすれば使えるようになります。
                </group>
                <group>
                    <strong>TypeScriptはJavaScriptとほぼ同じ</strong>です。最低限覚えるべき文法を記しておきます。
                    細かい使い方はサンプルプログラムを見てください。
                    これを読んだら、次に<a href="https://qiita.com/uhyo/items/da21e2b3c10c8a03952f">TypeScriptの型初級</a>を見ることをお勧めします。<br>
                    <gray>TypeScriptはJavaScriptさえ分かっていれば学習コストが低いことが特徴なので、とりあえずは軽く使ってみて、興味が出たらTypeScriptの型初級を読むといいです。</gray>
                </group>
                <code-fence lang="typescript" :code="sampleCode['6']['ts_syntax.ts']"></code-fence>
            </h3-section>
        </h2-section>
        <h2-section num="7." title="クロスブラウザについて">
            <img
                src="../images/can_i_use_es6.jpg"
                alt="caniuseのスクリーンショット"
                class="float-left">
            <div>
                各ブラウザのJavaScriptのバージョン（実装状況）は<a href="https://caniuse.com/">caniuse.com</a>などで確認できます。<br>
                例えばES2015 (ES6)を使えるかは、<a href="https://caniuse.com/#search=ES6">https://caniuse.com/#search=ES6</a> で確認できます。
                これを見ると、IE (Internet Explorer) ではES6をほとんど使えないことがわかります。
                現在は<a href="https://babeljs.io/">Babel</a>などを使ってES2015以降のコードをES5以前のコードに変換して対応するのが主流ですが、
                IEは2020年の1月にサポートが切れるので、それ以降はIEを切り捨てる方向になると思われます。<br>
                <gray>（TypeScriptはデフォルトではES5のコードに変換されます。）</gray>
            </div>
        </h2-section>
        <h2-section num="8." title="サンプルプログラム1: かんたんなサーバー">
            <h3-section title="この節について">
                <group>
                    ためしに簡単なプログラムを書いて、各言語の雰囲気を感じてもらうために書きました。<br>
                    パッケージマネージャの使い方を示すために、意味もなく外部ライブラリを持ち出しています。
                </group>
                <group>
                    PythonやNode.jsのコードは、実行環境やライブラリのアップデートで動かなくなることがあります。最新バージョンの環境で動かないことを確認した方は、管理者にご報告ください。<br>
                    今回は入門のため使いませんが、実際にはpackage-lock.json (各ライブラリのどのバージョンを使うか書かれたファイル) や nvm (Node Version Manager) などで対処できます。
                </group>
            </h3-section>
            <h3-section title="パッケージマネージャとは">
                <group>
                    Pythonにはpip、Node.jsにはnpmというパッケージマネージャが付属している。<br>
                </group>
                <group>
                    パッケージマネージャは外部ライブラリのダウンロードに使うツールで、pipなら<a href="https://pypi.org">pypi.org</a>、npmなら<a href="https://www.npmjs.com/">npmjs.com</a>からダウンロードしてくる。<br>
                    pipではダウンロードしたファイルはPC全体から呼び出せるが、npmでは<code-span>-g</code-span>オプションを付けないとき特定のフォルダ内からのみ呼び出せる。<br>
                    各ライブラリにはたいてい多くの依存ライブラリが存在して、1つのライブラリを<code-span>install</code-span>すると同時にそのライブラリが依存している多くのライブラリが自動でダウンロードされる。<br>
                </group>
                <group>
                    ライブラリを使うときは、必ずライセンスを確認すること。（MITとかBSDとかGPLとか）
                </group>
            </h3-section>
            <h3-section title="Python">
                <ol type="1">
                    <li>
                        まずpipを使って必要なライブラリをインストールする。VSCodeを使う場合、
                        <ol type="1">
                            <li>空のフォルダを好きな場所に作る</li>
                            <li>もしVSCodeで既に別のフォルダを開いていたら<code-span>Ctrl+K -> F</code-span>で閉じる</li>
                            <li><code-span>Ctrl+K -> Ctrl+O</code-span>からフォルダを開く（あるいはコマンドプロンプト上で<code-span>code フォルダへのパス</code-span>）</li>
                            <li>
                                <code-span>Ctrl+Shift+@</code-span>でコマンドプロンプト（ターミナル）を開いてコマンドを打つ<br>
                                <gray>（ PowerShell/コマンドプロンプト/Bashの切り替えは <code-span>Ctrl+Shift+P</code-span> -> <code-span>select default shell</code-span> からできます。）</gray>
                            </li>
                        </ol>
                        <group>
                            エラーがおきたら：<br>
                            <code-span>pip</code-span>コマンドが存在しないと表示された場合は、<code-span>py -m pip</code-span>（MacOSやLinuxでは<code-span>python3 -m pip</code-span>）を使ってください。<br>
                            Windowsで「アクセスが拒否されました」と表示される場合、コマンドプロンプトを<a href="https://qiita.com/takuya0301/items/df6cde3bbaf9e13ef8f0">管理者権限で開いて</a>もう一度実行してください。<br>
                        </group>
                        <group>
                            <gray>
                                <code-span>pip</code-span>コマンドでダウンロードしたファイルは、バージョンやOSによって異なりますが、Windowsでバージョン3.7なら<code-span>C:\Program Files\Python37</code-span>下らへんに置かれます。<br>
                                インストールしたパッケージの一覧は<code-span>pip list</code-span>で見れます。
                            </gray>
                        </group>
                    </li>
                    <li>
                        次に、ファイル<code-span>main.py</code-span>（名前は何でもよい）を作って、以下のように書く。
                        <gray>
                            一行目で今インストールしたFlaskを呼び出しています。<br>
                            <code-span>/</code-span>にアクセスしたら"Index Page"と訪問者数、<code-span>/foo</code-span>にアクセスしたら"Foo Page"を表示するプログラムです。
                        </gray>
                        <code-fence lang="python" :code="sampleCode['8']['flask_sample.py']"></code-fence>
                    </li>
                    <li>
                        <code-span>py main.py</code-span>（あるいは<code-span>python3 main.py</code-span>）で実行した状態で、<a href="http://localhost:3000/">http://localhost:3000/</a>を開くと"Index Page"と訪問者数、<a href="http://localhost:3000/foo">http://localhost:3000/foo</a>を開くと"Foo Page"と表示される。
                    </li>
                </ol>
            </h3-section>
            <h3-section title="JavaScript/TypeScript">
                <ol type="1">
                    <li>
                        まずnpmを使って必要なライブラリをインストールする。VSCodeを使う場合、
                        <ol type="1">
                            <li>空のフォルダを好きな場所に作る</li>
                            <li>もしVSCodeで既に別のフォルダを開いていたら<code-span>Ctrl+K -> O</code-span>で閉じる</li>
                            <li><code-span>Ctrl+K -> Ctrl+F</code-span>からフォルダを開く（あるいはコマンドプロンプト上で<code-span>code フォルダへのパス</code-span>）</li>
                            <li><code-span>Ctrl+Shift+@</code-span>でコマンドプロンプト（ターミナル）を開いてコマンドを打つ（PowerShell/コマンドプロンプト/Bashの切り替えは<code-span>Ctrl+Shift+P</code-span> -> <code-span>select default shell</code-span>からできます。）</li>
                        </ol>
                        <group>
                            npmを使うには、最初に<code-span>npm init -y</code-span>での初期化が必要です。
                            これによって、カレントディレクトリ下に<code-span>package.json</code-span>ファイルが生成されます。<br>
                            <code-span>npm install</code-span>を使うと、ライブラリをダウンロードできます。ライブラリは<code-span>-g</code-span>を付けなかった場合カレントディレクトリ下の<code-span>node_modules</code-span>フォルダ内に置かれます。中を見ると多くのファイルが存在することを確認できると思います。<br>
                            TypeScriptで外部ライブラリを使うときには、同時に型定義ファイル（.d.tsで終わる名前を持つファイル）が必要になります。<code-span>@types/ライブラリ名</code-span>として型定義ファイルが配布されている場合が多いです。
                        </group>
                        <code-fence lang="bash" :code="sampleCode['8']['init_express.sh']"></code-fence>
                    </li>
                    <li>
                        次にファイル<code-span>main.ts</code-span>（名前は何でもよい）を作って、以下のように書く。ただし、1.でコマンドを打ったディレクトリにファイルを置くこと。<br>
                        <gray>
                            一行目で先ほどインストールしたexpressをインポートしている。<br>
                            TypeScriptでは、JavaScriptの<code-span>const X = require("Y")</code-span>を<code-span>import X = require("Y")</code-span>と書く必要がある。
                        </gray>
                        <code-fence lang="typescript" :code="sampleCode['8']['express_sample.ts']"></code-fence>
                    </li>
                    <li>
                        <code-span>ts-node main.ts</code-span>で実行した状態で、<a href="http://localhost:3000/">http://localhost:3000/</a>を開くと"Index Page"と訪問者数、<a href="http://localhost:3000/foo">http://localhost:3000/foo</a>を開くと"Foo Page"と表示される。
                    </li>
                    <li>
                        このままだと、<code-span>console.log</code-span>の部分に<code-span>Calls to 'console.log' are not allowed.tslint(no-console)</code-span>という警告がでます。<br>
                        無視してもいいですが、ディレクトリ内のtslint.jsonの"rules"に以下のように一行足せば消えます。
                        <code-fence lang="json" :code="sampleCode['8']['edit_tslint.json']"></code-fence>
                    </li>
                </ol>
            </h3-section>
            <h3-section title="何をしたのか">
                自分のPCが接続されているLAN内からのみアクセスできるサーバを作りました。<br>
                自分のプライベートIPアドレスがわかれば、他のPCからもアクセスできます。<br>
                コマンドプロンプトでipconfig（MacOSやLinuxならifconfig）と打ち、<code-span>192.168.</code-span>や<code-span>10.</code-span>や<code-span>172.</code-span>で始まるアドレスを探してください（複数ありますが、"IPv4アドレス"や"inet"となっているものです）。
                これがプライベートアドレスなので、たとえば<code-span>192.168.2.104</code-span>だったら、<a href="http://192.168.2.104:3000">http://192.168.2.104:3000</a>で同一LAN内の他のPCからもアクセスできます。スマホ等で試してみてください。
            </h3-section>
            <h3-section title="pypi.orgとnpmjs.comを見よう">
                <group>
                    先ほど使用した外部ライブラリをpypi.orgとnpmjs.comで確認する。
                    英語しかないが、簡単な使い方や、各ライブラリのドキュメントやホームページへのリンクなどを確認できる。
                </group>
                <group>
                    Flask: <a href="https://pypi.org/project/Flask/">https://pypi.org/project/Flask/</a><br>
                    express: <a href="https://www.npmjs.com/package/express">https://www.npmjs.com/package/express</a><br>
                    typescript: <a href="https://www.npmjs.com/package/typescript">https://www.npmjs.com/package/typescript</a><br>
                    ts-node: <a href="https://www.npmjs.com/package/ts-node">https://www.npmjs.com/package/ts-node</a><br>
                    @types/express: <a href="https://www.npmjs.com/package/@types/express">https://www.npmjs.com/package/@types/express</a><br>
                </group>
                <group>
                    npmなら weekly downloads で人気度を確認できる。pypiはダウンロード数を公開していないので、ライブラリのGitHubページのスター数を見るとよい。
                </group>
            </h3-section>
            <h3-section title="@typesとは何か">
                npmにおいて、"@A/B"という名前のパッケージ名は、"ユーザーAが公開しているパッケージB"という意味。<a href="https://www.npmjs.com/~types">@types</a>は<a href="https://github.com/DefinitelyTyped/DefinitelyTyped">Definitely Typed</a>という団体が管理していて、TypeScriptの型定義ファイルをまとめている。
            </h3-section>
        </h2-section>
        <h2-section num="9." title="サンプルプログラム2: Parcel & p5.js">
            <h3-section title="この節について">
                この節はTypeScriptの詳細な使い方を示すために書きました。<br>
                完全な初心者用ではないです。以下のコードは許可なくどう使用しても問題ありません。
            </h3-section>
            <h3-section title="ライブラリのインストール">
                <group>
                    今回は、<a href="https://p5js.org/">p5</a>を使います。<br>
                    <gray>（最初は<a href="https://www.npmjs.com/package/pixi.js">PixiJS</a>を使おうと思ったが、型定義ファイルが不完全だったり難易度が高かったりするのでやめた。ただ、機能はPixiJSの方が上なはず。）</gray><br>
                    ブラウザ上で複数ファイルのJavaScriptファイルを動かすために、Parcelを使います。（WebPackでもよいが、こちらの方が簡単。）
                </group>
                <code-fence lang="bash" :code="sampleCode['9']['installation.sh']"></code-fence>
            </h3-section>
            <h3-section title="Parcelを試す">
                まず、上記のコマンドを打ったのと同じディレクトリで、<code-span>index.html</code-span>を作る。
                <code-fence lang="html" :code="sampleCode['9']['init-index.html']"></code-fence>
                <group>
                    <code-span>main.ts</code-span>も作る。
                </group>
                <code-fence lang="typescript" :code="sampleCode['9']['init-main.ts']"></code-fence>
                <group>
                    あとは、コマンドプロンプト（ターミナル）で<code-span>parcel index.html</code-span>と打てば、ビルドされて同時にサーバーが起動する。<br>
                    <a href="http://localhost:1234">http://localhost:1234</a>にブラウザでアクセスして、<code-span>3 + 2 = 5</code-span>と表示されていることを確認する。（<code-span>parcel index.html --open</code-span>とすれば、自動でブラウザが開く。）
                </group>
                <group>
                    コードを編集して保存すると、ブラウザがリロードされて表示が変わる。<br>
                    <code-span>Ctrl + C</code-span>でサーバーを終了させる。
                </group>
            </h3-section>
            <h3-section title="p5.jsを試す">
                main.tsに以下のように書く<br>
                <gray>p5.jsをglobal mode（デフォルト）で使う場合@types/p5/global.d.tsを使うようにと書いてあったため、p5/globalをインポートしています。</gray>
                <code-fence lang="typescript" :code="sampleCode['9']['p5-main.ts']"/>
                <group>
                    <code-span>parcel index.html</code-span>で実行して <a href="http://localhost:1234/">http://localhost:1234/</a> を見れば、楕円が表示されているはず。
                </group>
            </h3-section>
            <h3-section title="型定義ファイルの不足を補おう">
                <group>
                    <a href="https://p5js.org/reference/">p5.jsのリファレンス</a>のKeyboardの欄を見ると、キー入力の判定には<a href="https://p5js.org/reference/#/p5/keyIsDown">keyIsDown</a>を使うことがわかる。
                    <a href="https://p5js.org/reference/#/p5/keyIsDown">レファレンス</a>ではこのように使っている。
                </group>
                <code-fence lang="typescript" :code="sampleCode['9']['key_is_down.ts']"></code-fence>
                <group>
                    円がキー入力で動くようにする。
                </group>
                main.ts
                <code-fence lang="typescript" :code="sampleCode['9']['type-decl-main.ts']"></code-fence>
                <group>
                    すると、<code-span>RIGHT_ARROW</code-span>に、<code-span>Cannot find name 'RIGHT_ARROW'.</code-span>というエラーがでる（既に修正されていたら、出ない可能性もある）。<br>
                    <code-span>p5</code-span>とその型定義である<code-span>@types/p5</code-span>は別々に作られているため、実際には<code-span>RIGHT_ARROW</code-span>という変数は存在するにも関わらず、型定義に<code-span>RIGHT_ARROW</code-span>が存在しなくてエラーになっている。これはTypeScriptではよくあること。<br>
                    解決方法はいくつかある。
                </group>
                <code-fence lang="typescript" :code="sampleCode['9']['declare.ts']"></code-fence>
            </h3-section>
            <h3-section title="シューティングゲーム">
                <img
                    src="../images/shooting.jpg"
                    alt="シューティングゲームのスクリーンショット">
                <group>
                    シューティングゲームを書きました。参考にしてください。<br>
                    趣味でreadonlyを全プロパティにつけていますが、気にしないでください。<br>
                </group>
                <group>
                    main.ts
                    <code-fence lang="typescript" :code="sampleCode['9']['stg-main.ts']"></code-fence>
                </group>
                <group>
                    p5_key_names.ts
                    <code-fence lang="typescript" :code="sampleCode['9']['stg-p5_name_keys.ts']"></code-fence>
                </group>
                <group>
                    rigid_body.ts
                    <code-fence lang="typescript" :code="sampleCode['9']['stg-rigid_body.ts']"></code-fence>
                </group>
                <group>
                    vec.ts
                    <code-fence lang="typescript" :code="sampleCode['9']['stg-vec.ts']"></code-fence>
                </group>
                <group>
                    index.html
                    <code-fence lang="html" :code="sampleCode['9']['stg-index.html']"></code-fence>
                </group>
            </h3-section>
        </h2-section>
        <h2-section num="10." title="まとめ">
            <a href="https://docs.python.org/ja/3/tutorial/index.html">CPythonの公式ドキュメント</a>
            や<a href="https://uhyohyo.net/javascript/">uhyohyo.net</a>や
            <a href="https://qiita.com/uhyo/items/da21e2b3c10c8a03952f">TypeScriptの型初級(uhyo)</a>
            などを読みましょう。
        </h2-section>
    </h1-section>
</template>

<script lang="ts">
import CodeFence from "./components/CodeFence.vue";
import CodeSpan from "./components/CodeSpan.vue";
import DarkLightButton from "./components/DarkLightButton.vue";
import Gray from "./components/Gray.vue";
import Group from "./components/Group.vue";
import H1Section from "./components/H1Section.vue";
import H2Section from "./components/H2Section.vue";
import H3Section from "./components/H3Section.vue";
import Vue from "vue";
import { sampleCode } from "./sample_code"

type Theme = "light-mode" | "dark-mode";

const loadTheme = (): Theme => {
    try {
        const theme = localStorage.getItem("mode");
        if (theme === "dark-mode") {
            return "dark-mode";
        } else {
            return "light-mode";
        }
    } catch (e) {
        // localStorageへのアクセス権がない場合とか、localStorageが実装されてないブラウザとか
        console.log(e);
        return "light-mode";
    }
};

const saveTheme = (theme: Theme) => {
    try {
        localStorage.setItem("mode", theme);
    } catch (e) {
        console.log(e);
    }
};

const getDisplayedTheme = (): Theme => {
    if (document.body.classList.contains("dark-mode")) {
        return "dark-mode"
    } else {
        return "light-mode"
    }
}
const applyTheme = (theme: Theme) => {
    if (theme === "dark-mode") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
};

export default Vue.extend({
    data() {
        return {
            message: "Hello, world!",
            sampleCode,
        };
    },
    components: {
        CodeFence,
        CodeSpan,
        DarkLightButton,
        Gray,
        Group,
        H1Section,
        H2Section,
        H3Section,
    },
    mounted() {
        const theme = loadTheme()
        applyTheme(theme)
        saveTheme(theme)
        window.addEventListener("storage", (ev) => {
            if (ev.newValue === "light-mode" || ev.newValue === "dark-mode") {
                applyTheme(ev.newValue)
            }
        })
        setTimeout(() => {
            document.body.classList.add("transition-enabled")
        }, 500);
    },
    methods: {
        toggleDarkLight() {
            if (getDisplayedTheme() === 'light-mode') {
                saveTheme("dark-mode")
                applyTheme("dark-mode")
            } else {
                saveTheme("light-mode")
                applyTheme("light-mode")
            }
        }
    }
});
</script>
<style lang="scss">
@import "./consts.scss";

* {
    padding: 0;
    margin: 0;
}

*:focus {
    outline: none;
}

::selection {
    body.dark-mode & {
        background: white;
        color: black;
    }
    body:not(.dark-mode) & {
        background: rgb(128, 128, 128);
        color: white;
    }
}

html {
    font-size: calc(0.8vw + 5px);
}

body {
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 400;
    line-height: 1.8;
    &.transition-enabled {
        transition: ease .5s;
    }
    &.dark-mode {
        background: black;
        color: white;
    }
    &:not(.dark-mode) {
        background: white;
        color: black;
    }
}

table {
    th {
        padding: 0 2em 0 2em;
        body.dark-mode & {
            border-bottom: 2px solid $dark-mode-theme-background;
        }
        body:not(.dark-mode) & {
            border-bottom: 2px solid $theme-background;
        }
    }

    td {
        padding: 0 2em 0 2em;
        body.dark-mode & {
            border-bottom: 1px solid $dark-mode-border-gray;
        }
        body:not(.dark-mode) & {
            border-bottom: 1px solid $border-gray;
        }
    }

    tr:last-child > td {
        body.dark-mode & {
            border-bottom: 2px solid $dark-mode-theme-background;
        }
        body:not(.dark-mode) & {
            border-bottom: 2px solid $theme-background;
        }
    }
}

p {
    padding: 0.8em 0 0.8em 0;
}

strong {
    font-weight: 700;
}

ol {
    margin-left: 2rem;
}

a {
    body.dark-mode & {
        color: $dark-mode-complement;
    }
    body:not(.dark-mode) & {
        color: $complement;
    }
    text-decoration: none;

    &:link {
        body.dark-mode & {
            color: $dark-mode-complement;
        }
        body:not(.dark-mode) & {
            color: $complement;
        }
    }

    &:visited {
        body.dark-mode & {
            color: $dark-mode-complement;
        }
        body:not(.dark-mode) & {
            color: $complement;
        }
    }

    &:hover {
        body.dark-mode & {
            color: $dark-mode-complement-light;
        }
        body:not(.dark-mode) & {
            color: $complement-light;
        }
    }

    &:active {
        body.dark-mode & {
            color: $dark-mode-complement;
        }
        body:not(.dark-mode) & {
            color: $complement;
        }
    }
}

.inline-img {
    display: inline-block;
    opacity: 0.7;
    height: 1em;
    vertical-align: middle;
    margin: 0 0.3em 0 0.3em;
    background: rgba(255, 255, 255, 0.9);
}

.float-left {
    float:left;
    margin-right: 0.6rem;
    width: 20rem;
    background: rgba(255, 255, 255, 0.9);
}

#first-h2 {
    padding-top: 0;
}
</style>