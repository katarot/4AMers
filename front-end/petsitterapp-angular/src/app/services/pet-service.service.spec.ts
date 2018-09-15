import { TestBed, inject } from '@angular/core/testing';

import { PetServiceService } from './pet-service.service';

describe('PetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetServiceService]
    });
  });

  it('should be created', inject([PetServiceService], (service: PetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
