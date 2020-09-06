import { TestBed } from '@angular/core/testing';

import { BodenbearbeitungService } from './bodenbearbeitung.service';

describe('BodenbearbeitungService', () => {
  let service: BodenbearbeitungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodenbearbeitungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
