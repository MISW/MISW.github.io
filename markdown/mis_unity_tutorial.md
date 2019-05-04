# Unityチュートリアル(玉転がし)

### 目次
 - Unityとは
 - Unityインストール
 - 開発
 - 終わりに

### Unityとは
-  世界中で人気のゲーム開発プラットフォーム
2D・3D対応のゲーム開発プラットフォーム。

### Unityインストール
* [Unityインストールガイド(Windows版)](https://misw.github.io/markdown/mis_unity_win.html)
* [Unityインストールガイド(Mac版)](https://misw.github.io/markdown/mis_unity_mac.html)

### 開発

まず、ダウンロードしたUnityを起動しましょう。  

![](https://misw.github.io/markdown/images/Unity_tutorial/1.png)

画面右上の*New*をクリックしましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/2.png)

作成ゲームの種類選択になるので、とりあえず名前を*Roll Ball*として、自分のダウンロードディレクトリの中に作成しましょう。

![](https://misw.github.io/markdown/images/Unity_tutorial/3.png)

様々な基本assetのロードが終わると、このような画面になるのでここから始めて行きましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/4.png)

画面上の*Hierarchy*から*Create => 3D Object => Plane*をクリックしましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/5.png)

そうすると、画面左のようにオブジェクトが出来上がりました。

![](https://misw.github.io/markdown/images/Unity_tutorial/6.png)

次に、Playerを作っていきましょう
上と同じように*Hierarchy => 3D Object => Sphere*をクリックしましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/7.png)

次に名前を変更します  
変更したいオブジェクトを右クリックし*Rename*をクリックし**Player**と入力しましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/8.png)

そうすると、名前が変更されます。

![](https://misw.github.io/markdown/images/Unity_tutorial/9.png)

次に、画面上のオブジェクトを移動させましょう  
オブジェクトは、画面左上に見える矢印キーで動かすことと、画面右の*Transform*から値を入れて動かすことができます

![](https://misw.github.io/markdown/images/Unity_tutorial/10.png)

この球は*Transform*の*Scale*からわかる通り直径が1の球であるので**0.5**だけ上に移動しましょう  
なので*Transform*の*Position*の*Y*の値を**0**から**0.5**に変更しましょう
そうすると、画面左からわかるように、球が平面上に出てきます。

![](https://misw.github.io/markdown/images/Unity_tutorial/11.png)

次に、色を変更するためのマテリアルを作っていきましょう  
画面下の*Project*から*Create => Folder*でフォルダが作成できます。

![](https://misw.github.io/markdown/images/Unity_tutorial/12.png)

名前は**Materials**としておきましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/13.png)

次に**Materials**を右クリックし*Create => Material*でMaterialsフォルダ内にマテリアルを作りましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/14.png)

このマテリアルは下の台座用なので名前は**Background**としておきましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/15.png)

次に、このマテリアルの色を変更していきましょう  
まず**Background**をクリックすると、下の画像のようになるので*Albedo*の右にある色をクリックしましょう  
そうすると画面中央の色選択画面が出てくるので好きな色を選択しましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/16.png)

選択すると先ほど画面右にあった色が変化するので*Color*のタブを消しましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/17.png)

最後に*Project*内の**Background**を左上の画面上の*Plane*にドラックアンドドロップすることで*Plane*の色を変更することができます。

![](https://misw.github.io/markdown/images/Unity_tutorial/18.png)

次に、Scriptを書いていきましょう  
上と同じように*Project*から*Create => Folder*で**Scripts**という名前のフォルダを作成しましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/19.png)

フォルダが作成できたら、フォルダを右クリックして*Create => C# Script*でスクリプトを作りましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/20.png)

今回は**Move**という名前にします

![](https://misw.github.io/markdown/images/Unity_tutorial/21.png)

出来上がったら右上の*Open*をクリックしてスクリプトを編集していきましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/22.png)

こんな感じで書いていきましょう


    public float speed;

    private Rigidbody rb;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }

    void FixedUpdate()
    {
        float moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = Input.GetAxis("Vertical");

        Vector3 movement = new Vector3(moveHorizontal, 0.0f, moveVertical);

        rb.AddForce(movement * speed);
    }



