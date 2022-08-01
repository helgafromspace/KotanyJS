
/*Сделать таблицу умножения, используя DOM createElement и innerText. 
Создайте таблицу, вложенные строки и ячейки в циклах. */

let body = document.querySelector('body');
let main = document.querySelector('main');
let table = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('td');
let rowNumber = document.createElement('input');

rowNumber.style.width = '250px';
td.style.backgroundColor = 'white';
td.style.width = '50px';
td.style.borderStyle = 'solid';
td.style.borderColor = '#e6e9eb';
td.style.borderCollapse = '2px';
td.style.textAlign = 'center';
td.style.borderWidth = '1px';

main.appendChild(table)
main.appendChild(rowNumber)


function addTable(){
    for(let i = 0; i < 10; i++){
        let cloneRow = tr.cloneNode();
        table.appendChild(cloneRow);
        for(let j = 0; j < 10; j++){
            let cloneCell = td.cloneNode();
            cloneRow.appendChild(cloneCell)
            cloneCell.innerText = i+j;
            if( j > 0 && i!= 0){
                cloneCell.innerText = i*j;  
            }
        }
    }
}

addTable();

let bgColor = '#e6e9eb'

function colorTable(bgColor){
    for(let i = 0; i < table.rows.length; i++){
        let cellArr = table.rows[i].cells;
        for(let j = 0; j < cellArr.length; j++){
            if(i % 2 !== 0){
                cellArr[j].style.backgroundColor = bgColor;  
            }
        }
    }
}
colorTable(bgColor)


/*Подсветить ячейку
над которой находится курсор мыши. Используйте события mouseover и mouseout, 
и style.backgroundColor для подсветки.*/


let cells = document.querySelectorAll('td');
cells.forEach(
    function(cell) {
        let currColor = cell.style.backgroundColor;
        cell.addEventListener("mouseover",() => cell.style.backgroundColor = 'red');
        cell.addEventListener("mouseover",() => rowNumber.value = `Номер столбца ${cell.cellIndex}, номер строки ${cell.parentElement.rowIndex}`); 
        cell.addEventListener("mouseover", function(){            
            let index =  cell.parentElement.rowIndex;
            let currRow = table.rows[index];
            let cellArr = currRow.cells;
            cellArr[0].style.backgroundColor = 'red';
            let cellArr_0 = table.rows[0].cells;
            cellArr_0[cell.cellIndex].style.backgroundColor = 'red';
        });
        cell.addEventListener("mouseout", function (){
            let index =  cell.parentElement.rowIndex;
            let currRow = table.rows[index];
            let cellArr = currRow.cells;
            let cellArr_0 = table.rows[0].cells;
            currColor === 'white' ? cell.style.backgroundColor = 'white' : cell.style.backgroundColor = bgColor;
            currColor === 'white' ? cellArr[0].style.backgroundColor = 'white' : cellArr[0].style.backgroundColor = bgColor;
            currColor === 'white' ? cellArr_0[cell.cellIndex].style.backgroundColor = 'white' : cellArr_0[cell.cellIndex].style.backgroundColor = bgColor;
        });
    }
  );


/*Сделайте ваш калькулятор из первых занятий используя DOM и элементы input (в т. ч. type="number" для чисел)
Каждому полю ввода присвойте тот или иной id для обращения в обрабочтике события.*/
let title = document.createElement('h3');
let inputLength = document.createElement('input');
let inputWidth = document.createElement('input');
let result = document.createElement('input');
let button = document.createElement('button');

inputLength.style.margin = '20px 20px 0px 0px';
button.style.margin = '20px 20px';
button.style.width = '100px';
button.style.height = '20px';
button.innerText = 'Calculate';

title.innerText = 'Evaluate tha area of rectangle';

inputLength.setAttribute('id','length');
inputLength.setAttribute('type','number');
inputLength.setAttribute('placeholder','Enter length');

inputWidth.setAttribute('id','width');
inputWidth.setAttribute('type','number');
inputWidth.setAttribute('placeholder','Enter width');

result.setAttribute('type','text');
result.setAttribute('placeholder','Result');

main.appendChild(title)
main.appendChild(inputLength)
main.appendChild(inputWidth)
main.appendChild(button)
main.appendChild(result)

function calc(){
    result.value = inputLength.value* inputWidth.value;
    return result;
}

button.addEventListener('click', calc);

inputLength.addEventListener('input', calc);

inputWidth.addEventListener('input', calc);


