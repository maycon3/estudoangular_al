import { Injectable } from '@angular/core';
import { SignupService } from './signup.service';
import { AbstractControl } from '@angular/forms';

import { debounceTime,switchMap, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserNotTakenValidatorServiceService {

  constructor(
    private signupService: SignupService
    ) { }

    checkUserNameTaken() {
      return (control: AbstractControl) => {
       return control.valueChanges
         .pipe(debounceTime(300))
         .pipe(switchMap(userTaken => this.signupService.checkUserNameTaken(userTaken)))
         .pipe(map(isTaken => isTaken ? { userNameTaken: true}: null))
         .pipe(first());
      }
    }
}
