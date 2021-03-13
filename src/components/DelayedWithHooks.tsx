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
        <div>
            <button onClick={toggle}>
                Toogle w/ Hooks
            </button>
            {shouldRenderChild && (<div style={isMounted ? mountedStyle : unmountedStyle}>aa</div>)}
        </div>
    );
}

export default DelayedWithHooks;
