import { TestBed } from '@angular/core/testing';

import { AdminPropertyService } from './admin-property.service';

describe('AdminPropertyService', () => {
  let service: AdminPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
