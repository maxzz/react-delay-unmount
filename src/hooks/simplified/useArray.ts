import { useState } from "react";

export function useArray<T>(initialValue: T[]) {
    const [array, set] = useState<T[]>(initialValue);

    function push(item: T) {
        set((a) => [...a, item]);
    }

    function insert(index: number, newItem: T) {
        set((a) => {
            const items = [...a];
            items.splice(index, 0, newItem);
            return items;
        });

    }

    function remove(index: number) {
        set((a) => {
            const items = [...a];
            items.splice(index, 1);
            return items;
        });

    }

    function replace(index: number, newItem: T) {
        set((a) => {
            const items = [...a];
            items.splice(index, 1, newItem);
            return items;
        });
    }

    function swap(indexA: number, indexB: number) {
        set((a) => {
            const items = [...a];
            [items[indexA], items[indexB]] = [items[indexB], items[indexA]];
            return items;
        });
    }

    function filter(callback: (value: T, index: number, array: T[]) => value is T) {
        set((a) => a.filter<T>(callback));
    }

    return {
        array,
        set,
        push,
        insert,
        remove,
        replace,
        swap,
        filter,
    }
}
