import React, { useState } from 'react';
import { useDelayUnmount } from '@/hooks/useDelayUnmount';
import { StartTestButton } from './UI/StartTestButton';
import css from './UI/animations.module.css';
import { RopeBody } from './Demo4_Rope';

export function Demo4_NonReactRope() {
    const [isMounted, setIsMounted] = useState(false);
    const shouldRenderChild = useDelayUnmount(isMounted, 500);

    function toggle() {
        setIsMounted(!isMounted);
    }

    const mountedStyle = { animation: `${css['demo-bounce-in']} 1s` };
    const unmountedStyle = { animation: `${css['demo-bounce-out']} 1s` };

    return (
        <div className="h-40 flex flex-col">

            <StartTestButton onClick={toggle}>Rope physics</StartTestButton>

            {shouldRenderChild && (
                <div style={isMounted ? mountedStyle : unmountedStyle}>
                    <RopeBody />
                </div>
            )}
        </div>
    );
}
