import { Component, OnInit } from '@angular/core';
import { Car, CarsService } from '../services/cars.service';
import { Order, RentCarService } from '../services/rent-car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  carAndOrders: {
    car: Car,
    order: Order
  }[] = [];

  constructor(
    private _carsService: CarsService,
    private _rentCarService: RentCarService,
  ) {
  }

  ngOnInit(): void {
    this.getAllUserCars();
  }

  getAllUserCars() {
    this._rentCarService.getAllUserOrders().subscribe(data => {
      data.forEach(order => {
        this._carsService.getCar(order.car_id).subscribe(car => {
          this.carAndOrders.push({
            car,
            order,
          });
        });
      });
    });
  }

  onDelete(orderId: number) {
    this.carAndOrders = this.carAndOrders.filter((elem) => elem.order.id != orderId,
    );
  }

}
