import { TestBed } from '@angular/core/testing';

import { SEpisodesService } from './s-episodes.service';

describe('SEpisodesService', () => {
  let service: SEpisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
