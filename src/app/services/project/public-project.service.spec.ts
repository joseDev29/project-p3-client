import { TestBed } from '@angular/core/testing';

import { PublicProjectService } from './public-project.service';

describe('PublicProjectService', () => {
  let service: PublicProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
