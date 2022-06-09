import { Component, OnInit } from '@angular/core';
import { Car, CarsService } from '../services/cars.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss'],
})
export class AllCarsComponent implements OnInit {

  cars: Car[] = [];

  constructor(
    private _carsService: CarsService,
  ) {
  }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this._carsService.getCars().subscribe(data => {
      this.cars = data;
    });
  }
}
