<template>
    <h1-section title="Gitチュートリアル">
        <dark-light-button @click="toggleDarkLight"></dark-light-button>
        <h2-section num="1." title="Gitとは" id="first-h2">
            Gitは<strong>バージョン管理システム（Version Control System; VCS）</strong>の1つで，ディレクトリ内のすべてのファイルの履歴を保存するためのソフトウェア。
        </h2-section>
        <h2-sction num="2." title="使用例">
            <h3-section num="2.1." title="VCSのない世界">
                <h4-section title="1.">
                    たとえばまず<code-span>main.c</code-span>というファイルを作って以下のように書いたとする。
                    <code-fence lang="c" :code="sampleCode['1']['main.c-1']"></code-fence>
                </h4-section>
                <h4-section title="2.">
                    次に，4でしか割らないからゼロ除算のチェックは不要であったことに気づき，my_div関数を消したとする。
                    <code-fence lang="c" :code="sampleCode['1']['main.c-2']"></code-fence>
                </h4-section>
                <h4-section title="3.">
                    <group>
                        その数日後，割る数にargcを使うようにしたいと思い，以下のようにプログラムを修正したとする。
                        <code-fence lang="c" :code="sampleCode['1']['main.c-3']"></code-fence>
                    </group>
                    <group>
                        ここでargcが1だとエラーになるから， <strong>1.</strong> で作った<code-span>my_div</code-span>関数がほしい！でももう上書き保存してしまってもう一度書くしかない！となる。
                    </group>
                </h4-section>
                <h4-section title="4.">
                    <group>
                        次から，このプログラマはプログラムに変更を加えるたびに <strong>日付</strong> （または連番）をつけて保存するようになる...
                        <code-fence lang="shell" :code="sampleCode['1']['directory-manual-versioning']"></code-fence>
                    </group>
                </h4-section>
            </h3-section>
            <h3-section num="2.2." title="VCSのある世界">
                <h4-section title="1.">
                    <group>
                        まずターミナルで `git init` を打ってから作業を開始する
                        <code-fence lang="shell" :code="sampleCode['1']['git-init']"></code-fence>
                    </group>
                </h4-section>
                <h4-section title="2.">
                    <group>
                        main.cを作って <strong>git add</strong> → <strong>git commit</strong><br><code-span>-m "コミットメッセージ"</code-span> はコミットにつけるメッセージの指定で，あとで見返した時に何の変更をしたのかがすぐに分かるようにするためのもの。（必須）
                        <code-fence lang="c" :code="sampleCode['1']['main.c-1']"></code-fence>
                    </group>
                    <group>
                        <code-fence lang="shell" :code="sampleCode['1']['git-commit-1']"></code-fence>
                    </group>
                </h4-section>
                <h4-section title="3.">
                    <group>
                        main.cを編集して <strong>git add</strong> → <strong>git commit</strong>
                        <code-fence lang="c" :code="sampleCode['1']['main.c-2']"></code-fence>
                    </group>
                    <group>
                        <code-fence lang="shell" :code="sampleCode['1']['git-commit-2']"></code-fence>
                    </group>
                </h4-section>
                <h4-section title="4.">
                    <group>
                        ここで，<strong>3.</strong>で上書き保存して消えたmy_div関数をgitの履歴から取り出すために，<strong>2.の時点でのディレクトリの状態を復元する</strong>
                        <code-fence lang="shell" :code="sampleCode['1']['git-log-and-git-checkout']"></code-fence>
                    </group>
                    <group>
                        テキストエディタでmain.cを開くと，my_div関数が存在する。
                        <code-fence lang="c" :code="sampleCode['1']['main.c-1']"></code-fence>
                    </group>
                    <group>
                        復元したmy_div関数をコピーできたら，最新の状態（my_div関数を消した後の状態）に戻る必要がある。そのためには以下のコマンドを打つ。
                        <code-fence lang="shell" :code="sampleCode['1']['checkout-master']"></code-fence>
                    </group>
                </h4-section>
                <h4-section title="補足">
                    <group>
                        単に特定のコミットの時点でのファイルを閲覧するだけなら<code-span>git show</code-span>コマンドを使えば良い。
                        <code-fence lang="shell" :code="sampleCode['1']['git-show']"></code-fence>
                    </group>
                </h4-section>
            </h3-section>
            <h3-section num="2.3." title="なぜファイルに日付を付けて保存していくのでは駄目なのか">
                <ol type="1">
                    <li>VCSを使うと，変更が圧縮されて保存される</li>
                    <li>保存対象からディレクトリ内の一部のファイル（コンパイル後の<strong>実行可能ファイル</strong>など）を自動で除くことができる</li>
                    <li>ファイル数が増えないため，ディレクトリが散乱しない</li>
                    <li>各コミットで何を変更したのかを<strong>コミットメッセージ</strong>で確認できる</li>
                    <li>誰が変更したのか，いつ変更されたのかが分かる</li>
                    <li>複数人での履歴の共有が容易（後述）</li>
                    <li>使ってないと時代遅れ</li>
                </ol>
            </h3-section>
            <h3-section num="2.4." title="履歴はどこに保存されるのか">
                <code-span>git init</code-span>コマンドを打ったディレクトリに生成される <code-span>.git</code-span> というフォルダの中に保存されている。
            </h3-section>
            <h3-section num="2.5." title="以上の内容の動画">
                <video src="../assets/git-tutorial1.mp4" controls style="width: 60%"></video>
            </h3-section>
            <h3-section num="2.6." title="コマンドを覚えられない">
                <group>
                    Gitはコマンドを打って使うものだという硬派な人も多いが，<a href="https://desktop.github.com/">GitHub Desktop</a>, <a href="https://www.gitkraken.com/">GitKraken</a>, <a href="https://www.sourcetreeapp.com/">SourceTree</a>, <a href="https://git-fork.com/">Fork</a> などのグラフィカルなツールを使ったほうが生産性が高い（個人的な意見です）。VSCodeなどのエディタに内蔵されている機能を使うのでも良い。
                </group>
                <group>
                それぞれの比較:
                <ul>
                    <li><a href="https://desktop.github.com/">GitHub Desktop</a>: 使うのが<strong>一番簡単</strong>だが高度な機能は（今のところ）用意されていない</li>
                    <li><a href="https://www.gitkraken.com/">GitKraken</a>: 機能が多いが，初心者には少し難しいかもしれない。</li>
                    <li><a href="https://www.sourcetreeapp.com/">SourceTree</a>: GitKrakenとほとんど同じ。</li>
                    <li><a href="https://git-fork.com/">Fork</a>: 使っていないが，良いらしいと聞く。</li>
                </ul>
                </group>
            </h3-section>
            <h3-section num="2.7." title="他のVCSは？">
                Gitは<strong>2005年</strong>に登場した比較的新しいVCS。以前は<strong>subversion</strong>や<strong>Mercurial</strong>などが使われていたが，今はgitの一人勝ち。
            </h3-section>
            <h3-section num="2.8." title="GitHubとの違いは？">
                <group>
                    gitはバージョン管理システム。GitHubは<strong>Microsoftの，</strong> gitの履歴を複数人で共有するためのクラウドストレージ。
                </group>
                <group>
                    競合としてGitLab（GitLab Inc.）, GitBucket（Atlassian）などがある。
                </group>
            </h3-section>
        </h2-sction>
        <h2-section num="3." title="Gitを使った共同編集">
            <h3-section num="3.1." title="bare git repository">
                <group>
                    複数のgitレポジトリ（<code-span>git init</code-span>を実行したディレクトリ）を同期するには，<strong>bare git repository</strong>が必要。bare git repositoryは<code-span>git init --bare</code-span>で作成できる。
                </group>
                <group>
                    <code-span>git remote add &lt;任意の名前&gt; &lt;urlやファイルパスなど&gt;</code-span>で同期に使うbare git repositoryを追加できる。ここで追加したレポジトリを<strong>リモートレポジトリ</strong>という。<code-span>git remote -v</code-span>で今までに追加したリモートレポジトリのリストを表示できる。なお，リモートではない（<code-span>--bare</code-span>をつけずに初期化した）レポジトリは<strong>ローカルレポジトリ</strong>という。
                </group>
                <group>
                    <code-span>git push &lt;リモートレポジトリに付けた名前&gt; master</code-span>でリモートレポジトリへファイルの変更履歴を送信できる。<code-span>git pull &lt;リモートレポジトリに付けた名前&gt; master</code-span>でリモートレポジトリにあるファイルの変更履歴を受信できる。
                </group>
                <group>
                    以下の動画ではそれを試している。左の段がローカルレポジトリ1，真ん中の段がリモートレポジトリ，右の段がローカルレポジトリ2。動画では，各ローカルレポジトリを異なるユーザーが使用すると想定して，user1, user2と名付けている。<br>
                    まず左の段のローカルレポジトリから右の段のレポジトリへgitの履歴を送り，次に逆方向も試している。<br>
                    <code-span>git push</code-span>を実行したときに中段のVSCode上のファイルに変化があることが分かる。<br>
                    なお，今回はbareレポジトリのディレクトリ名をremote-serverという名前にしたが，実際のプロジェクトでは慣習として.gitで終わる名前をつけることが多い。（例: remote-server.git）
                </group>
                <video src="../assets/git-tutorial2.mp4" controls style="width: 60%"></video>
            </h3-section>
            <h3-section num="3.2." title="Gitホスティングサービス">
                <group>
                    複数人で作業する場合は，<strong>リモートレポジトリ</strong>が各ユーザーからアクセスできる場所（インターネット上）にないといけない。そのために<strong>Gitホスティングサービス</strong>を利用する必要がある。<strong>GitHub</strong>はGitホスティングサービスのうちのひとつ。
                </group>
                <group>
                    たとえばGitHubで新しくレポジトリを作成すると，このように表示される。※レポジトリ名は加工してfoo/fooに変更しました<br>
                    なお，<code-span>git push -u</code-span>の<code-span>-u</code-span>は<a href="https://git-scm.com/book/ja/v2/Git-のブランチ機能-リモートブランチ#r_tracking_branches">上流ブランチ</a>の設定を行うオプションで，<code-span>git pull</code-span>での省略記法を可能にする役割がある。
                    <img src="../assets/git-tutorial3.png" style="width: 60%; display: block">
                </group>
            </h3-section>
            <h3-section num="3.3." title="git clone">
                リモートレポジトリのデータをローカルレポジトリにもってくる作業は，以上のように<code-span>git remote add</code-span>と<code-span>git pull</code-span>でやっても良いが，<code-span>git clone</code-span>を使うと簡単にできる。
                TODO: clnoeの説明の追加
            </h3-section>
        </h2-section>
        <h2-section num="4." title="コンフリクト">
            <h3-section num="4." title="コンフリクトと対処方法">
                <group>
                    複数人で同じファイルに同時に変更を加えると，<strong>コンフリクト</strong>が発生する。（下図を参照。text: xxxはファイルの中身がxxxであることを表す。）<br>
                    <img src="../assets/conflict.svg" style="width: 60%; display: block">
                </group>
                <group>
                    コンフリクトが起きると<code-span>git push</code-span>が実行できなくなる。そうなったら，一度<code-span>git pull</code-span>を行った後にコンフリクトを解消してコミットし，もう一度<code-span>git push</code-span>すればよい。（以下の動画を参照）
                </group>
                <video src="../assets/conflict.mp4" controls style="width: 60%"></video>
            </h3-section>
        </h2-section>
        <h2-section num="5." title="部分的なステージング">
            <h3-section num="5.1." title="git status">
                レポジトリ内のファイルは<strong>Untracked</strong>, <strong>Unmodified</strong>, <strong>Modified</strong>, <strong>Staged</strong>の4つのどれかの状態を持つ。<br>
                各ファイルはデフォルトではUntracked（追跡されていない）。<br>
                <code-span>git add</code-span>はファイルをStagedにする（ステージングする）コマンド。<br>
                <code-span>git commit</code-span>はすべてのStagedであるファイルをコミットするコマンド。<br>
                1つ前のコミットに含まれていたファイルは<code-span>Unmodified</code-span>になる。そこから変更を加えると<code-span>modified</code-span>になる。<br>
                <code-span>git status</code-span>でファイルの状態を見ることができる。
            </h3-section>
            <h3-section num="5.2." title=".gitignore">
                レポジトリ内に<code-span>.gitignore</code-span>という名前のファイルを作れば，ステージング対象にしないファイルを指定できる。
                <code-fence lang="bash" :code="sampleCode['1']['gitignore']"></code-fence>
            </h3-section>
            <h3-section num="5.3." title="特定のファイルをステージングする">
                <code-span>git add &lt;ファイル&gt;</code-span>でファイルを指定してステージング<br>
                <code-span>git add &lt;ディレクトリ&gt;</code-span>でディレクトリ内のすべてのファイルを（再帰的に）ステージング<br>
                つまり，<code-span>git add .</code-span>はいまいるフォルダの中のすべてのファイルをステージングすることを意味する。
            </h3-section>
            <h3-section num="5.4." title="git add --patch">
                <code-span>git add --patch</code-span>を使えばファイルの一部分をステージングできる。
            </h3-section>
        </h2-section>
        <h2-section num="5." title="ブランチ">
            <h3-section num="5.1." title="ブランチを使った開発">
                ブランチを使わないとコンフリクトが頻発する。ブランチを分けると良い。（TODO: git branch, git checkout -b の説明）
            </h3-section>
            <h3-section num="5.2." title="HEADとcheckout">
                HEADが現在いるブランチ（やコミット）を指す。checkoutでHEADを移動させられる。（TODO: デモ）
            </h3-section>
            <h3-section num="5.3." title="fetchとリモート追跡ブランチ">
                <code-span>git fetch</code-span>はリモートのすべてのブランチを<strong>リモート追跡ブランチ</strong>へダウンロードする。リモート追跡ブランチはリモートレポジトリのブランチのコピーで，<code-span>origin/master</code-span>など。（TODO: リモートブランチをgit branchコマンドで確認する）
            </h3-section>
            <h3-section num="5.4." title="pullと追跡ブランチ">
                ブランチに上流ブランチを設定して<strong>追跡ブランチ</strong>にすると，<code-span>git pull</code-span>と打つだけで持ってこれる。<code-span>git branch -vv</code-span>で追跡ブランチを確認できる。<br>
                <code-span>git branch -u origin/master</code-span>のようにして上流ブランチを設定できる。<code-span>git clone</code-span>などのコマンドが自動的に追跡ブランチを設定することがある。
            </h3-section>
            <h3-section num="5.5." title="blob, tree, refs">
                ブランチの実体はrefs。refsはコミットを指す。コミットはtree（スナップショット）を指す。treeはそのスナップショットに含まれるファイル（= blob）の一覧を指す。<br>
                <code-span>git update-ref</code-span>とかで編集できる。
            </h3-section>
            <h3-section num="5.6." title="merge, rebase, cherry-pick">
                mergeはマージコミットを作ってマージする。rebaseはブランチをレベース先にブランチの後ろへ移動させる。cherry-pickは別のブランチの特定のコミットを適用する。
            </h3-section>
            <h3-section num="5.7." title="タグ">
                <code-span>git tag -a -m "メッセージ"</code-span>で作る
            </h3-section>
        </h2-section>
        <h2-section num="6." title="GUIを使ったレポジトリの操作">
            TODO
        </h2-section>
        <h2-section num="7." title="GitHubの使い方">
            TODO
        </h2-section>
        <h2-section num="8." title="その他の機能">
            git stash, submodules, git configとか
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
import H4Section from "./components/H4Section.vue";
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
        H4Section,
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