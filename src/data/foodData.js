export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
export const foodItems = [
    {
        id: 1,
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizza',
        price: 6.99
    },
    {
        id: 2,
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza',
        price: 7.99
    },
    {
        id: 3,
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizza',
        price: 6.99
    },
    {
        id: 4,
        name: 'Veggie pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizza',
        price: 10.99
    },
    {
        id: 5,
        name: 'burger',
        img: '/img/burger.jpeg',
        section: 'Burger',
        price: 4.95
    },
    {
        id: 6,
        name: 'gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwich',
        price: 3.45
    },
    {
        id: 7,
        name: 'shrimp PoBoy',
        img: '/img/sandwich.jpeg',
        section: 'Sandwich',
        price: 5.99
    },
    {
        id: 8,
        name: 'chicken fingers',
        img: '/img/chicken-fingers.jpeg',
        section: 'Sides',
        price: 2.99
    },
    {
        id: 9,
        name: 'fries',
        img: '/img/fries.jpeg',
        section: 'Sides',
        price: 1.50
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