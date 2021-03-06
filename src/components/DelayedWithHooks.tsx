import React, { useEffect, useState } from 'react';

function useDelayUnmount(isMounted: boolean, delayTime: number) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        let timeoutId: number;
        if (isMounted && !shouldRender) {
            setShouldRender(true);
        } if (!isMounted && shouldRender) {
            timeoutId = setTimeout(() => setShouldRender(false), delayTime);
        }
        return () => clearTimeout(timeoutId);
    }, [isMounted, delayTime, shouldRender]);

    return shouldRender;
}

const DelayedWithHooks: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const shouldRenderChild = useDelayUnmount(isMounted, 500);

    const mountedStyle = { animation: 'demo-bounce-in 1s' };
    const unmountedStyle = { animation: 'demo-bounce-out 1s' };

    function toggle() {
        setIsMounted(!isMounted);
    }

    return (
        <div className="h-40 flex flex-col">
            <button onClick={toggle} className="px-2 py-1 border rounded border-gray-200 text-gray-100 hover:bg-gray-700 focus:outline-none" >
                Toogle w/ Hooks
            </button>
            {shouldRenderChild && (<div style={isMounted ? mountedStyle : unmountedStyle}>Animated popup message</div>)}
        </div>
    );
}

export default DelayedWithHooks;
