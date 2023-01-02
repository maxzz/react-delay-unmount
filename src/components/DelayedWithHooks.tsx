import React, { useState } from 'react';
import { useDelayUnmount } from '@/hooks/useDelayUnmount';
import { StartTestButton } from './StartTestButton';
import css from './animations.module.css';

export const DelayedWithHooks: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const shouldRenderChild = useDelayUnmount(isMounted, 500);

    function toggle() {
        setIsMounted(!isMounted);
    }

    const mountedStyle = { animation: `${css['demo-bounce-in']} 1s` };
    const unmountedStyle = { animation: `${css['demo-bounce-out']} 1s` };

    return (
        <div className="h-40 flex flex-col">

            <StartTestButton onClick={toggle}>Toogle with hooks</StartTestButton>

            {shouldRenderChild && (
                <div style={isMounted ? mountedStyle : unmountedStyle}>
                    Animated popup message
                </div>
            )}
        </div>
    );
};
