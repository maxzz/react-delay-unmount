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
    // const animChars = '▁▃▄▅▆▇█▇▆▅▄▃';
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

function SingleBar({ index }: { index: number; }) {
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

// broken with useRef: remember each odd i.e. 1,2,4,8,10,  1,3,5,7,9,  0,2,4,8,10,  1,3,5,7,9
// function MultipleBar({ index }: { index: number; }) {
//     const animChars = [
//         // "( ●    )",
//         // "(  ●   )",
//         // "(   ●  )",
//         // "(    ● )",
//         // "(     ●)",
//         // "(    ● )",
//         // "(   ●  )",
//         // "(  ●   )",
//         // "( ●    )",
//         // "(●     )",
//         "(0     )",
//         "( 1    )",
//         "(  2   )",
//         "(   3  )",
//         "(    4 )",
//         "(     5)",
//         "(    a )",
//         "(   b  )",
//         "(  c   )",
//         "( d    )",
//         "(e     )",
//     ];
//     const frameRef = useRef(index);
//     //console.log('i', index);
    
//     const a = animChars[frameRef.current];
//     frameRef.current = ++frameRef.current % animChars.length;

//     console.log('frameRef.current', frameRef.current, 'i = ', index);

//     return (
//         <div className="flex items-center justify-center whitespace-pre">
//             {a} frameRef.current {frameRef.current} index {index}
//         </div>
//     );
// }

function MultipleBar({ index }: { index: number; }) {
    const animChars = [
        // "( ●    )",
        // "(  ●   )",
        // "(   ●  )",
        // "(    ● )",
        // "(     ●)",
        // "(    ● )",
        // "(   ●  )",
        // "(  ●   )",
        // "( ●    )",
        // "(●     )",
        "(0     )",
        "( 1    )",
        "(  2   )",
        "(   3  )",
        "(    4 )",
        "(     5)",
        "(    a )",
        "(   b  )",
        "(  c   )",
        "( d    )",
        "(e     )",
    ];
    const frameRef = useRef(index);
    //console.log('i', index);
    
    const a = animChars[index % animChars.length];
    frameRef.current = ++frameRef.current % animChars.length;

    console.log('frameRef.current', frameRef.current, 'i = ', index);

    return (
        <div className="flex items-center justify-center whitespace-pre">
            {a} frameRef.current {frameRef.current} index {index}
        </div>
    );
}

function Animation({ speed }: { speed: number | null; }) {
    const [index, setIndex] = useState(0);
    useInterval(() => setIndex((i) => ++i), speed);
    return (<>
        {/* <MoveToLeft index={index} />
        <MoveToRight index={index} />
        <MoveAscii index={index} />
        <SingleBar index={index} /> */}
        <MultipleBar index={index} />
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
            <StartTestButton onClick={() => setIsMounted(v => !v)}>ASCII Animations</StartTestButton>

            {shouldRenderChild && (
                <div className="font-mono text-sm" style={isMounted ? mountedStyle : unmountedStyle}>
                    <div className="pt-4">
                        <Animation speed={speed ? (maxSpeed - speed) * 100 : null} />
                    </div>

                    <label className="px-[20%] font-mono flex flex-col space-x-4 select-none">
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
