import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';

import {  BehaviorSubject } from 'rxjs';

import * as jwt_decode from 'jwt-decode';
import { User } from './user';

@Injectable({ providedIn: 'root'})
export class UserService {

  subjectUser = new BehaviorSubject<User>(null);
  userName: string;

  constructor(private tokenService: TokenService) { 
      this.tokenService.hasToken() &&
        this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.subjectUser.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userName = user.name;
    this.subjectUser.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.subjectUser.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
