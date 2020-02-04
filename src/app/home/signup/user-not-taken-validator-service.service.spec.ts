import { TestBed } from '@angular/core/testing';

import { UserNotTakenValidatorServiceService } from './user-not-taken-validator-service.service';

describe('UserNotTakenValidatorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserNotTakenValidatorServiceService = TestBed.get(UserNotTakenValidatorServiceService);
    expect(service).toBeTruthy();
  });
});
