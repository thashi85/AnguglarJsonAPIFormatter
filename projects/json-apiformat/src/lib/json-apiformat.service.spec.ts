import { TestBed } from '@angular/core/testing';

import { JsonAPIFormatService } from './json-apiformat.service';

describe('JsonAPIFormatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonAPIFormatService = TestBed.get(JsonAPIFormatService);
    expect(service).toBeTruthy();
  });
});
