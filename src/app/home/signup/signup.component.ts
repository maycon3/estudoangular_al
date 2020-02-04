import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case-validator';
import { UserNotTakenValidatorServiceService } from './user-not-taken-validator-service.service';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private takenService: UserNotTakenValidatorServiceService,
    private signupService: SignupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.formBuilder.group({
      email: ['',
          [
              Validators.required,
              Validators.email
          ]
      ],
      fullName: ['',
          [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(40)
          ]
      ],
      userName: ['',
          [
              Validators.required,
             lowerCaseValidator,
              Validators.minLength(2),
              Validators.maxLength(30)
          ],
          this.takenService.checkUserNameTaken()
      ],
      password: ['',
          [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(14)
          ]
      ]
    });
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService.signup(newUser)
     .subscribe(()=>{
       this.router.navigate(['']);
     }, err=> console.log(err));
  }
}
