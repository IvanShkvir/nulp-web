import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../services/cars.service';
import { RentCarComponent } from '../rent-car/rent-car.component';
import { MatDialog } from '@angular/material/dialog';
import { Order, RentCarService } from '../services/rent-car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {

  @Input('car') car!: Car;

  @Input('order') order?: Order;

  @Output() deleteOrderEvent = new EventEmitter<number>();

  isOrderMod() {
    return this.order;
  }

  constructor(
    public dialog: MatDialog,
    private _rentCarService: RentCarService,
  ) {
  }

  ngOnInit(): void {
  }

  openRentWindow(car: Car) {
    this.dialog.open(RentCarComponent, {
      data: { car, order: this.order },
    });
  }

  removeOrder(order: Order | undefined) {
    this._rentCarService.removeOrder(<number>order?.id).subscribe(() => {
      alert('Order was deleted');
      this.deleteOrderEvent.emit(order?.id);
    });
  }

}
