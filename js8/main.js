// function getSelectedOption() {
//     var select = document.getElementById('mySelect');
//     var selectedOption = select.options[select.selectedIndex];
//     console.log('Значение: ' + selectedOption.value + ', Текст: ' + selectedOption.text);
// }

// function addOption() {
//     var select = document.getElementById('mySelect');
//     var option = document.createElement('option');
//     option.text = 'Классика';
//     option.value = 'classic';
//     select.add(option);
//     select.selectedIndex = select.length - 1; 
// }



// var editableDiv = document.getElementById('editableDiv');

// editableDiv.addEventListener('click', function() {
//     var textarea = document.createElement('textarea');
//     textarea.value = editableDiv.innerHTML;
//     editableDiv.replaceWith(textarea);
//     textarea.focus();

//     textarea.addEventListener('keydown', function(e) {
//         if (e.key === 'Enter') {
//             editableDiv.innerHTML = textarea.value;
//             textarea.replaceWith(editableDiv);
//         }
//     });

//     textarea.addEventListener('blur', function() {
//         editableDiv.innerHTML = textarea.value;
//         textarea.replaceWith(editableDiv);
//     });
// });



// let currentEditingCell = null;

// document.querySelector('table').addEventListener('click', function(e) {
//     let td = e.target.closest('td');
//     if (!td || td.querySelector('textarea')) return;

//     if (currentEditingCell) {
//         cancelEdit();
//     }

//     let textarea = document.createElement('textarea');
//     textarea.style.width = td.clientWidth + 'px';
//     textarea.style.height = td.clientHeight + 'px';
//     textarea.value = td.innerHTML;
//     td.textContent = ''; // Clear the content
//     td.appendChild(textarea);
//     textarea.focus();
//     textarea.setAttribute('data-editing', true);
//     currentEditingCell = td;

//     document.getElementById('controls').style.display = 'block';
//     document.getElementById('ok').addEventListener('click', function() {
//         td.innerHTML = textarea.value;
//         finishEdit();
//     });
//     document.getElementById('cancel').addEventListener('click', function() {
//         finishEdit();
//     });
// });

// function cancelEdit() {
//     currentEditingCell.querySelector('textarea').replaceWith(currentEditingCell.textContent);
//     currentEditingCell = null;
//     document.getElementById('controls').style.display = 'none';
// }

// function finishEdit() {
//     currentEditingCell.querySelector('textarea').replaceWith(currentEditingCell.textContent);
//     currentEditingCell = null;
//     document.getElementById('controls').style.display = 'none';
// }


// function calculateDeposit() {
//     var initialDeposit = document.getElementById('initialDeposit').value;
//     var annualInterestRate = document.getElementById('annualInterestRate').value / 100;
//     var years = document.getElementById('years').value;

//     var finalAmount = initialDeposit * Math.pow(1 + annualInterestRate / 12, 12 * years);
//     finalAmount = finalAmount.toFixed(2);

//     document.getElementById('result').textContent = 'Итоговая сумма: $' + finalAmount;
// }