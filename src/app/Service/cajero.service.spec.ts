import { TestBed } from '@angular/core/testing';

import { CajeroService } from './cajero.service';

describe('CajeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CajeroService = TestBed.get(CajeroService);
    expect(service).toBeTruthy();
  });
});
