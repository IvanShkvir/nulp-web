import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login/login.component";
import { RegistrationComponent} from "./registration/registration.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';
import { RegistrationDialogComponent } from './registration/registration-dialog/registration-dialog.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginDialogComponent,
    RegistrationDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [LoginComponent, RegistrationComponent]
})
export class AuthenticationModule {
}
