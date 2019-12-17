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
};
