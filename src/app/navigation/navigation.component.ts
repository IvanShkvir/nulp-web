import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  isUserLoggedIn = false;
  userId = 0;

  constructor(
    private cookieService: CookieService,
    private auth: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.cookieService.get('token');
  }

  getUserCookie() {
    return this.cookieService.get('token');
  }

  logOut() {
      this.auth.logout().subscribe(()=>{
        alert('You have successfully logout');
        this.cookieService.deleteAll();

        this.router.navigate(['login']);
      })
  }

}
