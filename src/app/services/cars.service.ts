import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

export interface Car {
  id: number
  model: string,
  brand: string,
  status: 'available' | 'reserved'
  image: string
}

@Injectable({
  providedIn: 'root',
})
export class CarsService {

  url = 'http://127.0.0.1:5000/';

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
  ) {
  }

  getCars() {
    return this.http.get<Car[]>(this.url + 'cars');
  }

  getCar(id: number) {
    return this.http.get<Car>(this.url + `car/${id}`);
  }

}
