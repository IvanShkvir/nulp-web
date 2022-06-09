import { TestBed } from '@angular/core/testing';

import { CarsService } from './cars.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CarService', () => {
  let service: CarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(CarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
