import { useState } from "react";

export function useArray<T>(initialValue: T[]) {
    const [array, setArray] = useState<T[]>(initialValue);

    function clear() {
        setArray([]);
    }

    function push(item: T) {
        setArray((a) => [...a, item]);
    }

    function insert(index: number, newItem: T) {
        setArray((a) => {
            const items = [...a];
            items.splice(index, 0, newItem);
            return items;
        });

    }

    function remove(index: number) {
        setArray((a) => {
            const items = [...a];
            items.splice(index, 1);
            return items;
        });

    }

    function filter(callback: (value: T, index: number, array: T[]) => value is T) {
        setArray((a) => a.filter<T>(callback));
    }

    // function update(index: number, newItem: T) { // the same as replace()
    //     setArray((a) => {
    //         return [
    //             ...a.slice(0, index),
    //             newItem,
    //             ...a.slice(index + 1)
    //         ];
    //     });
    // }

    function replace(index: number, newItem: T) {
        setArray((a) => {
            const items = [...a];
            items.splice(index, 1, newItem);
            return items;
        });
    }

    function swap(indexA: number, indexB: number) {
        setArray((a) => {
            const items = [...a];
            [items[indexA], items[indexB]] = [items[indexB], items[indexA]];
            return items;
        });
    }

    return {
        clear,
        push,
        insert,
        remove,
        filter,
        replace,
        swap,
        setArray,
    }
}
