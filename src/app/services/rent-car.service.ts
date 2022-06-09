import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './cars.service';

export interface Order {
  id?: number,
  start_date: string | null,
  end_date: string | null,
  is_complete: boolean,
  user_id: number,
  car_id: number
}

@Injectable({
  providedIn: 'root',
})
export class RentCarService {

  url = 'http://127.0.0.1:5000/';

  constructor(
    private http: HttpClient,
  ) {
  }

  createOrder(data: Order) {
    return this.http.post(this.url + 'orders', data);
  }

  getAllUserOrders() {
    return this.http.get<Order[]>(this.url + 'orders/user');
  }

  updateOrder(id: number, order: Order) {
    return this.http.put(this.url + `order/${id}`, order);
  }

  removeOrder(id:number){
    return this.http.delete(this.url + `order/${id}`);
  }
}
