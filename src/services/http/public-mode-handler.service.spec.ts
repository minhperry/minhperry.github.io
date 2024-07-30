import { TestBed } from '@angular/core/testing';

import { PublicModeHandlerService } from './public-mode-handler.service';

describe('PublicModeHandlerService', () => {
  let service: PublicModeHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicModeHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
