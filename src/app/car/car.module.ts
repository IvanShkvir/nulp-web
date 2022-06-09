import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [CarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [CarComponent],
})
export class CarModule {
}
