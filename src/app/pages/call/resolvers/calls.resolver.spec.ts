import { TestBed } from '@angular/core/testing';

import { CallsResolver } from './calls.resolver';

describe('CallsResolver', () => {
  let resolver: CallsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CallsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
