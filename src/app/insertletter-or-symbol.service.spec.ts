import { TestBed } from '@angular/core/testing';

import { InsertletterOrSymbolService } from './insertletter-or-symbol.service';

describe('InsertletterOrSymbolService', () => {
  let service: InsertletterOrSymbolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertletterOrSymbolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
