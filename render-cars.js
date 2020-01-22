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
    
    const usd = '$' + cars.averagePrice.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = cars.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;

}


export default renderCars;
