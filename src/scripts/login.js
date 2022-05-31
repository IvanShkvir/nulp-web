import * as cookie from './cookie.mjs'

const API = 'http://127.0.0.1:5000';

document.querySelector('.submit-btn').onclick = function (event) {
    event.preventDefault();

    const user = {
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value
    }

    fetch(API + '/auth/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': `Basic ${btoa(user.username + ':' + user.password)}`
        }
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        }
        throw response.status;
    }).then(data => {
        cookie.setCookie('access_token', data['token'], 60);
        cookie.setCookie('user', JSON.stringify(data['user']), 60);
        window.location.replace('profile.html');
    }).catch((error) => {
        if (error === 403) {
            alert("Wrong password or user with this email doesn't exist");
        }
    });
}
