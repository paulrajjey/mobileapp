import { TestBed } from '@angular/core/testing';

import { RestcallapiService } from './restcallapi.service';

describe('RestcallapiService', () => {
  let service: RestcallapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestcallapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
