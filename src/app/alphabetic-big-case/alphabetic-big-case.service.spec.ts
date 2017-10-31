import { TestBed, inject } from '@angular/core/testing';

import { AlphabeticBigCaseService } from './alphabetic-big-case.service';

describe('AlphabeticBigCaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlphabeticBigCaseService]
    });
  });

  it('should be created', inject([AlphabeticBigCaseService], (service: AlphabeticBigCaseService) => {
    expect(service).toBeTruthy();
  }));
});
