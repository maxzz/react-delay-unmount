import React, { useEffect, useRef } from 'react';
import { RopeMain } from './rope';

export function RopeBody() {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) { return; }

        const parent = ref.current;
        const canvas = document.createElement('canvas');
        parent.appendChild(canvas);

        const rope = new RopeMain(canvas);
        // const resize = rope.resize.bind(rope);

        // parent.addEventListener('resize')
        rope.render();




        return () => {
            if (parent) {
                // parent.
                canvas.parentElement?.removeChild(canvas);
            }
        };
    }, [ref]);

    return (
        <div ref={ref} className="bg-red-500/10">
        </div>
    );
}
