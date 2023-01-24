import React, { useRef } from "react";
export * from './OldMoveAnimations';

export type AnimationData = {
    interval: number;
    frames: string[];
};

export type AnimationName = keyof typeof animationsArray;

export const animationsArray = {
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
            "▰▱▱▱▱▱▱",
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
			"✷",
		]
	},
    simpleDotsScrolling: {
		"interval": 200,
		"frames": [
			".  ",
			".. ",
			"...",
			" ..",
			"  .",
			"   ",
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
