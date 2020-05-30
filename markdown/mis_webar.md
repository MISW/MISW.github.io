# WebARコンテンツを作ってみよう
## 目次
- [はじめに](#はじめに)
- [使用するサイト一覧](#使用するサイト一覧)
- [A-frame](#A-frame)
- [AR.js](#AR.js)
- [応用編](#応用編)

## はじめに
拡張現実（Augmented Reality）は、現実世界にコンテンツを重ね合わせて表示することを可能にする技術です。携帯電話のようなハンドル型、ヘッドセット、デスクトップディスプレイなど、いくつかのタイプのデバイスに提供することができます。(公式ドキュメントより引用)

AmazonのARビューや[W大学のAR卒業式](https://prod-lessar-contents-converted.s3.ap-northeast-1.amazonaws.com/partner_4d158a33-5754-439c-8fa9-1edd6a53fcad/spaceArContent_e3676acc-7216-4311-b61e-e35f94412372/contents_converted/content.glb)など、近年話題になっているARコンテンツを実際に作ってみましょう。
アプリをインストールしなくてもブラウザ上で動くので、気軽に他の人に試してもらうことができ、AR名刺などにも応用ができます。

## 使用するサイト一覧
- [A-frame](https://aframe.io/)
- [CodePen](https://codepen.io/)
- [AR.js](https://ar-js-org.github.io/AR.js-Docs/)
- [Glitch](https://glitch.com/)
- [QRCode Monkey](https://www.qrcode-monkey.com/)
- [GitHub](https://github.com/)

## A-frame
A-frameはHTMLタグを用いて、箱や円柱などのオブジェクトをWeb上で表示できるライブラリです。
まずは、箱を表示させてみましょう。
[CodePen](https://codepen.io/pen)にアクセスして、HTMLの部分に以下のコードを貼り付けます。

```html:index.html
<html>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <body>
        <a-scene>
            <a-box position="-1 1 -2"  color=blue></a-box>
        </a-scene>
    </body>
</html>
```

すると、このような画面になります。
`W` `A` `S` `D`で移動、右クリックで視点移動ができます。
![](https://i.imgur.com/NPuAO55.png)

まず、A-frameのライブラリを読み込みます。
次に、`<body>`の中の`<a-scene>`で空のシーンを作成し、その中の`<a-box>`で箱を生成します。
`<a-box>`の属性で位置と色を指定しています。
箱以外にも、円柱や球などのオブジェクトがあったり、位置や色以外にも、様々な属性を設定できます。
気になる人は[A-frameの公式サイト](https://aframe.io)で調べて見てください。

次に、インスペクター上で操作してみましょう。
先程のシーンを選択した状態で`Ctrl`+`Alt`+`i`を押すとこのようなインスペクター画面が開きます。
![](https://i.imgur.com/cj4lvLo.png)

`ｈ`キーを押すとこのようなヘルプ画面が出ます。
![](https://i.imgur.com/dmvsLOE.png)

インスペクター上で球を生成してみましょう。
左上の＋ボタンをクリックして、空のオブジェクトを生成します。
![](https://i.imgur.com/YKyy5tf.png)


次に、Add componentの部分にgeometryと入力します。
![](https://i.imgur.com/CEJdhOf.png)

今回は、球を作成したいので、primitiveの部分をboxからsphereに変更します。
![](https://i.imgur.com/tS1UmNd.png)

このままでは、球が見えにくいので移動させます。
動かす前に、componentにpositionを追加します。
![](https://i.imgur.com/0mtiDEh.png)

マウスの左クリックで視点移動し、球を選択した状態で`w`キーを押すと、矢印が表示されます。
この矢印を使って球を箱の隣まで移動させます。
![](https://i.imgur.com/5fqFElY.png)

次に、色を設定します。
先程と同様に、componentにmaterialと入力し、materialを追加します。
![](https://i.imgur.com/4gLukSE.png)

materialのcolorのところから色を変更できます。
![](https://i.imgur.com/j2ypQMv.png)

次に、ここまでの変更点をhtmlに書き込みます。
右上のコピーボタンを押して、htmlをコピーします。
![](https://i.imgur.com/Fkt85zU.png)

コピーしたものを左のHTMLの中の`<a-scene>`の中に貼り付けます。
![](https://i.imgur.com/MRhCJHT.png)

すると、このように球も表示されます。
![](https://i.imgur.com/vB602r7.png)

A-frameは理解出来ましたか？
今度はこれをAR上で表示させてみましょう。

## AR.js
まずは、以下のコードをコピーします

```html:index.html
<html>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
    <body>
        <a-scene embedded arjs>
            <a-marker preset="hiro">
                <a-box position="-1 1 -2"  color=blue></a-box>
                <a-entity geometry="primitive: sphere" position="0.63602 0.69981 -2.36964" material="color: #ff0000"></a-entity>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    </body>
</html>
```

先程までのプログラムにAR.jsライブラリ、`<a-scene>`の中にarjsと`<a-marker>`とcameraが追加されています。

次に、[Glitch](https://glitch.com/)にアクセスします。
右上のNew Projectからhello-webpageを選択し、プロジェクトを作成します。
![](https://i.imgur.com/lpMGskP.png)

左からindex.htmlを選択し、中身を先ほどコピーしたものに変えます。
![](https://i.imgur.com/vmKKQeS.png)

左上のShareからLive Appを選択してURLをコピーします。(このURLは人によって違います)
![](https://i.imgur.com/DsD7SWT.png)


[QRCode Monkey](https://www.qrcode-monkey.com/)にアクセスして
Your URLの部分に先ほどコピーしたものを貼り付け、Create QR Codeをクリックします。
![](https://i.imgur.com/DusTdUa.png)

スマホでQRコードを読み込み、以下のマーカーにかざします。
![](https://i.imgur.com/E50cBhW.png)

以下のようになれば完成！
![](https://i.imgur.com/5R0KOax.jpg)

## 応用編
ここまで、A-frameとAR.jsの基本的な使い方について学んできました。
ここからは、発展的な内容をやっていきます。

### 自作マーカーを使ってみる
AR.jsではプリセットのマーカーだけでなく、自作のマーカーを使うこともできます。
まずは、[AR.js Marker Training](https://ar-js-org.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)にアクセスしてマーカーをにしたい画像をアップロードして、マーカーと画像ダウンロードします。QRコードをマーカーとして、使う場合はQRCode MonkeyでBody Shapeを変えてください。
![](https://i.imgur.com/5eGuf6t.png)

マーカーがダウンロード出来たら、Glitchのプロジェクトの左上のNew Fileの中のUpload Fileから先ほどダウンロードした拡張子が.pattのファイルをアップロードしてください。
![](https://i.imgur.com/UIixek8.png)

アップロードが完了したら、assetsの中にある先ほどアップロードしたファイルを選択して、リンクをコピーします。
![](https://i.imgur.com/3Aacavy.png)

コピーが出来たら、`<a-maker>`の属性を以下のように書き換えます。画像のURLの部分は先ほどコピーしたものを貼り付けてください。
```html:index.html
<html>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
    <body>
        <a-scene embedded arjs>
        <a-marker type="pattern" url="画像のURL">
            <a-box position="-1 1 -2"  color=blue></a-box>
            <a-entity geometry="primitive: sphere" position="0.63602 0.69981 -2.36964" material="color: #ff0000"></a-entity>
        </a-marker>
        <a-entity camera></a-entity>
        </a-scene>
    </body>
</html>
```
これで、自作マーカーでも認識できるようになります。
また、読み込みに時間はかかりますが、新しいバージョンのAR.jsから、画像認識に対応しています。気になる人は、[公式ドキュメント](https://ar-js-org.github.io/AR.js-Docs/image-tracking/)を参照してください。

### GitHub Pagesの利用
Glitchはログインしないと、５日でデータが消えてしまいます。
消えないように、このサイトにも使われているGitHub Pagesを使ってみましょう。
[GitHub](https://github.com/)にログインして、New repositoryをクリック
Repository nameに好きな名前を付け、Create Repositoryをクリック
![](https://i.imgur.com/dYYN9NZ.png)

creating new fileをクリック
![](https://i.imgur.com/riLbFLW.png)


file nameにindex.htmlと入力
Edit new fileに先ほどコピーしたコードを貼り付けて
Commit new fileをクリック
![](https://i.imgur.com/7KBVrYt.png)


Settingsをクリック
下にスクロールしてGitHub PagesのSourceを
Noneからmaster branchに変更
![](https://i.imgur.com/dYDtYlg.png)

https[]()://ユーザー名.github.io/レポジトリ名前からアクセスできます。
[Progate](https://prog-8.com/docs/github-pages)にも同様のことが書いてあるのでわからなかったそちらも参照してください。


### 自分で作った3Dモデルを使ってみよう
A-frameは、glTFやobj形式の3Dモデルを読み込むことができます。
glTFファイルはblender2.8などの3DCGソフトで出力することができます。
今回は、blenderで作ったこのモデルを使います。
![](https://i.imgur.com/3yv9Xf5.png)

先ほど同様に、GitHubのリポジトリを作成して、index.htmlに以下のコードを貼り付けます。
idは何でも大丈夫です。3Dモデルのファイル名は、後でアップロードするファイルの名前を入れてください。
A-frameでは、他のファイルを使う場合は、`<a-asset>`でアセット化してから、読み込みます。
```html:index.html
<html>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
    <body>
        <a-scene embedded arjs>
            <a-assets>
                <a-asset-item id="suzanne" src="3Dモデルのファイル名"></a-asset-item>
            </a-assets>
            <a-marker preset="hiro">
                 <a-gltf-model src="#suzanne"></a-gltf-model>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    </body>
</html>
```

次に、GitHubにファイルをアップロードします。リポジトリ上のUpload filesからファイルのアップロードができます。
![](https://i.imgur.com/zboicii.png)

アップロード出来たらCommit changesをクリックして、保存します。
![](https://i.imgur.com/7m9v3i4.png)

アップロードが完了したら先ほど同様にして、スマホから見ると以下のようになります。
![](https://i.imgur.com/pbevHmh.png)