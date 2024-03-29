import React, { useState } from 'react';
import { useDelayUnmount } from '@/hooks/useDelayUnmount';
import { useInterval } from '@/hooks/useInterval';
import { classNames } from '@/utils/classnames';
import { StartTestButton } from './UI/StartTestButton';
import { BrokenMultipleBar, MoveAscii, MoveToLeft, MoveToRight, MultipleBar, SingleBar } from './ascii-animations';
import cssRange from './UI/range/range.module.css';
import css from './UI/animations.module.css';


function Animation({ speed }: { speed: number | null; }) {
    const [index, setIndex] = useState(0);
    useInterval(() => setIndex((i) => ++i), speed);
    return (<>
        <MoveToLeft index={index} />
        <MoveToRight index={index} />
        <MoveAscii index={index} />
        <SingleBar index={index} />
        <MultipleBar index={index} animationName="bouncingBall" />
        <MultipleBar index={index} animationName="aesthetic" />
        <MultipleBar index={index} animationName="star" />
        <MultipleBar index={index} animationName="simpleDotsScrolling" />

        {/* <BrokenMultipleBar index={index} /> */}
    </>);
}

export function Demo3_DelayedManualAnimation() {
    const [isMounted, setIsMounted] = useState(false);
    const shouldRenderChild = useDelayUnmount(isMounted, 500);

    const maxSpeed = 20;
    const [speed, setSpeed] = useState(19);

    const mountedStyle = { animation: `${css['demo-bounce-in']} 1s` };
    const unmountedStyle = { animation: `${css['demo-bounce-out']} 1s` };

    return (
        <div className="h-40 min-h-[280px] flex flex-col">
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
