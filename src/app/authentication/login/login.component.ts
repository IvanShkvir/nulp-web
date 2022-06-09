import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    private auth: AuthenticationService,
    private cookieService: CookieService,
    private router: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.cookieService.set('token', data.token,60);
        this.cookieService.set('user', JSON.stringify(data.user),60);

        this.router.navigate(['']);
      },
      error: () => {
        this.dialog.open(LoginDialogComponent).afterClosed()
          .subscribe(() => {
            this.router.navigate(['login']);
          });
      },
    });
  }


}
