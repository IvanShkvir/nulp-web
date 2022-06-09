import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarModule } from '../car/car.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CarModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
