import React, { useState } from 'react';
import { StartTestButton } from './StartTestButton';
import { useDelayUnmount } from '@/hooks/useDelayUnmount';
import css from './animations.module.css';
import { useInterval } from '@/hooks/useInterval';

function MoveToLeft({ index }: { index: number; }) {
    // const animChars = [' ', '_', '.', 'o', 'O', 'o', '.', '_', ' ', ];
    // const animChars = ['.', 'o', 'O', '0', 'O', 'o', '.',];
    const animChars = ['.', 'o', 'O', 'o', '.',];
    return (<>
        <div className="font-mono">{`${animChars[Math.abs(index - 5) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[Math.abs(index - 4) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[Math.abs(index - 3) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[Math.abs(index - 2) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[Math.abs(index - 1) % animChars.length]}`}</div>

        <div className="font-mono">{`${animChars[(index + 0) % animChars.length]}`}</div>

        <div className="font-mono">{`${animChars[(index + 1) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[(index + 2) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[(index + 3) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[(index + 4) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[(index + 5) % animChars.length]}`}</div>
    </>);
}

function MoveToRight({ index }: { index: number; }) {
    // const animChars = [' ', '_', '.', 'o', 'O', 'o', '.', '_', ' ', ];
    // const animChars = ['.', 'o', 'O', '0', 'O', 'o', '.',];
    const animChars = ['.', 'o', 'O', 'o', '.',];
    return (<>
        <div className="font-mono">{`${animChars[(index + 5) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[(index + 4) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[(index + 3) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[(index + 2) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[(index + 1) % animChars.length]}`}</div>

        <div className="font-mono">{`${animChars[(index + 0) % animChars.length]}`}</div>

        <div className="font-mono">{`${animChars[Math.abs(index - 1) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[Math.abs(index - 2) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[Math.abs(index - 3) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[Math.abs(index - 4) % animChars.length]}`}</div>
        <div className="font-mono">{`${animChars[Math.abs(index - 5) % animChars.length]}`}</div>
    </>);
}

function Animation() {
    const [index, setIndex] = useState(0);
    useInterval(() => {
        setIndex((i) => {
            return ++i;
        });
    }, 500);
    return (<>
        <div className="flex items-center justify-center">
            <MoveToLeft index={index} />
        </div>
        <div className="flex items-center justify-center">
            <MoveToRight index={index} />
        </div>
    </>);
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
