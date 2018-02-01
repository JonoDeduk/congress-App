import { TestBed, inject } from '@angular/core/testing';

import { MakeCongressService } from './make-congress.service';

describe('MakeCongressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeCongressService]
    });
  });

  it('should be created', inject([MakeCongressService], (service: MakeCongressService) => {
    expect(service).toBeTruthy();
  }));
});
