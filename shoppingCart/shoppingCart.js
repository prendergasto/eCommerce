import cart from '../data/cart.js';
import cars from '../cars.js';
import { findById, calculateCartTotal } from '../functions.js';
import renderTableRow from './render-line-items.js';


const tbody = document.querySelector('tbody');
const orderTotalRow = document.getElementById('order-total-row');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const car = findById(cars, lineItem.id);
    const dom = renderTableRow(lineItem, car);

    tbody.appendChild(dom);
    console.log('hello');
}

const orderTotal = calculateCartTotal(cart, cars);
orderTotalRow.textContent = orderTotal;

















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

