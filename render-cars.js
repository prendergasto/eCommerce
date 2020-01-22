// import cars from './cars.js';

function renderCars(cars) {
    const li = document.createElement('li');
    li.className = cars.priceCategory;
    // li.title = cars.name;

    const h3 = document.createElement('h3');
    h3.textContent = cars.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = ...
    img.alt = ...
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'averagePrice';
    
    const usd = '$' + cars.averagePrice.toFixed(2);
    p.textContent = usd;

    

};

