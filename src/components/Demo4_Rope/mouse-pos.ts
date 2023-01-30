export function getCanvasScale(canvas: HTMLCanvasElement): readonly [number, number, DOMRect] {
    const rect = canvas.getBoundingClientRect(); // abs. size of canvas element; https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas https://jsfiddle.net/mattdeeds/yqLvza57/37

    const scaleX = canvas.width / rect.width;    // relationship canvas bitmap vs. canvas element for X
    const scaleY = canvas.height / rect.height;  // relationship canvas bitmap vs. canvas element for Y

    return [scaleX, scaleY, rect] as const;
}

export function getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent): readonly [number, number] {
    const [scaleX, scaleY, rect] = getCanvasScale(canvas);

    return [(evt.clientX - rect.left) * scaleX, (evt.clientY - rect.top) * scaleY] as const;
}

export function getCanvasCoords(ctx: CanvasRenderingContext2D, [screenX, screenY]: [number, number]): readonly [number, number] {
    let matrix = ctx.getTransform();
    var imatrix = matrix.invertSelf();
    let x = screenX * imatrix.a + screenY * imatrix.c + imatrix.e;
    let y = screenX * imatrix.b + screenY * imatrix.d + imatrix.f;
    return [x, y] as const;
}
