import { TestBed } from '@angular/core/testing';

import { FireService } from '../tools/services/fire.service';

describe('FireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireService = TestBed.get(FireService);
    expect(service).toBeTruthy();
  });
});
