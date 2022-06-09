import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { routes } from './navigation.router';
import { AllCarsComponent } from '../all-cars/all-cars.component';
import { RentCarComponent } from '../rent-car/rent-car.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { AllCarsModule } from '../all-cars/all-cars.module';
import { HomeModule } from '../home/home.module';
import { ProfileModule } from '../profile/profile.module';


@NgModule({
  declarations: [
    NavigationComponent,
    RentCarComponent],
  exports: [
    NavigationComponent, RouterModule,
  ],
  imports: [
    CommonModule,
    AuthenticationModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    AllCarsModule,
    HomeModule,
    ProfileModule
  ],
})
export class NavigationModule {
}
