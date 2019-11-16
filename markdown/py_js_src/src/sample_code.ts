export const sampleCode = {
    1: {
    },
    2: {
        "py_hello.py": `\
print("Hello, world!")

def f(x):
    return 2 * x + 10

f(5)
`,
        "py_hello_result.py": `\
Hello, world!
20`,
        "js_hello.js": `\
// "Hello, world!" と表示させる
console.log("Hello, world!")

// 関数 f(x) = 2x + 10 を定義
const f = (x) => {
    return 2 * x + 10;
};

// f(5)を計算して表示
console.log(f(5))
`,
        "js_hello_result.js": `\
Hello, world!
20`,
        "browser_hello-index.html": `\
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <script src="./main.js"></script>
</body>
</html>`,
        "browser_hello-main.js": `\
// "Hello, world!" と表示させる
console.log("Hello, world!")

// 関数 f(x) = 2x + 10 を定義
const f = (x) => {
    return 2 * x + 10;
};

// f(5)を計算して表示
console.log(f(5))
`,
        "browser_hello-result.js": `\
Hello, world!
20
`,
    },
    "3": {
        "py_repl_hello.py": `\
>>> "Hello, world!"
'Hello, world!'
>>> def f(x):
...     return 2 * x + 10
...
>>> f(5)
20
`,
        "node_hello.js": `\
> "Hello, world!"
'Hello, world!'
> const f = (x) => {
...     return 2 * x + 10;
... };
undefined
> f(5)
20`,
        "console_hello.js": `\
> "Hello, world!"
"Hello, world!"
> const f = (x) => {
        return 2 * x + 10;
    };
undefined
> f(5)
20`,
    },
    4: {

    },
    5: {
        "function.js": `\
// 古い書き方
// ※ 変数名の巻き上げやthisの束縛を目的として、あるいはわかりやすさから、こちらを選ぶこともある。
function foo() {
    // 関数の本体
}

// 新しい書き方
const foo = () => {
    // 関数の本体
};`,
        "variable.js": `\
// 古い書き方
var x;

// 新しい書き方
// 再代入するならlet、再代入しないならconstを使う。
let x;
const x;`,
        "class.js": `\
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

new Foo().bar();`,
        "block.js": `\
// 古い書き方
// (function(){})() や !function(){}() など。
(function() {
    // スコープ
})();

// 新しい書き方
{
    // スコープ
}
        `,
    },
    6: {
        "typed.py": `\
# 変数
y: str = "name"

# 関数
def f(x: int) -> int:
    return x * 30`,
        "tsc_usage.sh": `\
# 以下のコマンドを変換したいファイルのあるディレクトリ上で実行する
npm init -y  # npmの初期化。package.jsonが生成される。
npm install -D typescript  # TypeScriptのインストール
npx tsc --init  # TypeScriptの初期化。tsconfig.jsonが生成される。`,
        "ts_syntax.ts": `\
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

// 他にも extends/infer, typeof, keyof, ...といろいろあるが、軽く使う分には必要ない。`,
    },
    7: {
    },
    8: {
        "flask_sample.py": `\
from flask import Flask
app = Flask(__name__)

count = 0
@app.route('/')
def index_page():
    global count
    count += 1
    return f"Index Page<br>あなたは{count}番目の訪問者です。"

@app.route('/foo')
def foo_page():
    return "Foo Page"

app.run('0.0.0.0', 3000, False)`,
        "init_express.sh": `\
# 以下のコマンドはカレントディレクトリ下にファイルを生成するため、
# 新しくフォルダを作ってその中へcdで移動してから行うべき。
npm init -y

# TypeScriptに必要な外部ライブラリのインストールと初期化
npm install -g ts-node typescript  # 既にts-nodeをインストールしたならこの行は不要
npm install -D typescript tslint  # ツールをインストールする際には-Dを付けるとよい
tsc --init  # もしtscコマンドが存在しないと言われたら、PATHを通すこと。Windowsなら%APPDATA%\npmに通す。
npx tslint --init  # -gを付けずにインストールしたライブラリをコマンドとして実行するときは、npxを付ける。

# サーバ用の外部ライブラリとその型定義ファイルのインストール
npm install express
npm install -D @types/express`,
        "express_sample.ts": `
import express = require("express");
const app = express();

let count = 0;
app.get("/", (req, res) => {
    count++;
    res.send(\`Index Page<br>あなたは\${count}番目の訪問者です。\`);
});

app.get("/foo", (req, res) => res.send("Foo Page"));

const port = 3000;
app.listen(port, () => console.log("Listening on port " + port));`,
        "edit_tslint.json": `
"rules": {
    "no-console": false
},`,
    },
    9: {
        "installation.sh": `\
npm init -y

# Parcel, TypeScript
npm install -g parcel-bundler  # 既にparcel-bundlerをインストールしたならこの行は不要
npm install -D typescript tslint
npx tslint --init
npx tsc --init

# p5.js
npm install p5
npm install -D @types/p5`,
        "init-index.html": `\
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sample Game</title>
</head>
<body>
    <script src="./main.ts"></script>
</body>
</html>`,
        "init-main.ts": `\
document.body.innerText = \`3 + 2 = \${3 + 2}\`;`,
        "p5-main.ts": `\
import "p5";
import {} from "./node_modules/@types/p5/global.d";

function setup() {
    createCanvas(640, 480);
}

function draw() {
    ellipse(50, 50, 80, 80);
}

// p5はグローバルに定義されたsetupやdraw関数を参照するため、
// 手作業でグローバルオブジェクト（window）に各関数を追加する。
(window as any).setup = setup;
(window as any).draw = draw;
`,
        "key_is_down.ts": `\
if (keyIsDown(RIGHT_ARROW)) {
    // 右矢印キーを押しているときの処理
}
`,
        "type-decl-main.ts": `\
import "p5";
import {} from "./node_modules/@types/p5/global.d";

function setup() {
    createCanvas(640, 480);
}

let x = 50;
function draw() {
    clear();
    if (keyIsDown(RIGHT_ARROW)) {
        x += 4;
    }
    ellipse(x, 50, 80, 80);
}

(window as any).setup = setup;
(window as any).draw = draw;
`,
        "declare.ts": `\
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
`,
        "stg-main.ts": `\
import "p5";
import { Graphics } from "p5";
import {} from "./node_modules/@types/p5/global.d";
import { RigidBody } from "./rigid_body";
import { Vec2D, Vec3D } from "./vec";

const SCREEN_SIZE: { readonly w: number, readonly h: number} = { w: 550, h: 900 };
const PLAYER_SPEED = 8;

interface Light {
    color: Vec3D;
    pos: Vec2D;
}

interface Shot {
    readonly lights: ReadonlyArray<Light>;
    readonly rigidBody: RigidBody;
    readonly vibration: number;
}

const Shot = {
    new: (pos: Vec2D, velocity: Vec2D, colors: ReadonlyArray<Vec3D>, vibration: number): Shot => {
        return {
            lights: colors.map((color) => ({ color, pos: Vec2D.new(0, 0) })),
            rigidBody: RigidBody.new(pos, velocity),
            vibration,
        };
    },
    update: (shot: Shot): Shot => {
        return {
            lights: shot.lights.map((light) => {
                const posMoveFor = Vec2D.new(
                    Math.random() * shot.vibration,
                    Math.random() * shot.vibration);
                const pos = Vec2D.add(
                    Vec2D.times(light.pos, 0.9),
                    Vec2D.times(posMoveFor, 0.1));
                return {
                    color: light.color,
                    pos,
                };
            }),
            rigidBody: RigidBody.update(shot.rigidBody),
            vibration: shot.vibration,
        };
    },
};

interface GameState {
    readonly playerPos: Vec2D;
    readonly enemyPos: Vec2D;
    readonly playerHp: number;
    readonly enemyHp: number;
    readonly playerShots: ReadonlyArray<Shot>;
    readonly enemyShots: ReadonlyArray<Shot>;
    readonly frameCount: number;
    readonly scene: "Playing" | "GameClear" | "GameOver";
}

const movePlayer = (playerPos: Vec2D): Vec2D => {
    if (keyIsDown(RIGHT_ARROW)) {
        playerPos = Vec2D.add(playerPos, Vec2D.new(PLAYER_SPEED, 0));
    }
    if (keyIsDown(LEFT_ARROW)) {
        playerPos = Vec2D.add(playerPos, Vec2D.new(-PLAYER_SPEED, 0));
    }
    if (keyIsDown(DOWN_ARROW)) {
        playerPos = Vec2D.add(playerPos, Vec2D.new(0, PLAYER_SPEED));
    }
    if (keyIsDown(UP_ARROW)) {
        playerPos = Vec2D.add(playerPos, Vec2D.new(0, -PLAYER_SPEED));
    }
    return Vec2D.new(
        Math.min(SCREEN_SIZE.w, Math.max(0, playerPos.x)),
        Math.min(SCREEN_SIZE.h, Math.max(0, playerPos.y)));
};

const moveEnemy = (enemyPos: Vec2D, frameCount: number): Vec2D => {
    return Vec2D.new(
        300 + Math.cos(frameCount / 30) * 100,
        100 + Math.sin(frameCount / 30) * 20);
};

const appendNewPlayerShots = (
        playerShots: ReadonlyArray<Shot>,
        playerPos: Vec2D, frameCount: number): ReadonlyArray<Shot> => {
    const shotsGenerated = new Array<Shot>();
    if (frameCount % 9 === 0) {
        shotsGenerated.push(Shot.new(
            Vec2D.add(playerPos, Vec2D.new(-30, -30)),
            Vec2D.new(0, -20),
            [Vec3D.new(255, 255, 100)], 0));
        shotsGenerated.push(Shot.new(
            Vec2D.add(playerPos, Vec2D.new(30, -30)),
            Vec2D.new(0, -20),
            [Vec3D.new(255, 255, 100)], 0));
    }

    return [...playerShots, ...shotsGenerated];
};

const createEnemyShot = (pos: Vec2D, theta: number, speed: number, color: Vec3D, vibration: number): Shot => {
    const unitVector = Vec2D.new(Math.cos(theta), Math.sin(theta));
    const colors = [color];
    colors.push(
        Vec3D.new(0, 0, 255), Vec3D.new(255, 0, 0), Vec3D.new(0, 255, 0));
    return Shot.new(
        Vec2D.add(pos, Vec2D.times(unitVector, 30)),
        Vec2D.times(unitVector, speed),
        colors, vibration);
};

const appendNewEnemyShots = (
        enemyShots: ReadonlyArray<Shot>,
        enemyPos: Vec2D, frameCount: number): ReadonlyArray<Shot> => {
    const shotsGenerated = new Array<Shot>();

    switch (Math.floor(frameCount / 400) % 4) {
    case 0:
        // 全方向ランダム
        if (frameCount % 25 === 0) {
            for (let i = 0; i < 8; i++) {
                shotsGenerated.push(createEnemyShot(
                    enemyPos, Math.random() * Math.PI * 2, 3, Vec3D.new(255, 255, 255), 40));
            }
        }
        break;
    case 1:
        // n方向固定
        if (frameCount % 25 === 0) {
            const numWays = 20;
            for (let i = 0; i < numWays; i++) {
                shotsGenerated.push(createEnemyShot(
                    enemyPos, i / numWays * Math.PI * 2, 6, Vec3D.new(0, 255, 0), 15));
            }
        }
        break;
    case 2:
        // n方向回転 * m
        if (frameCount % 18 === 0) {
            const numWays = 13;
            for (let i = 0; i < numWays; i++) {
                shotsGenerated.push(createEnemyShot(
                    enemyPos, (i + frameCount / 100) / numWays * Math.PI * 2, 8, Vec3D.new(0, 255, 255), 12));
                shotsGenerated.push(createEnemyShot(
                    enemyPos, (i - frameCount / 100) / numWays * Math.PI * 2, 8, Vec3D.new(0, 0, 255), 12));
            }
        }
        break;
    case 3:
        // 全方向ランダム（高速）
        if (frameCount % 18 === 0) {
            for (let i = 0; i < 20; i++) {
                shotsGenerated.push(createEnemyShot(
                    enemyPos, Math.random() * Math.PI * 2, 15, Vec3D.new(255, 0, 255), 15));
            }
        }
        break;
    }

    return [...enemyShots, ...shotsGenerated];
};

const handleShotsCollisions = (aPos: Vec2D, bShots: ReadonlyArray<Shot>, aHp: number)
        : { newBShots: ReadonlyArray<Shot>, newAHp: number} => {
    const enemyShotsFiltered = bShots.filter((shot) => {
        if (Vec2D.abs(Vec2D.subtract(shot.rigidBody.pos, aPos)) < 20) {
            aHp -= 1;
            return false;
        }
        return true;
    });
    return {
        newAHp: aHp,
        newBShots: enemyShotsFiltered,
    };
};

const isShotInScreen = (shotPos: Vec2D): boolean => {
    return -30 < shotPos.x && shotPos.x < SCREEN_SIZE.w + 30 &&
        -30 < shotPos.y && shotPos.y < SCREEN_SIZE.h + 30;
};

const getGameScene = (
        scene: GameState["scene"], enemyHp: number, playerHp: number): GameState["scene"] => {
    if (scene !== "Playing") {
        return scene;
    }
    if (enemyHp <= 0) {
        return "GameClear";
    } else if (playerHp <= 0) {
        return "GameOver";
    }
    return scene;
};

const update = (gameState: GameState): GameState => {
    // プレイヤー、敵の移動
    const playerPos = movePlayer(gameState.playerPos);
    const enemyPos = moveEnemy(gameState.enemyPos, gameState.frameCount);

    // 弾の生成と移動と削除
    const playerShots: ReadonlyArray<Shot> =
        appendNewPlayerShots(gameState.playerShots, playerPos, gameState.frameCount)
        .map((shot) => Shot.update(shot))
        .filter((shot) => isShotInScreen(shot.rigidBody.pos));
    const enemyShots: ReadonlyArray<Shot> =
        appendNewEnemyShots(gameState.enemyShots, enemyPos, gameState.frameCount)
        .map((shot) => Shot.update(shot))
        .filter((shot) => isShotInScreen(shot.rigidBody.pos));

    // プレイヤーと敵の弾の衝突
    const { newBShots: enemyShotsAfterCollision, newAHp: playerHpAfterCollision} =
        handleShotsCollisions(playerPos, enemyShots, gameState.playerHp);

    // 敵とプレイヤーの弾の衝突
    const { newBShots: playerShotsAfterCollision, newAHp: enemyHpAfterCollision} =
        handleShotsCollisions(enemyPos, playerShots, gameState.enemyHp);

    return {
        enemyHp: enemyHpAfterCollision,
        enemyPos,
        enemyShots: enemyShotsAfterCollision,
        frameCount: gameState.frameCount + 1,
        playerHp: playerHpAfterCollision,
        playerPos,
        playerShots: playerShotsAfterCollision,
        scene: getGameScene(gameState.scene, enemyHpAfterCollision, playerHpAfterCollision),
    };
};

const drawUI = (gameState: GameState): void => {
    switch (gameState.scene) {
    case "GameClear":
        textSize(35);
        textAlign(CENTER);
        text("ゲームクリア！", 0, SCREEN_SIZE.h / 2, SCREEN_SIZE.w);
        break;
    case "GameOver":
        textSize(35);
        textAlign(CENTER);
        text("ゲームオーバー！", 0, SCREEN_SIZE.h / 2, SCREEN_SIZE.w);
        break;
    case "Playing":
        textSize(23);
        textAlign(LEFT);
        text(\`敵のHP: \${gameState.enemyHp}/100\`, 10, 40);
        text(\`プレイヤーのHP: \${gameState.playerHp}/5\`, 10, 80);
        break;
    }

    if (gameState.scene !== "Playing") {
        textSize(23);
        textAlign(RIGHT);
        text("画面をクリックしてリセット", 10, 40, SCREEN_SIZE.w - 10);
    }
};

const drawShots = (shots: ReadonlyArray<Shot>): void => {
    shots.forEach((shot) => {
        shot.lights.forEach((light) => {
            const pos = Vec2D.add(shot.rigidBody.pos, light.pos);
            image(
                getShotLightImage(light.color),
                pos.x - 20, pos.y - 20, 55, 55);
        });
    });
};

const drawGame = (gameState: GameState): void => {
    background(40, 40, 100);

    // 敵
    fill(color(255, 255, 255));
    circle(gameState.enemyPos.x, gameState.enemyPos.y, 40);
    circle(gameState.playerPos.x, gameState.playerPos.y, 40);

    // 弾
    blendMode(ADD);
    drawShots(gameState.playerShots);
    drawShots(gameState.enemyShots);
    blendMode(BLEND);

    // 画面上の表示
    drawUI(gameState);
};

const getShotLightImage = (() => {
    const imgList: { [rgb: string]: Graphics } = {};
    return (color: Vec3D): Graphics => {
        const colorName = \`\${color.x}, \${color.y}, \${color.z}\`;
        if (colorName in imgList) {
            return imgList[colorName];
        }
        const img: any = createGraphics(100, 100);
        img.noStroke();
        for (let i = 50; i > 0; i--) {
            const circleColor = Vec3D.add(
                Vec3D.times(color, (1 - i / 50)),
                Vec3D.times(Vec3D.new(0, 0, 0), i / 50));
            img.fill(circleColor.x, circleColor.y, circleColor.z);
            img.circle(img.width / 2, img.height / 2, i);
        }
        imgList[colorName] = img;
        return img;
    };
})();

{
    (window as any).setup = () => {
        createCanvas(SCREEN_SIZE.w, SCREEN_SIZE.h);
    };

    const initialGameState: GameState = {
        enemyHp: 100,
        enemyPos: Vec2D.new(SCREEN_SIZE.w / 2, 100),
        enemyShots: [],
        frameCount: 0,
        playerHp: 5,
        playerPos: Vec2D.new(SCREEN_SIZE.w / 2, 700),
        playerShots: [],
        scene: "Playing",
    };

    let gameState = initialGameState;

    (window as any).draw = () => {
        if (gameState.scene !== "Playing" && mouseIsPressed) {
            gameState = initialGameState;
        }
        gameState = update(gameState);
        drawGame(gameState);
    };
}`,
        "stg-p5_name_keys.ts": `\
declare const ALT: 18;
declare const BACKSPACE: 8;
declare const CONTROL: 17;
declare const DELETE: 46;
declare const DOWN_ARROW: 40;
declare const ENTER: 13;
declare const ESCAPE: 27;
declare const LEFT_ARROW: 37;
declare const OPTION: 18;
declare const RETURN: 13;
declare const RIGHT_ARROW: 39;
declare const SHIFT: 16;
declare const TAB: 9;
declare const UP_ARROW: 38;`,
        "stg-rigid_body.ts": `\
import { Vec2D } from "./vec";

// 速度と位置を持つ物体
export interface RigidBody {
    pos: Vec2D;
    velocity: Vec2D;
}

export const RigidBody = {
    new: (pos: Vec2D, velocity: Vec2D) => ({ pos, velocity }),

    // 位置に速度を加算
    update: (obj: RigidBody): RigidBody =>
        ({ pos: Vec2D.add(obj.pos, obj.velocity), velocity: obj.velocity }),
};`,
        "stg-vec.ts": `\
// イミュータブルな二次元ベクトル
export interface Vec2D {
    readonly x: number;
    readonly y: number;
}

export const Vec2D = {
    // 加減乗除, 絶対値, 生成
    abs: (a: Vec2D): number =>
        Math.sqrt(a.x * a.x + a.y * a.y),
    add: (a: Vec2D, b: Vec2D): Vec2D => ({
        x: a.x + b.x,
        y: a.y + b.y,
    }),
    divide: (a: Vec2D, x: number): Vec2D => ({
        x: a.x / x,
        y: a.y / x,
    }),
    dot: (a: Vec2D, b: Vec2D): number =>
        a.x * b.x + a.y * b.y,
    new: (x: number, y: number): Vec2D => ({ x, y }),
    subtract: (a: Vec2D, b: Vec2D): Vec2D => ({
        x: a.x - b.x,
        y: a.y - b.y,
    }),
    times: (a: Vec2D, x: number): Vec2D => ({
        x: a.x * x,
        y: a.y * x,
    }),
};

// イミュータブルな三次元ベクトル
export interface Vec3D {
    readonly x: number;
    readonly y: number;
    readonly z: number;
}

export const Vec3D = {
    // 加減乗除, 絶対値, 生成
    abs: (a: Vec3D): number =>
        Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z),
    add: (a: Vec3D, b: Vec3D): Vec3D => ({
        x: a.x + b.x,
        y: a.y + b.y,
        z: a.z + b.z,
    }),
    divide: (a: Vec3D, x: number): Vec3D => ({
        x: a.x / x,
        y: a.y / x,
        z: a.z / x,
    }),
    dot: (a: Vec3D, b: Vec3D): number =>
        a.x * b.x + a.y * b.y,
    new: (x: number, y: number, z: number): Vec3D =>
        ({ x, y, z }),
    subtract: (a: Vec3D, b: Vec3D): Vec3D => ({
        x: a.x - b.x,
        y: a.y - b.y,
        z: a.z - b.z,
    }),
    times: (a: Vec3D, x: number): Vec3D => ({
        x: a.x * x,
        y: a.y * x,
        z: a.z * x,
    }),
};`,
        "stg-index.html": `\
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sample Game</title>
    <style>
* {
    margin: 0;
    padding: 0;
}
html, body {
    height: 100%;
    background: black;
}
.p5Canvas {
    display: block;
    margin: auto;
    width: auto !important;
    height: 100% !important;
}
    </style>
</head>
<body>
    <script src="./main.ts"></script>
</body>
</html>`,
    },
} as const;
