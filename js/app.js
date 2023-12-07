// Get Data
function addButtonClickListener(btnId) {
  document.getElementById(btnId).addEventListener('click', function(e) {
    // count = count + 1;
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    displayData(productName, productPrice, productQuantity, priceTotal);
  });
}

addButtonClickListener('btn-first');
addButtonClickListener('btn-second');
addButtonClickListener('btn-third');
addButtonClickListener('btn-fourth');
addButtonClickListener('btn-fifth');

// Set Data

  let count = 0;
  function displayData(productName, productPrice, productQuantity, priceTotal){
  count=count+1;
  const container = document.getElementById('table-container');
  const tr = document.createElement('tr');
  tr.innerHTML = `
                <td>${count}</td>
                <td>${productName}</td>
                <td>${productPrice}$</td>
                <td>${productQuantity}</td>
                <td>${priceTotal}$</td>
`;
  container.appendChild(tr);
}