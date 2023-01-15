import { useAsync } from "./useAsync";

const defOptions: RequestInit = {
    headers: {
        "Content-Type": "application/json",
    }
};

export default function useFetch(url: string, options: RequestInit = {}, dependencies: unknown[] = []) {
    return useAsync(
        () => {
            return fetch(url, { ...defOptions, ...options })
                .then((res) => {
                    if (res.ok) { return res.json(); }
                    return res.json().then((json) => Promise.reject(json));
                });
        },
        dependencies
    );
}
