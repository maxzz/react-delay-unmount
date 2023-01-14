import { useEffect, useRef } from "react";

export function useUpdateEffect(callback: Function, dependencies: any[]) { // only runs on update and skips init render
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, dependencies);
}
