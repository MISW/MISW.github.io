$ # コミットのリストを表示。HEADが現在のディレクトリの状態，
$ # bd23c17と7d7d553はそれぞれのコミットのID
$ git log --oneline
bd23c17 (HEAD -> master) div関数を削除
7d7d553 initial commit

$ # IDが7d7d553のコミットの状態へディレクトリを復元する
$ git checkout 7d7d553
Note: checking out '7d7d553'.
...
