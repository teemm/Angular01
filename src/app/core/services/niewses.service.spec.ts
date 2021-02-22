import { TestBed } from '@angular/core/testing';

import { NiewsesService } from './niewses.service';

describe('NiewsesService', () => {
  let service: NiewsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NiewsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
