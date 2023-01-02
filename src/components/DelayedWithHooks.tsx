import React, { useState } from 'react';
import { useDelayUnmount } from '@/hooks/useDelayUnmount';
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

            <button className="px-2 py-2 border rounded border-zinc-200 text-zinc-100 hover:bg-zinc-900 focus:bg-zinc-900 focus:outline-none" onClick={toggle}>
                Toogle with hooks
            </button>

            {shouldRenderChild && (
                <div style={isMounted ? mountedStyle : unmountedStyle}>
                    Animated popup message
                </div>
            )}
        </div>
    );
};
