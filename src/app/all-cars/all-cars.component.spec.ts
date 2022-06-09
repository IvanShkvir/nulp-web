import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCarsComponent } from './all-cars.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CarsStoreComponent', () => {
  let component: AllCarsComponent;
  let fixture: ComponentFixture<AllCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCarsComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
