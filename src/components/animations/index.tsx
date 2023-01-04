import React, { useRef } from "react";
export * from './OldMoveAnimations';

export type AnimationData = {
    interval: number;
    frames: string[];
};

type AnimationName = 'bouncingBall' | 'aesthetic';

export const animationsArray: Record<AnimationName, AnimationData> = {
    bouncingBall: {
        interval: 180,
        frames: [
            "( ●    )",
            "(  ●   )",
            "(   ●  )",
            "(    ● )",
            "(     ●)",
            "(    ● )",
            "(   ●  )",
            "(  ●   )",
            "( ●    )",
            "(●     )",
        ]
    },
    aesthetic: {
        "interval": 80,
        "frames": [
            "▰▱▱▱▱▱▱",
            "▰▰▱▱▱▱▱",
            "▰▰▰▱▱▱▱",
            "▰▰▰▰▱▱▱",
            "▰▰▰▰▰▱▱",
            "▰▰▰▰▰▰▱",
            "▰▰▰▰▰▰▰",
            "▰▱▱▱▱▱▱"
        ]
    }
};

export function MultipleBar({ index, animationName }: { index: number; animationName: AnimationName }) {
    const animChars = animationsArray[animationName].frames;
    const a = animChars[index % animChars.length];

    return (
        <div className="flex items-center justify-center whitespace-pre">
            {a}
        </div>
    );
}
