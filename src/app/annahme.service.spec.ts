import { TestBed } from '@angular/core/testing';

import { AnnahmeService } from './annahme.service';

describe('AnnahmeService', () => {
  let service: AnnahmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnahmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
