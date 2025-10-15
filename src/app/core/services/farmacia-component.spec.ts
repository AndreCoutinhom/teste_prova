import { TestBed } from '@angular/core/testing';

import { FarmaciaComponent } from './farmacia-component';

describe('FarmaciaComponent', () => {
  let service: FarmaciaComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmaciaComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
