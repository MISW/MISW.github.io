export const sampleCode = {
    1: {
        "main.c-1": `\
#include <stdio.h>
#include <stdlib.h>

// ゼロ除算をチェックして割り算する関数
int my_div(int a, int b) {
    if (b == 0) {
        fprintf(stderr, "Zero division error\\n");
        exit(1);
    }
    return a / b;
}

int main(void) {
    // 20 / 4 の結果を表示する
    printf("%d\\n", my_div(20, 4));
    return 0;
}
`,
    "main.c-2": `\
#include <stdio.h>

int main(void) {
    // 20 / 4 の結果を表示する
    printf("%d\\n", 20 / 4);
    return 0;
}`,
    "main.c-3": `\
#include <stdio.h>

int main(int argc) {
    // 20 / (argc - 1) の結果を表示する（argcはプログラムに渡された引数の個数）
    printf("%d\\n", 20 / (argc - 1));
    return 0;
}`,
    "directory-manual-versioning": `
MyProject/
    main.c             # 最新バージョン
    main_20190405_1.c  # 2019年4月5日(1)
    main_20190405_2.c  # 2019年4月5日(2)
    main_20190405_3.c  # 2019年4月5日(3)
    main_20190406.c    # 2019年4月6日
    main_20190408.c
    main_20190520_1.c
    main_20190520_2.c
    ...
`,
    "git-init": `\
$ git init
Initialized empty Git repository in /home/foo/bar/.git/`,
    "git-commit-1": `\
$ git add .
$ git commit -m "initial commit"
[master (root-commit) 7d7d553] initial commit
 1 files changed, 18 insertions(+)
 create mode 100644 main.c`,
    "git-commit-2": `\
$ git add .
$ git commit -m "div関数を削除"
[master bd23c17] div関数を削除
    1 files changed, 1 insertion(+), 12 deletions(-)`,
    "git-log-and-git-checkout": `\
$ # コミットのリストを表示。HEADが現在のディレクトリの状態，
$ # bd23c17と7d7d553はそれぞれのコミットのID
$ git log --oneline
bd23c17 (HEAD -> master) div関数を削除
7d7d553 initial commit

$ # IDが7d7d553のコミットの状態へディレクトリを復元する
$ git checkout 7d7d553
Note: checking out '7d7d553'.
...`,
    "checkout-master": `\
$ # 最新の状態へ戻る
$ git checkout master`,
    },
} as const;
