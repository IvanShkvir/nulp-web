import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const cookieMock = {
    get: (str: string) => {
      if (str === 'user') {
        return JSON.stringify({
          name: 'test',
          second_name: 'test',
        });
      }
      return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    },
    set: () => {
      return true;
    },

  };

  const authMock = {
    updateProfile: (data: any) => {
      return of(true);
    },

  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{
        provide: CookieService,
        useValue: cookieMock,
      },
        {
          provide: AuthenticationService,
          useValue: authMock,
        }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set user data into profile form after component init', () => {
    const formValues = component.profileForm.value;

    expect(formValues.name).toEqual('test');
    expect(formValues.second_name).toEqual('test');
  });

  it('should run cookies.set function after correct profile updating',()=>{
    const cookieSpy = spyOn(cookieMock,'set');

    component.updateProfile();

    expect(cookieSpy).toHaveBeenCalled();
  })
});
