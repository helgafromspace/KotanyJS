//1. Сделать три ассоциативных массива a, b, c, в каждом из которых должны быть поля name и surname.

let obj1 = {
    name: 'John',
    surname: 'Doe',
}

let obj2 = {
    name: 'Jane',
    surname: 'Doe',
}

let obj3 = {
    name: 'Rob',
    surname: 'Doe'
}


/* 2.Добавьте некоторые другие поля (например age, fathername, sex (пол)) так, что бы набор полей отличался 
у разных объектов*/


obj1["age"] = 35;
obj2["isParent"] = true;
obj3.hobby = 'skateboarding';

/* 3. Проверьте наличие необязательных полей у каждого из этих массивов. 
Если поле найдено, выведите его с помощью alert. Проверку делайте по typeof или in в if.
Добавьте несколько ассоциативных массивов с персонами в обычный массив persons, например a,b,c. 
Так же добавьте персону литерально ({...}). 
Получится обычный массив с элементами-ассоциативными массивами с персонами*/
let obj4 = {
    name: 'Sandy',
}
let persons = [obj1,obj2,obj3,obj4];


/*
for(let obj of persons){
    for(let key in obj){
        if(key!=='surname' && key!== 'name'){
            alert(key);
        }
    }
}
*/

/* 4. Сделайте цикл, который выводит весь массив persons в форме объектов console.log(persons[i])


for(let person of persons){
    console.log(person)
}*/

/* 5. Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны.

for(let person of persons){
    console.log(`${person.name} ${person.surname}`);
}
*/

/* 6. Сделайте цикл, который выводит весь массив persons,
 но только значения всех полей из объектов. Используйте вложенный цикл


 for(let person of persons){
    for(let key in person){
        console.log(person[key]);
    }
 }
 */


 /* 7. Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО.
 Учтите, что поле fathername не является обязательным.

for(let person of persons){
    if(person.name && person.surname){
        person.fullName = '';
    }
}
*/


/* 8. Создайте JSON-строку из persons

let jsonData = JSON.stringify(persons);
console.log(jsonData)*/

/* 9. Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons

let newPerson = JSON.parse('{"name":"John","surname":"Doe","age":35}');
persons.push(newPerson)
console.log(persons)*/

/* 10. Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. 
Имя и Фамилия - колонки.


let str = "<table border='1'>"
str += `<tr><th>name</th><th>surname</th></tr>`
for(let person of persons){
    str += `<tr><td>${person.name}</td><td>${person.surname}</td></tr>`
}
str += "</table>"
document.write(str)*/


/* 11. Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. 
Имя и Фамилия, а так же другие поля при наличии. Колонки: поля, строки таблицы - персоны.

let str = "<table border='1'>";
let arrStr = [];
str +=`<tr><td></td>`
for(let person of persons){
    for(let key in person){
        if(!str.includes(key)){
            str += `<td>${key}</td>`;
            arrStr.push(key)
        }
    }
}
str += `</tr>`

for(let i=0; i < persons.length; i++){
    str += `<tr><td> person ${i+1}</td>`
    let current = persons[i];
    for(let key of arrStr){
        if(current[key]===undefined){
            current[key] = '';
        }
        str += `<td> ${current[key]}</td>`;
    }
    str += `</tr>`
}
str += "</table>"
console.log(str)
document.write(str)
*/

/* 11. Добавьте к предыдущему примеру раскраску через строчку используя другой стиль тэга tr.
let str = "<table border='1'>";
let arrOfKeys = [];
str +=`<tr><th></th>`
for(let person of persons){
    for(let key in person){
        if(!str.includes(key)){
            str += `<th>${key}</th>`;
            arrOfKeys.push(key)
        }
    }
}
str += `</tr>`

for(let i=0; i < persons.length; i++){
    let color;
    if(i % 2 === 0){
        color = `style="background-color:#dcb7e8"`;
    } else {
        color = '';
    }
    str += `<tr ${color}><td> person ${i+1}</td>`
    let current = persons[i];
    for(let key of arrOfKeys){
        if(current[key]===undefined){
            current[key] = '';
        }
        str += `<td> ${current[key]}</td>`;
    }
    str += `</tr>`
}
str += "</table>"
console.log(str)
document.write(str)*/
/*12. Напишите код, который используя деструктуризацию положит:
четные числа в переменные even1, even2,
нечетные в odd1, odd2, odd3,
буквы в отдельный массив


let arr = [1,2,3,4,5, "a", "b", "c"];
let[even1,even2] = arr.filter(item => item % 2 === 0);
let[odd1,odd2,odd3] = arr.filter(item => item % 2 !== 0);
let letters = arr.filter(item => typeof(item) !== 'number'); 
console.log(even1, even2);
console.log(odd1,odd2,odd3);
console.log(letters);*/

