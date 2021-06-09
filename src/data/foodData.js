export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizza'
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Veggie pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'burger',
        img: '/img/burger.jpeg',
        section: 'Burger'
    },
    {
        name: 'gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'shrimp PoBoy',
        img: '/img/sandwich.jpeg',
        section: 'Sandwich'
    },
    {
        name: 'chicken fingers',
        img: '/img/chicken-fingers.jpeg',
        section: 'Sides'
    },
    {
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