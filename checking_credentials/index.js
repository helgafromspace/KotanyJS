/*Сделайте форму логина и пароля, которая по кнопке login будет сверять логин и пароль с ассоциативным массивом
и отображать в случае успеха зеленый div с поздравлением или красный div с текстом ошибки.*/

const credentials = {
    login: 'admin',
    password: 'qwerty',
};

let button = document.querySelector('.button');

button.addEventListener('click',checkInput);

let login = document.querySelector('#login');
let password = document.querySelector('#password');
let loginForm = document.querySelector('.login-form');
let message = document.querySelector('.hidden_message');

function checkInput(){
    if(login.value.toLowerCase() === credentials.login && password.value.toLowerCase() === credentials.password){
        loginForm.style.borderColor = 'green';
        loginForm.style.borderWidth = '2px';
        message.style.display = 'block';
        message.style.color = 'green';
        message.innerHTML = 'Congratulations';
    } else {
        loginForm.style.borderColor = 'red';
        loginForm.style.borderWidth = '2px';
        message.style.display = 'block';
        message.style.color = 'red';
        message.innerHTML = 'Wrong credentials!';
    }
}