/* 13. let arr = [1, "abc"]

напишите код, который используя деструктуризацию положит:
число в переменную number
букву a в переменную s1
букву b в переменную s2
букву c в переменную s3

let arr = [1, "abc"]
let[num,letter] = arr;
//let[num] = arr.filter(item => typeof(item) === 'number');
console.log(num)
//let [s1,s2,s3] = arr.filter(item => typeof(item) !== 'number').join().split('')
let[s1,s2,s3] = letter;
console.log(s1,s2,s3);*/

/* 14. извлеките используя деструктуризацию имена детей в переменные name1 и name2
let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]}


//let[name1,name2] = [obj.children[0].name, obj.children[1].name];

let{children} = obj;
let[objName1,objName2] = children;
let{name: name1} = objName1;
let{name: name2} = objName2;
console.log(name1);
console.log(name2);
*/

/* 15. извлеките используя деструктуризацию объектов два первых элемента и длину массива в переменные a, b и length


let arr = [1,2,3,4,5,6,7,10];
let[a,b,length] = [arr[0],arr[1],arr.length];
console.log(a);
console.log(b);
console.log(length);*/

/*16. Сделать HTML-конструктор из древовидной структуры:
<table border=1><tr><td>some text</td><td>some text 2</td></tr></table>


let someTree = {
    tagName: "table", //html tag
    subTags: [ //вложенные тэги
        {
                    tagName: "tr",
                    subTags: [
                        {
                            tagName: "td",
                            text: "some text",
                        },
                        {
                            tagName: "td",
                            text: "some text 2",
                        }
                    ]
        }
    ],
    attrs: 
    {
        border: 1,
    },
}

let someTree = {
    tagName: "table", //html tag
    subTags: [ //вложенные тэги
        {
                    tagName: "tr",
                    subTags: [
                        {
                            tagName: "td",
                            text: "some text",
                        },
                        {
                            tagName: "td",
                            text: "some text 2",
                        },                        {
                            tagName: "td",
                            text: "some text 3",
                        }
                    ]
        },
        {
            tagName: "tr",
            subTags: [
                {
                    tagName: "td",
                    text: "some text 4",
                },
                {
                    tagName: "td",
                    text: "some text 5",
                },                        {
                    tagName: "td",
                    text: "some text 6",
                }
            ]
}
    ],
    attrs: 
    {
        border: 1,
    },
}*/


// first way
/*
let str ='';
function outRecursion(obj){
    if(obj.text){
        str += `<${obj.tagName}>${obj.text}</${obj.tagName}>`;
    }else{
        if(obj.attrs){
            str += `<${obj.tagName} ${Object.keys(obj.attrs)}=${obj.attrs.border}>`;
        }else{
            str += `<${obj.tagName}>`;
        }
    }
    if(obj.subTags){
        for(let i=0; i < obj.subTags.length;i++){
            outRecursion(obj.subTags[i]);
        }

    }
    str += `</${obj.tagName}>`; 
}

outRecursion(someTree)
console.log(str)
document.write(str)
*/
// second way 

/*let str = `<${someTree.tagName} ${Object.keys(someTree.attrs)}=${someTree.attrs.border}>`;

function out(someTree){
    if(someTree.subTags){
        for(i=0; i < someTree.subTags.length; i++){
            let current = someTree.subTags[i];
            str += `<${current.tagName}>`;
            if(current.subTags){
                for(let el of current.subTags){
                    str += `<${el.tagName}>${el.text}</${el.tagName}>`;  
                }   
            }
        str += `</${current.tagName}>`;
        }   
    }
    str += `</${someTree.tagName}>`;
}

out(someTree);
console.log(str)
document.write(str)*/


/*extended tree for additional check

let someTree = {
    tagName: "table", //html tag
    subTags: [ //вложенные тэги
        {
                    tagName: "tr",
                    subTags: [
                        {
                            tagName: "td",
                            text: "some text",
                        },
                        {
                            tagName: "td",
                            text: "some text 2",
                        },                        {
                            tagName: "td",
                            text: "some text 3",
                        }
                    ]
        },
        {
            tagName: "tr",
            subTags: [
                {
                    tagName: "td",
                    text: "some text 4",
                },
                {
                    tagName: "td",
                    text: "some text 5",
                },                        {
                    tagName: "td",
                    text: "some text 6",
                }
            ]
}
    ],
    attrs: 
    {
        border: 1,
    },
}*/
