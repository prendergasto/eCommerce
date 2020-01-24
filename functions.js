// import './test/example.test.js';

export function totalPrice(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function findById(cars, id) {
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];

        if (car.id === id) {
            return car;
        }
    }

    return null;
}

export function calculatePriceTotal(quantity, price) {
    const priceTotal = quantity * price;
    return priceTotal;
}

export function calculateCartTotal(cart, cars) {
    let cartTotal = 0;


    for (let i = 0; i < cart.length; i++) {

        const lineItem = cart[i];
        const carz = findById(cars, lineItem.id);
        const lineTotal = calculatePriceTotal(lineItem.quantity, carz.price);
        cartTotal += lineTotal;
    }

    return cartTotal;


    
}