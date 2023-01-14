import { useCallback, useEffect, useRef } from "react"; 

export function useTimeout(callback: Function, delay: number): { clear: () => void; reset: () => void; } {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef<number | undefined>();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

    return { clear, reset };
}
