import { TestBed, inject } from '@angular/core/testing';

<<<<<<< HEAD
import { HydraBatchUtilService } from './gambit-batch-util.service';

describe('HydraBatchUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HydraBatchUtilService]
    });
  });

  it('should be created', inject([HydraBatchUtilService], (service: HydraBatchUtilService) => {
=======
import { GambitBatchUtilService } from './gambit-batch-util.service';

describe('GambitBatchUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GambitBatchUtilService]
    });
  });

  it('should be created', inject([GambitBatchUtilService], (service: GambitBatchUtilService) => {
>>>>>>> 8badc09e6717c61cf339c7db8217d5ce1e3a9aef
    expect(service).toBeTruthy();
  }));
});
