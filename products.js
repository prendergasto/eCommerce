import cars from './cars.js';
import renderCars from './render-cars.js';

const list = document.getElementById('cars');


for (let c = 0; c < cars.length; c++) {
    const car = cars[c];
    const dom = renderCars(car);
    list.appendChild(dom);
    // console.log(list);
}   