import { TestBed, inject } from '@angular/core/testing';

import { EngineService } from './engine.service';

describe('EngineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngineService]
    });
  });

  it('should be created', inject([EngineService], (service: EngineService) => {
    expect(service).toBeTruthy();
  }));

  it('Should Work', inject([EngineService], (service: EngineService) => {
    // Load some data
    expect(service).toBeTruthy();
  }));
});
