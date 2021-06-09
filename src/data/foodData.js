
export const foodItems = [
    {
        id: 1,
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizza'
    },
    {
        id: 2,
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza'
    },
    {
        id: 3,
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizza'
    },
    {
        id: 4,
        name: 'Veggie pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizza'
    },
    {
        id: 5,
        name: 'burger',
        img: '/img/burger.jpeg',
        section: 'Burger'
    },
    {
        id: 6,
        name: 'gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwich'
    },
    {
        id: 7,
        name: 'shrimp PoBoy',
        img: '/img/sandwich.jpeg',
        section: 'Sandwich'
    },
    {
        id: 8,
        name: 'chicken fingers',
        img: '/img/chicken-fingers.jpeg',
        section: 'Sides'
    },
    {
        id: 9,
        name: 'fries',
        img: '/img/fries.jpeg',
        section: 'Sides'
    },
];

export const foods = foodItems.reduce((result, food) => {
    // if we do not have section inside our empyt object,
    if (!result[food.section]) {
        // take the results and add the food section as a key
        result[food.section] = [];
    }
    // access the result.section and add the food
    result[food.section].push(food);
    return result;
}, {});