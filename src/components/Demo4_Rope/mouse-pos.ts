export function getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent): readonly [number, number] {
    const rect = canvas.getBoundingClientRect(); // abs. size of canvas element; https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas

    const scaleX = canvas.width / rect.width;    // relationship canvas bitmap vs. canvas element for X
    const scaleY = canvas.height / rect.height;  // relationship canvas bitmap vs. canvas element for Y

    return [(evt.clientX - rect.left) * scaleX, (evt.clientY - rect.top) * scaleY] as const;
}

export function getCanvasCoords(ctx: CanvasRenderingContext2D, screenX: number, screenY: number) {
    let matrix = ctx.getTransform();
    var imatrix = matrix.invertSelf();
    let x = screenX * imatrix.a + screenY * imatrix.c + imatrix.e;
    let y = screenX * imatrix.b + screenY * imatrix.d + imatrix.f;
    return [x, y];
}
