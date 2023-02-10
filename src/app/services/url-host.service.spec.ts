import { TestBed } from '@angular/core/testing';

import { UrlHostService } from './url-host.service';

describe('UrlHostService', () => {
  let service: UrlHostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlHostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
