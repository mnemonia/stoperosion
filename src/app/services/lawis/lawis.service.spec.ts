import { TestBed } from '@angular/core/testing';

import { LawisService } from './lawis.service';

describe('LawisService', () => {
  let service: LawisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
