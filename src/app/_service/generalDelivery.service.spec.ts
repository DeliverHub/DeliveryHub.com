/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneralDeliveryService } from './generalDelivery.service';

describe('Service: GeneralDelivery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralDeliveryService]
    });
  });

  it('should ...', inject([GeneralDeliveryService], (service: GeneralDeliveryService) => {
    expect(service).toBeTruthy();
  }));
});
