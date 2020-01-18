import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-heard',
  templateUrl: './heard.component.html',
  styleUrls: ['./heard.component.css']
})
export class HeardComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.user$ = userService.getUser();
   }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
