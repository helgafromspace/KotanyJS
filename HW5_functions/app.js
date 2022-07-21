/*1) Напишите функцию a, которая просто является коротким именем для alert*/
function a(arg){
    alert(arg);
}
//a("Привет!")


/* 2) Напишите функцию cube, которая возвращает число в третьей степени*/

function cube(x){
    return x**3;
}
//console.log(cube(3));



/* 3) Напишите функцию avg2, которая рассчитывает среднюю для двух чисел:
формула для подсчета среднего: (a + b) / 2*/

function avg(a,b){
    return (a + b) / 2;
}
//console.log(avg(4,5));*/

/* 4) Напишите функцию sum3 для суммирования 3 чисел:*/

function sumOfNumbers(...args){
    return args.reduce((total,item) => total + item);
}
let result = sumOfNumbers(4,5,6);
//console.log(result);

/* 5) Напишите функцию intRandom, которая принимает два параметра:
 нижнюю и верхнюю границу, и возвращает целое случайное число из этого диапазона включительно:
 Обратите внимание, что если передан один параметр (intRandom(10) в примере выше), то функция работает 
 как будто первый параметр равен 0, а переданный параметр становится вторым параметром (intRandom(0,10))*/

 function intRandom(max, min = 0){
    let result = Math.floor(min + Math.random() * (max + 1 - min));
    return result;
 }
 //console.log(intRandom(10));*/

 /* 6) Сделайтей функцию, которая приветствует всех, кто передан в качестве параметров.*/

 function greetAll(...args){
    let str = 'Hello';
    for(let person of args){
        str += `, ${person}`;
    }
    alert(str);
 }
 
 //console.log(greetAll('Spiderman','SuperMario','Donald Duck'))*/

 /* 7) Напишите функцию sum, которая сумирует любое количество параметров*/

 function sum(...args){
    let result = args.reduce((total,num)=> total + num);
    return result;
 }

 //console.log(sum(1,2,3,5,40))*/

 /*8) Всё предыдущие функции и примеры с ними объедините в функции, которые вызывайте в switch по имени задания:

 let sample = prompt('Введите номер задания');

 switch(sample.toLowerCase()){
    case '1': console.log(a("Привет!"))
    break
    case '2': console.log(cube(3));
    break
    case '3': console.log(avg(4,5));
    break
    case '4': console.log(sumOfNumbers(4,5,6));
    break
    case '5': console.log(intRandom(10));
    break
    case '6': console.log(greetAll('Spiderman','SuperMario','Donald Duck'));
    break
    case '7': console.log(sum(1,2,3,5,40));
    break
 }*/

/*Используйте ассоциативный массив вместо switch*/

let obj = {
    '1' : a("Привет!"),
    '2' : cube(3),
    '3' : avg(4,5),
    '4' : sumOfNumbers(4,5,6),
    '5' : intRandom(10),
    '6' : greetAll('Spiderman','SuperMario','Donald Duck'),
    '7' : sum(1,2,3,5,40)
}

let sample = prompt('Введите номер задания');

for(let key in obj){
    if(key === sample){
        console.log(obj[key]);
    }
}


/*Сделайте обобщенную функцию сортировки массива. 
Функция позволяет отсортировать любой набор данных по имени поля (второй параметр). 
Третьим параметром идет необязательный Boolean, который в случае true делает сортировку по возрастанию, в случае false - по убыванию. По умолчанию (без третьего параметра) происходит сортировка по возрастанию.

var persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
]

sort(persons, "age"); //сортирует по возрасту по возрастанию
sort(persons, "name", false); //сортирует по имени по убыванию

let persons = [
    {name: "Иван", age: 17},
    {name: "Мария", age: 35},
    {name: "Алексей", age: 73},
    {name: "Яков", age: 12},
]

function sortFunc(obj, param, boolean = true){
    if(boolean === true){
        if(param === 'age'){
            return obj.sort((a,b) => a.age > b.age ? 1 : -1);
        } else{
            return obj.sort((a,b) => a.name > b.name ? 1 : -1)
        }
    }else {
        if(param === 'age'){
            return obj.sort((a,b) => a.age < b.age ? 1 : -1);
        } else{
            return obj.sort((a,b) => a.name < b.name ? 1 : -1)
        }
    }
    
}
console.log(sortFunc(persons, "age"));
console.log(sortFunc(persons,"name",false));*/

/*Используя Array.map приведите все строки в массиве к числу. Элементы других типов оставьте как есть:
let arr = ["1", {}, null, undefined, "500", 700];
let arr2 = arr.map(a => (typeof(a)==='string') ? + a : a);
console.log(arr2)*/


/*Получите произведение всех чисел в массиве, используя Array.reduce. 
Не обрабатывайте типы данных, не являющиеся числом.
["0", 5, 3, "string", null]
результат должен быть 15

let arr = ["0", 5, 3, "string", null];
let arr2 = arr.reduce((total,item) => (typeof(item) === 'number') ? total * item : total, 1);
console.log(arr2)*/

/*Напишите свою реализацию Array.filter для объектов:
var phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};

filter(phone,(key,value) => key == "color" || value == 2);
должно вернуть
{
    ram: 2,
    color: "black",
}

let phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};


function filterObj(obj){
    let objArray = Object.entries(obj);
    let filtered = Object.fromEntries(objArray.filter(([key, value]) => typeof value === 'number' || key === 'brand'));
    return filtered;
}


console.log(filterObj(phone))

*/

/*Напишите свою реализацию Array.map для объектов:

map({name: "Иван", age: 17},function(key,value){
    var result = {};
    result[key+"_"] = value + "$";
    return result;
}) //должен вернуть {name_: "Иван$", age_: "17$"}
"Напишите свою реализацию" значит написать function map.... и её тело, после чего код выше заработает

let obj = {
    name: "Иван", 
    age: 17
}

function objMap(obj){
    let result = {};
    Object.entries(obj).map(function([key,value]){
    result[key + '_'] = value +'$';
    });
    return result;
}

console.log(objMap(obj));*/


 /*Напишите функцию, который будет считать сумму арифметической прогрессии рекурсивно.

function recurseSum(n,step){
    if(n === 0) return 0;
    if (n == 1) return 1;
    return n + recurseSum(n - step,step);
}
console.log(recurseSum(5,1))*/