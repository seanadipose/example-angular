import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { ReactiveFormsService } from './reactive-forms.service';

describe('ReactiveFormsService', (): void => {
  let service: ReactiveFormsService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have countries', (done) => {
    service.countries$.subscribe((result) => {
      expect(result.length).toEqual(4);
      done();
    });
  });
});
