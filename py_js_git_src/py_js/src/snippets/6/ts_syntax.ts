// 変数はつねに1つの型を持つ。変数の型は最初に代入された値の型によって決まる。
let x = 20  // xはnumber型になる
x = "foo"   // JavaScriptではこれは許されるが、TypeScriptではコンパイルエラー。

// 明示的に変数の型を指定できる
let y: number = 20  // 変数の型を指定して、同時に初期値を代入
let z: number  // 変数を型を指定して宣言

// 関数の引数と返り値の型を以下のように指定できる
const f = (x: number, y: string): string => {  // numberとstringを受け取ってstringを返す
    return x + y;
}

console.log(f(20, "foo").length)  // fの使用例

// 型には他に以下のようなものが存在する
let a: boolean = true
let b: null = null
let c: { x: number, y: number } = { x: 20, y: 40 }
let d: (x: number) => void = (x: number) => { console.log(x) }  // numberを受け取ってundefinedを返す関数型
let e: number[] = []  // 数値の配列

// 型指定で毎回 { x: number, y: number } みたいに書くのは長くてつらいため、
// interface文で型に名前を付けられる
interface I {
    x: number;
    y: number;
}
let d: I = { x: 20, y: 40 }

// any型の変数はTypeScriptの型チェックから無視され、どんな操作も可能になる。
// asでキャストできる。anyは危険なため、本当に必要な時にしか使うべきでない。
console.log(undefined.foo)           // これはコンパイルエラーになる
console.log((undefined as any).foo)  // これはコンパイルはできるが実行時に TypeError: Cannot read property 'foo' of undefined

// ファイル外（scriptタグの埋め込みなど）で定義された変数は、TypeScriptでは
// 使おうとしても存在しないといわれてコンパイルエラーになるため、declare文が必要。
// declare let, declare const, declare class, ... を使える。
// あるいは、型定義ファイルというdeclare文を使ったファイルを別途用意する。
declare const someLibrary: any  // 変数 someLibrary が any型でグローバルに存在すると宣言
console.log(someLibrary)  // 変数 someLibrary を使えるようになった

// CommonJSの require() を使う場合、const x = require("foo") のように書くとTypeScript
// から認識されない。CommonJS用の文法 import x = require("foo") を使う必要がある。
import fs = require("fs")

// ES6の import はJavaScriptと同じ。
import fs from "fs"

// x | y で型xまたは型yである型を定義できる。
// そのような型の変数を値を使う場合、先にif文で型をチェックしておく必要がある。
let x: number | null = null
console.log(x + 20)  // コンパイルエラー: Object is possibly 'null'.
if (typeof x === "number") {
    // このif文内ではxの型が一時的に number | null から number に変わる
    console.log(x + 20)  // 問題なし
}

// 他にも extends/infer, typeof, keyof, ...といろいろあるが、軽く使う分には必要ない。
