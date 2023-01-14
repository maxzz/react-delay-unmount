import { useEffect } from "react";
import { useTimeout } from "./useTimeout";

export function useDebounce(callback: Function, delay: number, dependencies: any[]) {
    const { clear, reset } = useTimeout(callback, delay);
    useEffect(reset, [...dependencies, reset]);
    useEffect(clear, []);
}