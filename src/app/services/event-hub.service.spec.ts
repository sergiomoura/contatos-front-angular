import { TestBed } from '@angular/core/testing';

import { EventHubService } from './event-hub.service';

describe('EventHubService', () => {
  let service: EventHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
