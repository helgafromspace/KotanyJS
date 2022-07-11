/*Сделайте декларативную JSON-структуру для тэгов выше, в которой:
каждый тэг будет объектом
имя тэга будет полем tagName
вложенные тэги будут в поле subTags
текст в тэге будет в поле text
набор аттрибутов тэга будет в поле attrs.
<body>
        <div>
            <span>Enter a data please:</span><br/>
            <input type='text' id='name'>
            <input type='text' id='surname'>
        </div>
        <div>
            <button id='ok'>OK</button>
            <button id='cancel'>Cancel</button>
        </div>
</body>

let body = {
    tagName: "body",
    subTags: [
        {
            tagName: "div",
            subTags:[
                {
                    tagName: "span",
                    text: "Enter a data please:",
                },
                {
                    tagName: "br",
                },
                {
                    tagName: "input",
                    attrs:
                        {
                            type: "text",
                            id: "name",
                        }
                },
                {
                    tagName: "input",
                    attrs:
                        {
                            type: "text",
                            id: "surname",
                        }
                },
            ]
        },
        {
            tagName: "div",
            subTags: [
                {
                    tagName: "button",
                    attrs:
                        {
                            id: "ok",
                            text: "OK",
                        }
                },
                {
                    tagName: "button",
                    attrs:
                        {
                            id: "cancel",
                            text: "Cancel",
                        }
                },
            ]
        }
    ]
}

Выведите значения текста во второй кнопке, используя . и [].
Выведите значение атрибута id во втором input, используя . и [].

console.log(body.subTags[1].subTags[1].attrs.text)
console.log(body.subTags[0].subTags[3].attrs.id)*/

/*Организуйте таким способом заполнение полей в объектах:
let notebook = {
    brand: "HP",
    type:  "440 G4",
    model: "Y7Z75EA",
    ram: 4,
    size: "14",
    weight: 1.8,
    resolution: {
        width: 1920,
        height: 1080,
    },
};

let phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};

let person = {
    name: "Donald",
    surname: "Trump",
    married: true,
}

Добавьте персоне гаджеты, используя новые поля smartphone и laptop в объекте персоны
Добавьте владельца в гаджеты, используя новое поле owner в объектах телефона и ноутбука.
обратите внимание на цикличность ссылок в объектах.

*/
/*
let notebook = {
    brand: prompt("Enter a brand"),
    type:  prompt("Enter a type","f.e. 440 G4"),
    model: prompt("Enter a model","f.e. Y7Z75EA"),
    ram: parseInt(prompt("Enter ram size")),
    size: prompt("Enter screen size"),
    weight: parseInt(prompt("Enter weight")),
    resolution: {
        width: parseInt(prompt("Enter width in px")),
        height: parseInt(prompt("Enter height in px")),
    },
};

let phone = {
    brand: prompt("Enter a brand"),
    model: prompt("Enter a model"),
    ram: parseInt(prompt("Enter ram size")),
    color: prompt("Enter color"),
};
let person = {
    name: prompt("Enter name"),
    surname: prompt("Enter surname"),
    married: confirm('Are you married?'),
};



person.smartphone = {}
person.laptop = {}
person.smartphone.owner = person.name;
person.laptop.owner = person.name;

console.log(person)
*/


/*Создайте пустой массив и добавьте в него три элемента, 
введенные пользователем (prompt), используя императивный подход (несколько операторов подряд)

let arr = []
arr[0] = prompt('Enter first el of array');
arr[1] = prompt('Enter second el of array');
arr[2] = prompt('Enter third el of array');
console.log(arr)*/

/*Сделайте цикл с confirm, который продолжается по Отмена и заканчивается по ОК.
let answer = confirm('Are you crazy?');
while(!answer){
    answer = confirm('Are you crazy?');
}
*/

/*Создайте пустой массив и добавляйте в него элементы, пока пользователь не нажмет Отмена в очередном prompt

let arr =[]

let el = prompt('Enter value to push into arr');
arr.push(el);

while(el !== null){
    el = prompt('Enter value to push into arr');
    arr.push(el);
}
console.log(arr)*/

/*Сделайте предыдущее задание, не используя push, а обращаясь к элементам по индексу.

let arr = []
let index = 0
let el = prompt('Enter value to push into arr');
arr[index] = el;

while(el !== null){
    el = prompt('Enter value to push into arr');
    index += 1
    arr[index] = el;
}
console.log(arr)
*/

/*Создайте бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9. 
Код должен подсчитывать количество итераций и вывести это число с помощью alert.

let count = 0;
while(true){
    let s = Math.random();
    count++;
    if(s > 0.9){
        break;
    }
}
console.log(count)*/

/*Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for.
let result = 0;
let num = parseInt(prompt('Enter N value'));
for(i = 1; i <= num; i= i + 3){
    result += i;
}
console.log(result);*/

/*Сформировать строку " # # # # # " с помощью цикла for. 
Длина строки может быть четной и нечетной, и указывается в одном месте в коде.
let s=' '
let num = prompt('Enter string length');
for(i = 0; i < num; i++){
    s += '# ';
}
console.log(s)*/

/*Сформировать строку c помощью вложенных циклов. Для перевода строки используйте \n.
0123456789
0123456789
0123456789
0123456789
0123456789
0123456789
0123456789
0123456789
0123456789
0123456789


for(i = 0; i < 10; i++){
    let s = '';
    for(j = 0; j < 10; j++){
        s += j;
    }
    console.log(s);
}
*/
/*Сформируйте строку с шахматной доской из вложенных циклов. 
Для перевода строки используйте \n. Код должен поддерживать легкое изменение размеров доски.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#
#.#.#.#.#.#.

let n = 12;
let m = 24;

for(i = 0; i < n ; i++){
    let s = '';
    for(j = 0; j < m; j++){
        if(i % 2 === 0){
            if(j % 2 === 0){
                s += '.';
            }else{
                s += '#';
            }  
        }else{
            if(j % 2 === 0){
                s += '#';
            }else{
                s += '.';
            }  
        }
}
console.log(s)
}
*/

/*Сформируйте массив из N элементов, содержащий в себе кубы индексов, т. е:
[0,1,8,27,64...]
let n = 10;
let arr=[];
for(i = 0; i < n; i++){
    arr.push(i**3);
}
console.log(arr)*/

/*C помощью вложенного цикла сформируйте массив массивов "таблица умножения". 
Для инициализации вложенных массивов используйте
arr[i] = [] //в i-тый элемент массива заносится новый пустой массив
arr[5][6] должен быть равен, соответственно, 30, arr[7][2] == 14 и так далее.

let arr = [];
for(i = 1; i < 11; i ++){
    arr[i]=[]
    for(j = 1; j < 11; j++){
        arr[i][j] = (i)*(j);
    }
}

console.log(arr[7][2])*/
/*Сформировать следующую строку - треугольник:
.....#.....
....###....
...#####...
..#######..
.#########.
###########

let lines = line = 6, a='.', b='#';
while(line-- > 0) console.log(Array(line+1).join(a) + Array(2*(lines-line)).join(b) + Array(line+1).join(a));*/