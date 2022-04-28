const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');
const amountInput = document.querySelector('#amount');
const submitBtn = document.querySelector('#submit-btn');
const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const noExpenseRow = document.getElementById('no-expense-row');


submitBtn.addEventListener('click', () => {
    noExpenseRow.style.display = 'none';
    const newRow = document.createElement('tr');
    tableBody.appendChild(newRow);

    const nameTd = document.createElement('td');
    nameTd.innerText = nameInput.value;
    newRow.appendChild(nameTd);

    const dateTd = document.createElement('td');
    dateTd.innerText = dateInput.value;
    newRow.appendChild(dateTd);

    const amountTd = document.createElement('td');
    amountTd.innerText = amountInput.value;
    newRow.appendChild(amountTd);

    const xButton = document.createElement('button');
    const xButtonTd = document.createElement('td');
    xButton.innerText = 'x';
    xButton.addEventListener('click', () => newRow.remove());
    xButtonTd.appendChild(xButton);
    newRow.appendChild(xButtonTd);

    nameInput.value = '';
    dateInput.value = '';
    amountInput.value = '';
})