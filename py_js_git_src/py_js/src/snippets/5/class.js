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
