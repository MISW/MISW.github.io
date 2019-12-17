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
        text(`敵のHP: ${gameState.enemyHp}/100`, 10, 40);
        text(`プレイヤーのHP: ${gameState.playerHp}/5`, 10, 80);
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
        const colorName = `${color.x}, ${color.y}, ${color.z}`;
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
}