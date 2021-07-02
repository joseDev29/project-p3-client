import { TestBed } from '@angular/core/testing';

import { AdminBlockService } from './admin-block.service';

describe('AdminBlockService', () => {
  let service: AdminBlockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBlockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
