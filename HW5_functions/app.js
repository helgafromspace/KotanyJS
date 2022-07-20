/*1) Напишите функцию a, которая просто является коротким именем для alert*/
function a(arg){
    alert(arg);
}
a("Привет!") // вызывает alert("Привет!")


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
//console.log(avg(4,5));

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
 //console.log(intRandom(10));

 /* 6) Сделайтей функцию, которая приветствует всех, кто передан в качестве параметров.*/

 function greetAll(...args){
    let str = 'Hello';
    for(let person of args){
        str += `, ${person}`;
    }
    alert(str);
 }
 
 //console.log(greetAll('Spiderman','SuperMario','Donald Duck'))

 /* 7) Напишите функцию sum, которая сумирует любое количество параметров*/

 function sum(...args){
    let result = args.reduce((total,num)=> total + num);
    return result;
 }

 //console.log(sum(1,2,3,5,40))

 /*8) Всё предыдущие функции и примеры с ними объедините в функции, которые вызывайте в switch по имени задания:*/

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
 }
