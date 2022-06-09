import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, UpdateUser } from '../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../authentication/login/login.component.scss'],
})
export class ProfileComponent implements OnInit {

  profileForm !: FormGroup;

  isPasswordsEqual = true;

  user!: UpdateUser;

  constructor(
    private auth: AuthenticationService,
    private cookieService: CookieService,
  ) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user'));
    this.createForm(this.user);
  }

  createForm(user: UpdateUser) {
    this.profileForm = new FormGroup({
      second_name: new FormControl(user.second_name, []),
      name: new FormControl(user.name, []),
      password: new FormControl('', [Validators.minLength(8)]),
      repeat_password: new FormControl('', [Validators.minLength(8)]),
    });
  }

  updateProfile() {
    const data = this.profileForm.value;
    if (data.password !== data.repeat_password) {
      this.isPasswordsEqual = false;

      setTimeout(() => {
        this.isPasswordsEqual = true;
      }, 3000);

      return;
    }
    delete data['repeat_password'];

    if (data.password === '') {
      delete data.password;
    }

    this.auth.updateProfile(data).subscribe(() => {
      alert('Дані успішно змінені )');
      this.cookieService.set('user', JSON.stringify(Object.assign(this.user, data)));
    });

  }

}
