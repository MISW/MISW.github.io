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
