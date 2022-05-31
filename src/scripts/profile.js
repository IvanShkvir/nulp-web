import * as cookie from './cookie.mjs'

const API = 'http://127.0.0.1:5000';

const name = document.querySelector('#name');
const second_name = document.querySelector('#surname');
const username = document.querySelector('#username');
const npassword = document.querySelector('#npassword')
const rpassword = document.querySelector('#rpassword')

const authToken = cookie.getAuthToken();

try {
    const user = JSON.parse(cookie.getCookie('user'));
    name.value = user.name;
    second_name.value = user.second_name;
    username.value = user.username;
} catch {
    alert('Not authorized');
    window.location.replace('login.html');
}



document.querySelector('.submit-btn').onclick = function (event) {
    event.preventDefault();
    if (!validate()) {
        return;
    }

    const usernameValue = username.value;
    const nameValue = name.value;
    const second_nameValue = second_name.value;
    const npasswordlValue = npassword.value;

    const data = {
        'username': usernameValue,
        'name': nameValue,
        'second_name': second_nameValue,
    }

    if (npasswordlValue !== '') {
        data['password'] = npasswordlValue
    }

    fetch(API + '/user', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status === 200) {
            cookie.setCookie('user', JSON.stringify(data), 60);
            window.location.replace('profile.html');
            alert('User was successfully updated');
            return response.json();
        }
        throw response.status;
    }).catch((error) => {
        console.log(error);
        if (error === 401) {
            alert('JWT token was not provided or it is invalid');
        }
        if (error === 404) {
            alert('User is not found.');
        }
    });
}

document.querySelector('.logout').onclick = function (event) {
    event.preventDefault();
    const data = {}

    fetch(API + '/auth/logout', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status === 200) {
            cookie.clearCookie('access_token');
            cookie.clearCookie('user');
            window.location.replace('login.html');
            return response.json();
        }
        throw response.status;
    }).catch((error) => {
        if (error === 401) {
            alert('JWT token was not provided or it is invalid');
        }
    });

}

function validate() {
    let status = true

    if (username.value === '') {
        username.placeholder = 'Write your name';
        status = false;
    }

    if (name.value === '') {
        name.placeholder = 'Write your name';
        status = false;
    }

    if (second_name.value === '') {
        second_name.placeholder = 'Write your surname';
        status = false;
    }

    if (npassword.value !== rpassword.value) {
        npassword.placeholder = 'Password do not match';
        rpassword.placeholder = 'Password do not match';
        npassword.value = '';
        rpassword.value = '';
        status = false;
    }

    return status;
}

