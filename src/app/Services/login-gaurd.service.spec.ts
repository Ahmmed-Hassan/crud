/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginGaurdService } from './login-gaurd.service';

describe('Service: LoginGaurd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGaurdService]
    });
  });

  it('should ...', inject([LoginGaurdService], (service: LoginGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
