py_js/ と git/ のソースコード。

[mdBookの公式ガイド](https://rust-lang.github.io/mdBook/index.html)

`single-page-theme` はmdBookのデフォルトのテーマを改変したもの。

実行方法

```shell
$ cargo install mdbook
$ mdbook serve --open
```

記事の更新

```shell
$ cd py_js
$ mdbook build
$ rm -rf ../../py_js
$ mv book ../../py_js
```
