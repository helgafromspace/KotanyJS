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
    let message = document.querySelector('.hidden_message')
    if(login.value === credentials.login && password.value === credentials.password){
        loginForm.style.borderColor = "green";
        loginForm.style.borderWidth = "2px";
        message.style.display = "block";
        message.style.color = "green"
        message.innerHTML = "Congratulations"
    } else {
        loginForm.style.borderColor = "red";
        loginForm.style.borderWidth = "2px";
        message.style.display = "block";
        message.style.color = "red"
        if(login.value !== credentials.login){
            message.innerHTML = "Wrong credentials! Incorrect login!";
        }else{
            message.innerHTML = "Wrong credentials! Incorrect password!";
        }
    }
}
