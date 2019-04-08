import { TestBed } from '@angular/core/testing';

import { SimpleTableService } from './simple-table.service';

describe('SimpleTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleTableService = TestBed.get(SimpleTableService);
    expect(service).toBeTruthy();
  });
});
