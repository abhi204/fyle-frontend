import { TestBed } from '@angular/core/testing';

import { BranchSearchService } from './branch-search.service';

describe('BranchSearchService', () => {
  let service: BranchSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
