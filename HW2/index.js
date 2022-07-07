/*Исследуйте код, найдите выражения в нём. Расставьте скобки так, что бы код не изменил своего поведения (работал так же как и сейчас). 
Объясните как и в каком порядке вычисляются выражения и подвыражения.
let a = 5;  
let b, c;

b = a * 5;  
console.log(b)
b = c = b/2; 
console.log(b)
console.log(c)*/

/*Сделайте несколько примеров кода, отсутствие ; в которых приводит к синтаксической ошибке

let a = 6 a = 7
let b=2 console.log(b++)*/


/*С помощью prompt спросить у пользователя его возраст и подсчитать год рождения. Год рождения вывести с помощью alert.
let age = parseInt(prompt("What's your age?")); 
let current_year = new Date().getFullYear();
let birthYear = current_year - age;
alert(birthYear);*/

/*С помощью prompt спросить у пользователя температуру в градусах Цельсия и перевести их в Фаренгейты и/или наоборот.
let tempCel = prompt('Enter temperature in Celsius degrees');
let tempFar = ((1.8 * tempCel) + 32);
alert(`${tempCel} °C equals to ${tempFar} °F`);*/

/*Сделайте калькулятор для расчета деления нацело двух чисел. Используйте Math.floor или альтернативы.
const numDev = (a,b) => console.log(Math.round(a/b));
numDev(5,3)*/

/*С помощью prompt узнайте число, введенное пользователем. С помощью if проверьте что число корректно преобразовано из строки. 
В случае ошибки выведите сообщение Выведите четное число или нет, используя if.

let num = prompt('Enter number');
if(num == parseInt(num)){
    (num % 2 === 0) ? alert('Number is even') : alert('Number is odd');
}else{
    alert('Enter number value');
}*/

/*Спросите у пользователя имя, и поприветствуйте его с помощью alert.
let userName = prompt("What's yout name?");
alert(`Hello, ${userName} !`)*/

/*Спросите у пользователя текст, и проверьте его на наличие некорректного слова или нескольких некорректных слов. 
Используйте метод indexOf (или includes) строки:

let word = prompt('Enter text');
let ask_frag = prompt('Enter word you are looking for');
function findFragment(word,ask_frag){
    if(word.includes(ask_frag)){
        alert('Text contain the fragment');
    } else {
        alert('The fragment is absent');
    }
}
findFragment(word,ask_frag);*/

/*Напишите код, который спрашивает те или иные вопросы с ответом "да"/"нет" с помощью confirm, 
и сохраняет ответы в переменных.
let yes;
let no;
let isHungry = confirm('Are you hungry?');
(isHungry) ? alert(yes = isHungry) : alert(no = isHungry);*/


/*Спросите у пользователя пол (confirm). Выведите с помощью alert "Вы мужчина" или "Вы женщина". 
Сделайте это оператором alert. Используйте тернарный оператор.

let userSex = confirm('Если Вы - мужчина, нажмите ОК');
(userSex) ? alert('Вы мужчина') : alert('Вы женщина');*/

/*Создайте массив с переменными из заданий Boolean и Boolean if.

let arr_bool = [yes,no];
console.log(arr_bool)*/

/*Напишите код, который складывает первые два элемента массива и 
заносит это в элемент с индексом 2. Исследуйте полученный массив.

let arr = [3, 4];
arr[2] = arr[0] + arr[1];
console.log(arr)*/

/*Что будет, если в предыдущий примере использовать строки вместо чисел? 
Сделайте версию для сложения 3х значений. Подумайте, зачем нужна эта возможность в наших примерах.

let str_arr = ['Планета Земля - ', 'наш Дім'];
str_arr[2] = str_arr[0] + str_arr[1];
console.log(str_arr);
console.log(str_arr[2]);*/

/*Найдите те или иные реальные объекты и найдите их свойства. Например у маркера это цвет, толщина, уровень зарядки (количество краски), у автомобиля - бренд, модель, мощность двигателя, цвет и так далее. Создайте объекты с помощью {}.
 В качестве образца посмотрите объект персоны из материала предыдущего занятия. 
 Поменяйте значения свойств в ваших объектах, используя [] и . и присвоения.

 const cat = {
    cat_name: "Zar",
    age: 3,
    color: "black",
    food: "Whiskas"
 }

 cat.cat_name = "Princess";
 cat['age'] = 4;
 console.log(cat)*/


 /*
 Добавьте условие отрицательного возраста в пример. 
 Расставьте недостающие (но синтаксически необязательные) фигурные скобки. Выкиньте лишнее из текущего кода
 let age = +prompt("Сколько вам лет?","");
 if (age < 18){
     alert("школьник");
 }
 else if (age > 18 && age < 30){
     alert("молодеж");
 }
 else if (age > 30 && age < 45){
     alert("зрелость");
 }
 else if (age > 45 && age < 60){
     alert("закат");
 }
 else if (age > 60){
     alert("как пенсия?");
 }
 else {
     alert("то ли киборг, то ли KERNESS"); 
 }
*/


/*Сделайте калькулятор, который позволит вам исходя из информации о количества этажей в доме и количества квартир на этаже находить подъезд и этаж определенной квартиры по её номеру. 
Например для 9этажного дома по 4 квартиры на этаж 81 квартира находится на 3м этаже третьего подъезда.

let app_num = prompt('Введите номер квартиры');
let entr_flat_num = prompt('Введите количество этажей в доме');
let floor_flat_num = prompt('Введите количество квартир на этаже');

function countAppDisposition(app_num, house_height, floor_flat_num){
    let entr_flat_num =  house_height * floor_flat_num;
    let entr_num = Math.ceil(app_num / entr_flat_num);
    let floor_num = Math.ceil((app_num - (Math.floor(app_num / entr_flat_num) * entr_flat_num))/floor_flat_num);
    let result = `Квартира ${app_num} расположена на ${floor_num}м этаже ${entr_num} подъезда `;
    return result;
}

alert(countAppDisposition(app_num,entr_flat_num, floor_flat_num));*/
