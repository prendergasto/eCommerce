// import cars.js ...

const automobileShopping = document.getElementById('automobile');

const li = document.createElement('li');
const nameP = document.createElement('p');

nameP.textContent = 'first thing';

const roleP = document.createElement('p');

roleP.textContent = 'second thing';

li.appendChild(nameP);
li.appendChild(roleP);

automobileShopping.appendChild(li);

// const makeCarsLi = () => {

// };

// const carsLi = makeCarsLi();

