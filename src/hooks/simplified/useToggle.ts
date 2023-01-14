import { useState } from "react";

export function useToggle(initialValue: boolean) {
    const [value, setValue] = useState<boolean | undefined>(initialValue);

    function toggleValue(newValue?: boolean) {
        setValue((current) => typeof newValue === 'boolean' ? newValue : !current);
    }

    return [value, toggleValue];
}