![](https://misw.github.io/markdown/images/Unity_tutorial/23.png)

コードが完成したらスクリプトを対象のオブジェクトにドラックアンドドロップしましょう  
画像のように*Inspector*にスクリプトが追加されていれば大丈夫です

![](https://misw.github.io/markdown/images/Unity_tutorial/24.png)

先ほどのスクリプトで`public float speed;`という感じにpublicな変数を用意したため、Unity上で画面下のように変数speedに好きな値を入れることができるようになっています。今回は10をいれておきましょう。

![](https://misw.github.io/markdown/images/Unity_tutorial/25.png)

スクリプトの追加ができたので、次は*Component*を追加していきましょう。  
では**Player**をクリックし、画面一番下の*Add Component => Physics => Rigidbody*をクリックしていきましょう  
そうすることでオブジェクトに*Rigidbody*属性が追加されます

![](https://misw.github.io/markdown/images/Unity_tutorial/26.png)
![](https://misw.github.io/markdown/images/Unity_tutorial/27.png)

画面中央上の**➡︎**をクリックすることでゲームを開始することができるので試してください。キーボードの矢印キーに対応した動きをしてくれるはずです。

![](https://misw.github.io/markdown/images/Unity_tutorial/28.png)

カメラの設定をしていきましょう  
まず*Hierarchy  => Main Camera => Transform*で*Position Y*の値を**10**にして次に*Rotation X*の値を**45**にしましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/29.png)

スクリプトも書いていきましょう  
こちらも**Scripts**を右クリック*Create => C# Scripts*でスクリプトを作成し

![](https://misw.github.io/markdown/images/Unity_tutorial/30.png)

名前を**CameraControll**にします

![](https://misw.github.io/markdown/images/Unity_tutorial/31.png)

こちらも開いて中身を書いていきます

    public GameObject player;    
    private Vector3 offset;

    void Start()
    {
        offset = transform.position - player.transform.position;
    }

    void LateUpdate()
    {
        transform.position = player.transform.position + offset;
    }


![](https://misw.github.io/markdown/images/Unity_tutorial/32.png)

このスクリプトは*Main Camera*にドラックアンドドロップしましょう  
画像のように*Inspector*の中にスクリプトが追加されていれば大丈夫です

![](https://misw.github.io/markdown/images/Unity_tutorial/33.png)

今回のスクリプトでは`public GameObject player;`の部分で追跡する対象を決める変数を作ったため*CameraControll*内の*Player*に*Hierarchy*内の*Player*をドラックアンドドロップしましょう  
画像のように右下に*Player*が選択されていれば大丈夫です

![](https://misw.github.io/markdown/images/Unity_tutorial/34.png)

ここで一旦動かしてみましょう  
ボールに連動してカメラが動いてくれると思います

![](https://misw.github.io/markdown/images/Unity_tutorial/35.png)

ボールが場外に落ちないように壁を作っていきましょう  
まず*Hierarchy => Create => Create Empty*で*GameObject*を作りましょう  

![](https://misw.github.io/markdown/images/Unity_tutorial/36.png)

名前は**Walls**にします

![](https://misw.github.io/markdown/images/Unity_tutorial/37.png)

中身も作るので*Hierarchy => Create => 3D Object => Cube*で立方体を作ります

![](https://misw.github.io/markdown/images/Unity_tutorial/38.png)

名前は**WestWall**にします

![](https://misw.github.io/markdown/images/Unity_tutorial/39.png)

今作った**WestWall**を**Walls**の下にいれます

![](https://misw.github.io/markdown/images/Unity_tutorial/40.png)

このままでは壁にならないので大きさを変えていきます  
右の*Transform*の値を変更して、壁にします

![](https://misw.github.io/markdown/images/Unity_tutorial/41.png)

壁は4つ必要なので*Duplicate*で増やしていきます

![](https://misw.github.io/markdown/images/Unity_tutorial/42.png)

2つ目は**EastWall**という名前にして値を変更していきます

![](https://misw.github.io/markdown/images/Unity_tutorial/43.png)

3つ目は**SouthWall**という名前にして値を変更していきます

![](https://misw.github.io/markdown/images/Unity_tutorial/44.png)

4つ目は**NorthWall**という名前にして値を変更していきます

![](https://misw.github.io/markdown/images/Unity_tutorial/45.png)

ここで一旦動かしてみましょう  
端まで行ってもボールが落ちないと思います

![](https://misw.github.io/markdown/images/Unity_tutorial/46.png)

当てる対象も作っていきましょう
いつも通り*Hierarchy => Create => Cube*で直方体を作ります  
名前は**Pick Up**としましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/47.png)

今は**Player**が邪魔なので一旦消しておきましょう  
これは*Inspector*の真下のトグルのチェックを外すことで消せます

![](https://misw.github.io/markdown/images/Unity_tutorial/48.png)

形を変えていきます

![](https://misw.github.io/markdown/images/Unity_tutorial/49.png)

回転用のスクリプトも作りましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/50.png)

中身を書いていきましょう  

![](https://misw.github.io/markdown/images/Unity_tutorial/51.png)

スクリプトが完成したら**Pick Up**に付けましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/52.png)

次に*Project*の*Assets*内に*Create => Folder*で*Prefabs*を作ります

![](https://misw.github.io/markdown/images/Unity_tutorial/53.png)

ドラックアンドドロップで*Hierarchy*内の*Pick Up*を*Prefabs*に持っていきましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/54.png)

次に*Hierarchy*内で*Create => Create Empty*で*GameObject*を作成し、名前を**Pick Ups**とします

![](https://misw.github.io/markdown/images/Unity_tutorial/55.png)

先ほどの**Pick Up**を**Pick Ups**の中にいれていきます

![](https://misw.github.io/markdown/images/Unity_tutorial/56.png)

画面をみやすいように*Scene*の右上の投影方向アイコンをいじって画面を真上から見えるようにします

![](https://misw.github.io/markdown/images/Unity_tutorial/57.png)

対象物はたくさん欲しいので**Pick Ups**内の**Pick Up**を*Duplicate*で複製し、適当な位置に配置します

![](https://misw.github.io/markdown/images/Unity_tutorial/58.png)

対象物用のマテリアルを作っていきます  
まず*Materials*内で*Create => Material*でマテリアルを作り名前を**Pick Up**とします

![](https://misw.github.io/markdown/images/Unity_tutorial/59.png)

色を変更します今回は黄色に近い色にします

![](https://misw.github.io/markdown/images/Unity_tutorial/60.png)

ドラックアンドドロップで**Pick Up**にマテリアルをつけます

![](https://misw.github.io/markdown/images/Unity_tutorial/61.png)

その後*Pick Up*の*Inspector*の*Overrides*をクリックし*Apply All*をクリックします

![](https://misw.github.io/markdown/images/Unity_tutorial/62.png)

画像のように、全ての**Pick Up**の色が変化したと思います

![](https://misw.github.io/markdown/images/Unity_tutorial/63.png)

実行してみると、全ての**Pick Up**が動いている状態になると思います

![](https://misw.github.io/markdown/images/Unity_tutorial/64.png)

衝突の際に**Pick Up**が消えるようにしていきます  
まず**Player**を見えるようにしましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/65.png)

次にスクリプトを書き換えていきます  

![](https://misw.github.io/markdown/images/Unity_tutorial/66.png)

このようになります

追加

    void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Pick Up"))
        {
            other.gameObject.SetActive(false);
        }
    }

![](https://misw.github.io/markdown/images/Unity_tutorial/67.png)

次に*Prefabs*の*Pick Up*にタグをつけていきます  
画面上側の*Tag => Add Tag*をクリックします

![](https://misw.github.io/markdown/images/Unity_tutorial/68.png)

その後*Tags*の下の*+ボタン*をクリックし**Pick Up**と入力し*Save*をクリックします

![](https://misw.github.io/markdown/images/Unity_tutorial/69.png)

また*Tag*をクリックし今度は先ほど生成した*Pick Up*を選択します

![](https://misw.github.io/markdown/images/Unity_tutorial/70.png)

画像のように*Tag*の欄が**Pick Up**になったと思います

![](https://misw.github.io/markdown/images/Unity_tutorial/71.png)

最後に*Inspector*内の*Box Collider*の*is Trigger*のトグルにチェックをいれます  
これによって衝突を検知できるようになります

![](https://misw.github.io/markdown/images/Unity_tutorial/72.png)

ここで動かしてみると、衝突の際に**Pick Up**が消えてくれると思います

![](https://misw.github.io/markdown/images/Unity_tutorial/73.png)

最後にテキストを表示していきましょう  
まず*Hierarchy*で*Create => UI => Text*でTextを作成しましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/74.png)

名前は**Count Text**としておきましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/75.png)

右下の*Text*から色を白に変更しましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/76.png)

右上の*Rect Transform*から文字の位置も変更しましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/77.png)

文字の大きさなどを調整すると最終的にこうなります

![](https://misw.github.io/markdown/images/Unity_tutorial/78.png)

同じ要領で**Win Text**も作成します

![](https://misw.github.io/markdown/images/Unity_tutorial/79.png)

位置やTextの中身、文字の大きさを調整するとこのような感じになります

![](https://misw.github.io/markdown/images/Unity_tutorial/80.png)

スクリプトも書き直しましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/81.png)

このようになります

![](https://misw.github.io/markdown/images/Unity_tutorial/82.png)

変更後**Player**の*Move*の欄に*Count Text*と*Win Text*を当てはめる欄があるので当てはめましょう

![](https://misw.github.io/markdown/images/Unity_tutorial/83.png)

このようになります

![](https://misw.github.io/markdown/images/Unity_tutorial/84.png)

実行し、全て消滅するとこのように表示できます

![](https://misw.github.io/markdown/images/Unity_tutorial/85.png)

# 終わりに

今回はUnityチュートリアルの[玉転がし](https://unity3d.com/jp/learn/tutorials/s/roll-ball-tutorial)を行いました  
このようにUnityには豊富なゲーム制作チュートリアルがあるのでぜひ遊んでみてください
