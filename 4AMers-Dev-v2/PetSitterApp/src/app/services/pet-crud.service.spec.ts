import { TestBed, inject } from '@angular/core/testing';

import { PetCrudService } from './pet-crud.service';

describe('PetCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetCrudService]
    });
  });

  it('should be created', inject([PetCrudService], (service: PetCrudService) => {
    expect(service).toBeTruthy();
  }));
});
