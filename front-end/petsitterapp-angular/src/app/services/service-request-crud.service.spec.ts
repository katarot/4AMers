import { TestBed, inject } from '@angular/core/testing';

import { ServiceRequestCrudService } from './service-request-crud.service';

describe('ServiceRequestCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceRequestCrudService]
    });
  });

  it('should be created', inject([ServiceRequestCrudService], (service: ServiceRequestCrudService) => {
    expect(service).toBeTruthy();
  }));
});
