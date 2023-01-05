import React, { useRef } from "react";
export * from './OldMoveAnimations';

export type AnimationData = {
    interval: number;
    frames: string[];
};

type AnimationName = 'bouncingBall' | 'aesthetic' | 'star';

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
    },
    star: {
		"interval": 70,
		"frames": [
			"✶",
			"✸",
			"✹",
			"✺",
			"✹",
			"✷"
		]
	},    
};

export function MultipleBar({ index, animationName }: { index: number; animationName: AnimationName }) {
    const chars = animationsArray[animationName].frames;
    return (
        <div className="flex items-center justify-center whitespace-pre">
            {chars[index % chars.length]}
        </div>
    );
}
