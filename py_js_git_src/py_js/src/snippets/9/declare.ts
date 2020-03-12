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
