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
