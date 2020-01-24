import cart from '../data/cart.js';
import cars from '../cars.js';
import { findById, calculateCartTotal } from '../functions.js';
import renderTableRow from './render-line-items.js';
// import renderCars from '../render-cars.js'


const tbody = document.querySelector('tbody');
const orderTotalRow = document.getElementById('order-total-row');
const placeOrderButton = document.getElementById('button');

let data = localStorage.getItem('CART');
        let cart;
        if (data) {
            cart = JSON.parse(data);
        } else {
            cart = [];
        }

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const car = findById(cars, lineItem.id);
    const dom = renderTableRow(lineItem, car);

    tbody.appendChild(dom);
}

const orderTotal = calculateCartTotal(cart, cars);
orderTotalRow.textContent = orderTotal;

if (cart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}
















// const automobileShopping = document.getElementById('automobile');

// const li = document.createElement('li');
// const nameP = document.createElement('p');

// nameP.textContent = 'first thing';

// const roleP = document.createElement('p');

// roleP.textContent = 'second thing';

// li.appendChild(nameP);
// li.appendChild(roleP);

// automobileShopping.appendChild(li);

// // const makeCarsLi = () => {

// // };

// // const carsLi = makeCarsLi();

