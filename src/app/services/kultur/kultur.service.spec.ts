import { TestBed } from '@angular/core/testing';

import { KulturService } from './kultur.service';

describe('KulturService', () => {
  let service: KulturService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KulturService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
