import { useState } from 'react';


export function useToppings(defaultTopping) {
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings());

    function checkTopping(index) {
        const newTopping = [...toppings];
        newTopping[index].checked = !newTopping[index].checked;
        setToppings(newTopping);
    }

    return { checkTopping, toppings }
}


const toppingsList = [
    "Extra cheese",
    "Pepperoni",
    "Sausage",
    "Onions",
    "Peppers",
    "Pinapple",
    "Ham",
    "Spinach",
    "Artichokes",
    "Mushrooms",
    "Anchovies"
]


const getDefaultToppings = () => {
    return toppingsList.map(topping => ({
        name: topping,
        checked: false
    }))
}