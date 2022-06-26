/*Сделайте форму логина и пароля, которая по кнопке login будет сверять логин и пароль с ассоциативным массивом
и отображать в случае успеха зеленый div с поздравлением или красный div с текстом ошибки.*/

const credentials = {
    login: 'admin',
    password: 'qwerty',
};

let button = document.querySelector(".button")

button.addEventListener("click",checkInput)

function checkInput(){
    let login = document.getElementById('login')
    let password = document.getElementById('password')
    let loginForm = document.querySelector('.login-form')
    if(login.value === credentials.login && password.value === credentials.password){
        loginForm.style.borderColor = "green";
        loginForm.style.borderWidth = "2px";
        alert('Congratulations!')
    } else {
        alert('Wrong credentials!')
        loginForm.style.borderColor = "red";
        loginForm.style.borderWidth = "2px";
    }
}
