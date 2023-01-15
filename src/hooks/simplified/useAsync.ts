import { useCallback, useEffect, useState } from "react";

export function useAsync<T>(callback: Function, dependencies: unknown[] = []) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | undefined>();
    const [value, setValue] = useState<T | undefined>();

    const callbackMemoized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false));
    }, dependencies);

    useEffect(() => {
        callbackMemoized();
    }, [callbackMemoized]);

    return { loading, error, value };
}
