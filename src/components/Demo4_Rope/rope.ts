import { Vector } from './vector';

class Mouse {
    pos: Vector;
    radius: number;

    constructor(canvas: HTMLCanvasElement) {
        this.pos = new Vector(-1000, -1000);
        this.radius = 40;

        canvas.onmousemove = (e) => {
            this.pos.setXY(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)
            console.log('e', this.pos);
        };
        // canvas.onmousemove = (e) => this.pos.setXY(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        canvas.ontouchmove = (e) =>
            this.pos.setXY(
                e.touches[0].clientX - canvas.offsetLeft,
                e.touches[0].clientY - canvas.offsetTop
            );
        canvas.ontouchcancel = () => this.pos.setXY(-1000, -1000);
        canvas.ontouchend = () => this.pos.setXY(-1000, -1000);
    }
}

class Dot {
    pos: Vector;
    oldPos: Vector;
    friction: number;
    gravity: Vector;
    mass: number;
    pinned: boolean;
    lightImg: HTMLImageElement;
    lightSize: number;

    constructor(x: number, y: number) {
        this.pos = new Vector(x, y);
        this.oldPos = new Vector(x, y);

        this.friction = 0.97;
        this.gravity = new Vector(0, 0.6);
        this.mass = 1;

        this.pinned = false;

        this.lightImg = document.querySelector('#light-img')!;
        this.lightSize = 15;
    }

    update(mouse: Mouse) {
        if (this.pinned) { return; }

        let vel = Vector.sub(this.pos, this.oldPos);

        this.oldPos.setXY(this.pos.x, this.pos.y);

        vel.mult(this.friction);
        vel.add(this.gravity);

        let { x: dx, y: dy } = Vector.sub(mouse.pos, this.pos);
        const dist = Math.sqrt(dx * dx + dy * dy);

        const direction = new Vector(dx / dist, dy / dist);

        const force = Math.max((mouse.radius - dist) / mouse.radius, 0);

        if (force > 0.6) {
            this.pos.setXY(mouse.pos.x, mouse.pos.y);
        } else {
            this.pos.add(vel);
            this.pos.add(direction.mult(force));
        }
    }

    drawLight(ctx: CanvasRenderingContext2D) {
        this.lightImg && ctx.drawImage(this.lightImg, this.pos.x - this.lightSize / 2, this.pos.y - this.lightSize / 2, this.lightSize, this.lightSize);
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#aaa';
        ctx.fillRect(this.pos.x - this.mass, this.pos.y - this.mass, this.mass * 2, this.mass * 2);
    }
}

class Stick {
    startPoint: Dot;
    endPoint: Dot;
    length: number;
    tension: number;

    constructor(p1: Dot, p2: Dot) {
        this.startPoint = p1;
        this.endPoint = p2;

        this.length = this.startPoint.pos.dist(this.endPoint.pos);
        this.tension = 0.3;
    }

    update() {
        const dx = this.endPoint.pos.x - this.startPoint.pos.x;
        const dy = this.endPoint.pos.y - this.startPoint.pos.y;

        const dist = Math.sqrt(dx * dx + dy * dy);
        const diff = (dist - this.length) / dist;

        const offsetX = diff * dx * this.tension;
        const offsetY = diff * dy * this.tension;

        const m = this.startPoint.mass + this.endPoint.mass;
        const m1 = this.endPoint.mass / m;
        const m2 = this.startPoint.mass / m;

        if (!this.startPoint.pinned) {
            this.startPoint.pos.x += offsetX * m1;
            this.startPoint.pos.y += offsetY * m1;
        }
        if (!this.endPoint.pinned) {
            this.endPoint.pos.x -= offsetX * m2;
            this.endPoint.pos.y -= offsetY * m2;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.strokeStyle = '#999';
        ctx.moveTo(this.startPoint.pos.x, this.startPoint.pos.y);
        ctx.lineTo(this.endPoint.pos.x, this.endPoint.pos.y);
        ctx.stroke();
        ctx.closePath();
    }
}

type Config = {
    x: number;
    y: number;
    segments?: number;
    gap?: number;
    color?: string;
};

class Rope {
    x: number;
    y: number;
    segments: number;
    gap: number;
    color: string;

    dots: Dot[];
    sticks: Stick[];
    iterations: number;

    constructor(config: Config) {
        this.x = config.x;
        this.y = config.y;
        this.segments = config.segments || 10;
        this.gap = config.gap || 15;
        this.color = config.color || 'gray';

        this.dots = [];
        this.sticks = [];

        this.iterations = 10;

        this.create();
    }

    pin(index: number) {
        this.dots[index].pinned = true;
    }

    create() {
        for (let i = 0; i < this.segments; i++) {
            this.dots.push(new Dot(this.x, this.y + i * this.gap));
        }

        for (let i = 0; i < this.segments - 1; i++) {
            this.sticks.push(new Stick(this.dots[i], this.dots[i + 1]));
        }
    }

    update(mouse: Mouse) {
        this.dots.forEach((dot) => {
            dot.update(mouse);
        });

        for (let i = 0; i < this.iterations; i++) {
            this.sticks.forEach((stick) => {
                stick.update();
            });
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.dots.forEach((dot) => {
            dot.draw(ctx);
        });

        this.sticks.forEach((stick) => {
            stick.draw(ctx);
        });

        this.dots[this.dots.length - 1].drawLight(ctx);
    }
}

export class RopeMain {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    mouse: Mouse;
    ropes: Rope[] = [];

    static width = 0;
    static height = 0;

    static dpr = window.devicePixelRatio > 1 ? 2 : 1;
    static interval = 1000 / 60;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d')!;

        this.mouse = new Mouse(this.canvas);

        this.resize();
        //window.addEventListener('resize', this.resize.bind(this));

        this.createRopes();
    }

    private createRopes() {
        this.ropes = [];
        const TOTAL = RopeMain.width * 0.06;
        for (let i = 0; i < TOTAL + 1; i++) {
            const x = randomNumBetween(RopeMain.width * 0.3, RopeMain.width * 0.7);
            const y = 0;
            const gap = randomNumBetween(RopeMain.height * 0.05, RopeMain.height * 0.08);
            const segments = 10;
            const rope = new Rope({ x, y, gap, segments });
            rope.pin(0);
            this.ropes.push(rope);
        }
    }

    resize() {
        RopeMain.width = this.canvas.parentElement?.clientWidth || 0;
        RopeMain.height = this.canvas.parentElement?.clientHeight || 0;

        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';

        this.canvas.width = RopeMain.width * RopeMain.dpr;
        this.canvas.height = RopeMain.height * RopeMain.dpr;

        this.ctx.scale(RopeMain.dpr, RopeMain.dpr);
        this.createRopes();
    }

    render() {
        let now, delta;
        let then = Date.now();

        const frame = () => {
            requestAnimationFrame(frame);

            now = Date.now();
            delta = now - then;
            if (delta < RopeMain.interval) { return; }
            then = now - (delta % RopeMain.interval);

            this.ctx.clearRect(0, 0, RopeMain.width, RopeMain.height);
            this.ropes.forEach((rope) => {
                rope.update(this.mouse);
                rope.draw(this.ctx);
            });
        };
        requestAnimationFrame(frame);
    }
}

function randomNumBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

// window.addEventListener('load', () => {
//     const canvas = document.querySelector('canvas') || ((() => { throw new Error('no canvas'); })());
//     const app = new RopeMain(canvas);
//     window.addEventListener('resize', app.resize.bind(app));
//     app.render();
// });
