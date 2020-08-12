py_js/ と git/ のソースコード。

[mdBookの公式ガイド](https://rust-lang.github.io/mdBook/index.html)

`single-page-theme` はmdBookのデフォルトのテーマを改変したもの。

インストールが必要なもの
- Rust
- mdbook （コマンドラインで `cargo install mdbook`）

変更の確認

```shell
$ cd py_js
$ mdbook serve --open
```

記事の更新

```shell
$ cd py_js
$ mdbook build
$ rm -rf ../../py_js
$ mv book ../../py_js
```
