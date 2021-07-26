import { TestBed } from '@angular/core/testing';

import { AuthenticatedBothGuard } from './authenticated-both.guard';

describe('AuthenticatedBothGuard', () => {
  let guard: AuthenticatedBothGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticatedBothGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
