import { TestBed, inject } from '@angular/core/testing';

import { DataStroageService } from './data-stroage.service';

describe('DataStroageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStroageService]
    });
  });

  it('should be created', inject([DataStroageService], (service: DataStroageService) => {
    expect(service).toBeTruthy();
  }));
});
