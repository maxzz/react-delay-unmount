import React, { useRef, useState } from 'react';
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

function MoveAscii({ index }: { index: number; }) {
    // const animChars = '▁ ▂ ▃ ▄ ▅ ▆ ▇ █ ▇ ▆ ▅ ▄ ▃ ▁'.split(' ');
    // const animChars = '← ↖ ↑ ↗ → ↘ ↓ ↙'.split(' ');
    // const animChars = '▉▊▋▌▍▎▏▎▍▌▋▊▉'.split(' ');
    // const animChars = '▖ ▘ ▝ ▗'.split(' ');
    // const animChars = '┤ ┘ ┴ └ ├ ┌ ┬ ┐'.split(' ');
    const animChars = '◢ ◣ ◤ ◥'.split(' ');
    // const animChars = '◰ ◳ ◲ ◱'.split(' ');
    // const animChars = '◴ ◷ ◶ ◵'.split(' ');
    // const animChars = '◐ ◓ ◑ ◒'.split(' ');
    // const animChars = '◡◡ ⊙⊙ ◠◠'.split(' ');
    // const animChars = '⣾⣽⣻⢿⡿⣟⣯⣷ ⠁⠂⠄⡀⢀⠠⠐⠈'.split(' ');
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

/*
    const spinnerFrames = ['▁', '▃', '▄', '▅', '▆', '▇', '█', '▇', '▆', '▅', '▄', '▃'];
    let currFrame = 0;
    function nextFrame() {
        $('#question-header a').html(spinnerFrames[currFrame]);
        currFrame = (currFrame == spinnerFrames.length - 1) ? 0 : currFrame + 1;
    }
    setInterval(nextFrame, 100);
*/

function MoveSingleBar({ index }: { index: number; }) {
    const animChars = '⣾⣽⣻⢿⡿⣟⣯⣷';
    const frameRef = useRef(index);

    const a = animChars[frameRef.current++];
    frameRef.current = frameRef.current % animChars.length;

    return (
        <div className="flex items-center justify-center">
            {a}
        </div>
    );
}

function Animation({ speed }: { speed: number | null; }) {
    const [index, setIndex] = useState(0);
    useInterval(() => setIndex((i) => ++i), speed);
    return (<>
        <MoveToLeft index={index} />
        <MoveToRight index={index} />
        <MoveAscii index={index} />
        <MoveSingleBar index={index} />
    </>);
}

export function DelayedManualAnimation() {
    const [isMounted, setIsMounted] = useState(false);
    const shouldRenderChild = useDelayUnmount(isMounted, 500);

    const maxSpeed = 20;
    const [speed, setSpeed] = useState(15);

    const mountedStyle = { animation: `${css['demo-bounce-in']} 1s` };
    const unmountedStyle = { animation: `${css['demo-bounce-out']} 1s` };

    return (
        <div className="h-40 flex flex-col">
            <StartTestButton onClick={() => setIsMounted(v => !v)}>ASCII Animation</StartTestButton>

            {shouldRenderChild && (
                <div className="font-mono text-sm" style={isMounted ? mountedStyle : unmountedStyle}>
                    <div className="pt-4">
                        <Animation speed={speed ? (maxSpeed - speed) * 100 : null} />
                    </div>

                    <label className="px-[20%] font-mono flex flex-col space-x-4">
                        <input
                            className={classNames("flex-1", cssRange.range)} type="range" min="0" max={maxSpeed}
                            value={speed} onChange={(event) => setSpeed(+event.target.value)}
                        />
                        <span title={speed ? `Interval ${(maxSpeed - speed) * 100} ms` : 'stopped'}>
                            speed {`${speed}`.padStart(2, '\u00a0')}
                        </span>
                    </label>
                </div>
            )}

        </div>
    );
}
