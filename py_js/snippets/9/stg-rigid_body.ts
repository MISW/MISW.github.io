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
};
