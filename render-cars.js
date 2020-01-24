import { findById } from './functions.js';

// import cars from './cars.js';

function renderCars(cars) {
    const li = document.createElement('li');
    li.className = cars.priceCategory;
    li.title = cars.name;

    const h3 = document.createElement('h3');
    h3.textContent = cars.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../images/' + cars.image;
    img.alt = cars.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'averagePrice';
    
    const usd = '$' + cars.price;
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = cars.id;
    // p.appendChild(button);
    button.addEventListener('click', () => {

        let data = localStorage.getItem('CART');
        let cart;
        if (data) {
            cart = JSON.parse(data);
        } else {
            cart = [];
        }

        let lineItem = findById(cart, cars.id);

        if (!lineItem) {
            lineItem = {
                id: cars.id,
                quantity: 1
            };

            cart.push(lineItem);
        } 
        else {
            lineItem.quantity++;
        }

        data = JSON.stringify(cart);
        localStorage.setItem('CART', data);

        // alert('1 ' + cars.name + ' added to cart');


    });

    p.appendChild(button);

    li.appendChild(p);

    return li;

}


export default renderCars;
