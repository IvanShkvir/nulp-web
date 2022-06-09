import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCarComponent } from './rent-car.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RentCarComponent', () => {
  let component: RentCarComponent;
  let fixture: ComponentFixture<RentCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentCarComponent],
      imports: [MatDialogModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
