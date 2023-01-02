import React, { useState } from 'react';
import { StartTestButton } from './StartTestButton';
import { useDelayUnmount } from '@/hooks/useDelayUnmount';
import css from './animations.module.css';

function Animation() {
    return (
        <div className="">123</div>
    )
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
            <StartTestButton onClick={toggle}>Delayed Manual Animation</StartTestButton>

            {shouldRenderChild && (
                <div style={isMounted ? mountedStyle : unmountedStyle}>
                    <Animation />
                </div>
            )}

        </div>
    );
}
