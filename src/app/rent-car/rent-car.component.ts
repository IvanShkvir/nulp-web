import { Component, Inject, OnInit } from '@angular/core';
import { Car } from '../services/cars.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';
import { Order, RentCarService } from '../services/rent-car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.scss'],
  providers: [DatePipe],
})
export class RentCarComponent implements OnInit {
  myFilter = (d: Date | null): boolean => {
    if (d !== null) {
      return d > new Date(Date.now());
    }
    return false;
  };

  date: Date | null = null;

  isUpdateView() {
    return this.data.order;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      car: Car,
      order?: Order
    },
    public dialogRef: MatDialogRef<RentCarComponent>,
    private cookieService: CookieService,
    private router: Router,
    private datePipe: DatePipe,
    private _rentCarService: RentCarService,
  ) {
  }

  ngOnInit(): void {

  }

  setDate(event: MatDatepickerInputEvent<Date>) {
    this.date = event.value;
  }

  rentCar() {
    const user_id = JSON.parse(this.cookieService.get('user')).id;
    const car_id = this.data.car.id;
    const order: Order = {
      user_id,
      car_id,
      start_date: this.datePipe.transform(new Date(Date.now()), 'yyyy-MM-dd'),
      end_date: this.datePipe.transform(this.date, 'yyyy-MM-dd'),
      is_complete: false,
    };

    if (!this.isUpdateView()) {
      this._rentCarService.createOrder(order).subscribe({
        next: () => {
          alert('Successful');
          this.dialogRef.close();
          this.router.navigate(['home']);
        },
        error: () => {
          alert('Car is reserved');
        },
      });
    } else {
      this._rentCarService.updateOrder(<number>this.data.order?.id,order).subscribe({
        next: () => {
          alert('Successful');
          this.dialogRef.close();
          this.router.navigate(['home']);
        },
        error: () => {
          alert('Error');
        },
      });
    }
  }
}
