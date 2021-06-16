import { useState } from 'react';

export function useQuantity(defaultQuantity) {
    const [value, setValue] = useState(defaultQuantity || 1);

    function onChange(e) {
        // convert the value into a number with the '+' operator
        if (!(+e.target.value >= 1)) {
            // if the input value is not greater than 1, then set it to one
            setValue(1);
            return;
        }
        setValue(+e.target.value);
    }

    return {
        value,
        setValue,
        onChange
    }
}