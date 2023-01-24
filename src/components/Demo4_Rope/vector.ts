export class Vector {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x || 0;
        this.y = y || 0;
    }
    static add(v1: Vector, v2: Vector) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    static sub(v1: Vector, v2: Vector) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
    add(x: number, y: number) {
        if (arguments.length === 1) {
            this.x += x.x;
            this.y += x.y;
        } else if (arguments.length === 2) {
            this.x += x;
            this.y += y;
        }
        return this;
    }
    sub({x, y}: {x: number, y: number}): void;
    sub(x: number, y: number): void;
    sub(x: number | {x: number, y: number}, y?: number) {
        if (arguments.length === 1) {
            this.x -= (x as {x: number, y: number}).x;
            this.y -= (x as {x: number, y: number}).y;
        } else if (arguments.length === 2) {
            this.x -= x as number;
            this.y -= y as number;
        }
        return this;
    }
    mult(v: Vector) {
        if (typeof v === 'number') {
            this.x *= v;
            this.y *= v;
        } else {
            this.x *= v.x;
            this.y *= v.y;
        }
        return this;
    }
    setXY(x: number, y: number) {
        this.x = x;
        this.y = y;
        return this;
    }
    dist(v: Vector) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
