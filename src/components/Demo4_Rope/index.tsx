import React, { useEffect, useRef } from 'react';
import { RopeMain } from './rope';

export function RopeBody() {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) { return; }

        const canvas = document.createElement('canvas');
        const rope = new RopeMain(canvas);

        ref.current.appendChild(canvas);

        return () => {
            canvas.parentElement?.removeChild(canvas);
        }
    }, [ref]);

    return (
        <div ref={ref} className="bg-red-500">
        </div>
    );
}
