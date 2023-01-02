import React, { useState } from 'react';
import { StartTestButton } from './StartTestButton';
import { useDelayUnmount } from '@/hooks/useDelayUnmount';
import css from './animations.module.css';
import { useInterval } from '@/hooks/useInterval';

const animChars = [' ', '_', '.', 'o', 'O', 'o', '.', '_', ' ', ];

function Animation() {
    const [text, setText] = useState('1');
    const [index, setIndex] = useState(0);
    useInterval(() => {
        setText(`${+text + 1}`);
        setIndex((i) => {
            return ++i;
        });
    }, 500);
    return (
        <div className="font-mono">{text} {`${animChars[index % animChars.length]}`}</div>
    );
}

export function DelayedManualAnimation() {
    const [isMounted, setIsMounted] = useState(false);
    const shouldRenderChild = useDelayUnmount(isMounted, 500);

    function toggle() {
        setIsMounted(!isMounted);
    }

    const mountedStyle = { animation: `${css['demo-bounce-in']} 1s` };
    const unmountedStyle = { animation: `${css['demo-bounce-out']} 1s` };

    return (
        <div className="h-40 flex flex-col">
            <StartTestButton onClick={toggle}>ASCII Animation</StartTestButton>

            {shouldRenderChild && (
                <div style={isMounted ? mountedStyle : unmountedStyle}>
                    <Animation />
                </div>
            )}

        </div>
    );
}
