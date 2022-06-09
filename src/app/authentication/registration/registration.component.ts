import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {RegistrationDialogComponent} from "./registration-dialog/registration-dialog.component";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class RegistrationComponent implements OnInit {
  isPasswordsEqual = true;

  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    second_name: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeat_password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(
    private auth: AuthenticationService,
    public dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  registration() {
    const data = this.registrationForm.value;
    if (data.password !== data.repeat_password) {
      this.isPasswordsEqual = false;

      setTimeout(() => {
        this.isPasswordsEqual = true;
      }, 3000)

      return
    }
    delete data['repeat_password'];
    this.auth.registration(data).subscribe({
      next: () => {
        this.dialog.open(RegistrationDialogComponent).afterClosed()
          .subscribe(() => {
            this.router.navigate(['login']);
          })
      },
      error: ()=>{
        alert("User with such username already exists");
      }
    });
  }

}
