import { TestBed } from '@angular/core/testing';

import { AutorService } from './autor.service';

describe('AutorServiceTsService', () => {
  let service: AutorService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
