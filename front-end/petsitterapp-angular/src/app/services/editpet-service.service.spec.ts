import { TestBed, inject } from '@angular/core/testing';

import { EditpetServiceService } from './editpet-service.service';

describe('EditpetServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditpetServiceService]
    });
  });

  it('should be created', inject([EditpetServiceService], (service: EditpetServiceService) => {
    expect(service).toBeTruthy();
  }));
});
