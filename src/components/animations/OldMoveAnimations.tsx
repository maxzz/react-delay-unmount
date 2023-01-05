import React, { useRef } from "react";

export function MoveToLeft({ index }: { index: number; }) {
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
    //console.log('s1', a);

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

export function MoveToRight({ index }: { index: number; }) {
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
    //console.log('s1', a);

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

export function MoveAscii({ index }: { index: number; }) {
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
    //console.log('s1', a);

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

//https://github.com/sindresorhus/cli-spinners/blob/main/spinners.json
export function SingleBar({ index }: { index: number; }) {
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
// export function MultipleBar({ index }: { index: number; }) {
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
