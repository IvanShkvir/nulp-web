import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCarsComponent } from './all-cars.component';
import { CarModule } from '../car/car.module';


@NgModule({
  declarations: [AllCarsComponent],
  imports: [
    CommonModule,
    CarModule,
  ],
  exports: [AllCarsComponent],
})
export class AllCarsModule {
}
