import { TestBed } from '@angular/core/testing';

import { RentCarService } from './rent-car.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RentCarService', () => {
  let service: RentCarService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RentCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
