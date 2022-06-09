import { LoginComponent } from '../authentication/login/login.component';
import { RegistrationComponent } from '../authentication/registration/registration.component';
import { Routes } from '@angular/router';
import { AllCarsComponent } from '../all-cars/all-cars.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuard } from '../services/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '', component: AllCarsComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', canActivate: [AuthGuard] },
];
