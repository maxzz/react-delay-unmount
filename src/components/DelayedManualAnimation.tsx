import React, { useState } from 'react';
import { StartTestButton } from './StartTestButton';
import { useDelayUnmount } from '@/hooks/useDelayUnmount';
import css from './animations.module.css';
import { useInterval } from '@/hooks/useInterval';
import cssRange from './UI/range.module.css';
import { classNames } from '@/utils/classnames';

function MoveToLeft({ index }: { index: number; }) {
    // const animChars = [' ', '_', '.', 'o', 'O', 'o', '.', '_', ' ', ];
    // const animChars = ['.', 'o', 'O', '0', 'O', 'o', '.',];
    const animChars = ['.', 'o', 'O', 'o', '.',];
    const a = `
        ${animChars[Math.abs(index - 5) % animChars.length]}
        ${animChars[Math.abs(index - 4) % animChars.length]}
        ${animChars[Math.abs(index - 3) % animChars.length]}
        ${animChars[Math.abs(index - 2) % animChars.length]}
        ${animChars[Math.abs(index - 1) % animChars.length]}
    `.split(/[ \n]+/).join('');
    console.log('s1', a);

    const b = `
        ${animChars[(index + 0) % animChars.length]}
    `.split(/[ \n]+/).join('');

    const c = `
        ${animChars[(index + 1) % animChars.length]}
        ${animChars[(index + 2) % animChars.length]}
        ${animChars[(index + 3) % animChars.length]}
        ${animChars[(index + 4) % animChars.length]}
        ${animChars[(index + 5) % animChars.length]}
    `.replace(/[ \n]+/g, '');

    return (
        <div className="flex items-center justify-center">
            {a}
            {b}
            {c}
        </div>
    );
}

function MoveToRight({ index }: { index: number; }) {
    // const animChars = [' ', '_', '.', 'o', 'O', 'o', '.', '_', ' ', ];
    // const animChars = ['.', 'o', 'O', '0', 'O', 'o', '.',];
    const animChars = ['.', 'o', 'O', 'o', '.',];
    const a = `
        ${animChars[(index + 5) % animChars.length]}
        ${animChars[(index + 4) % animChars.length]}
        ${animChars[(index + 3) % animChars.length]}
        ${animChars[(index + 2) % animChars.length]}
        ${animChars[(index + 1) % animChars.length]}
    `.split(/[ \n]+/).join('');
    console.log('s1', a);

    const b = `
        ${animChars[(index + 0) % animChars.length]}
    `.split(/[ \n]+/).join('');

    const c = `
        ${animChars[Math.abs(index - 1) % animChars.length]}
        ${animChars[Math.abs(index - 2) % animChars.length]}
        ${animChars[Math.abs(index - 3) % animChars.length]}
        ${animChars[Math.abs(index - 4) % animChars.length]}
        ${animChars[Math.abs(index - 5) % animChars.length]}
    `.replace(/[ \n]+/g, '');
    return (
        <div className="flex items-center justify-center">
            {a}
            {b}
            {c}
        </div>
    );
}

function Animation() {
    const [index, setIndex] = useState(0);
    // useInterval(() => {
    //     setIndex((i) => {
    //         return ++i;
    //     });
    // }, 2500);
    return (<>
        <MoveToLeft index={index} />
        {/* <MoveToRight index={index} /> */}
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
                <div className="font-mono text-sm" style={isMounted ? mountedStyle : unmountedStyle}>
                    <div className="pt-4">
                        <Animation />
                    </div>

                    <label className="px-[calc(20%)] flex flex-col space-x-4">
                        <input className={classNames("flex-1", cssRange.range)} type="range" min="40" max="218" />
                        <span>speed</span>
                    </label>
                </div>
            )}

        </div>
    );
}
