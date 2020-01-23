

function renderTableRow(lineItem, car) {
    const tr = document.createElement('tr');

    const title = document.createElement('td');
    // title.className = align-center;
    title.textContent = car.name;
    tr.appendChild(title);

    const quantityRow = document.createElement('td');
    quantityRow.textContent = lineItem.quantity;
    tr.appendChild(quantityRow);

    const priceRow = document.createElement('td');
    priceRow.textContent = car.price;
    tr.appendChild(priceRow);

    console.log('hey');

    // const total = document.createElement('td');
    // total.textContent = lineItem.quantity * car.price;
    // tr.appendChild(total);

    return tr;

}

export default renderTableRow;