import { TestBed } from '@angular/core/testing';

import { ClassPOJOService } from './class-pojo.service';

describe('ClassPOJOService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassPOJOService = TestBed.get(ClassPOJOService);
    expect(service).toBeTruthy();
  });
});
