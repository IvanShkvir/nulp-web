import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {
  name: string,
  second_name: string,
  username: string
}

export interface UpdateUser {
  name?: string,
  second_name?: string,
  password?: string
}

interface LoginData {
  username: string,
  password: string
}

interface LoginResponse {
  user: User,
  token: string
}

interface RegistrationData {
  username: string,
  second_name: string,
  name: string,
  password: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = 'http://127.0.0.1:5000/';

  constructor(
    private http: HttpClient,
  ) {
  }

  login(data: LoginData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${data.username}:${data.password}`),
      }),
    };

    return this.http.post<LoginResponse>(this.url + 'auth/login', {}, httpOptions);
  }

  registration(data: RegistrationData) {
    return this.http.post(this.url + 'auth/register', data);
  }

  logout() {
    return this.http.post(this.url + 'auth/logout', {});
  }

  updateProfile(data: User) {
    return this.http.put(this.url + 'user', data);
  }
}
