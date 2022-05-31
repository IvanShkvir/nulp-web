import * as cookie from "./cookie.mjs";

const API = 'http://127.0.0.1:5000';

const name = document.querySelector('#name');
const surname = document.querySelector('#surname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const rpassword = document.querySelector('#repeat-password');

document.querySelector('.submit-btn').onclick = function (event) {
    event.preventDefault();

    if (!validate()) {
        return;
    }

    const nameValue = name.value;
    const second_nameValue = surname.value;
    const usernameValue = username.value;
    const passwordValue = password.value;

    const data = {
        name: nameValue,
        second_name: second_nameValue,
        username: usernameValue,
        password: passwordValue
    }


    fetch(API + '/auth/register', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status === 200) {
            window.location.replace('login.html');
            return response.json();
        }
        throw response.status;
    }).catch((error) => {
        console.log(error);
        if (error === 400) {
            alert('User with such username already exists');
        }
        if (error === 403) {
            alert('Try again');
        }
    });
}

function validate() {
        let status = true

    if (password.value < 8) {
        password.value = '';
        password.placeholder = 'Incorrect password';
        status = false;
    }

    if (username.value === '') {
        username.placeholder = 'Write your name';
        status = false;
    }

    if (name.value === '') {
        name.placeholder = 'Write your name';
        status = false;
    }

    if (surname.value === '') {
        surname.placeholder = 'Write your surname';
        status = false;
    }

    if (password.value !== rpassword.value ) {
        password.placeholder = 'Password do not match';
        rpassword.placeholder = 'Password do not match';
        password.value = '';
        rpassword.value = '';
        status = false;
    }

    return status;
}
