import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  public authenticate(userName: string, password: string) {
    return this.http.post(`${API_URL}/user/login`, {userName, password}, {observe: 'response'})
      .pipe(tap(resp => {
        const authToken = resp.headers.get('x-access-token');
        const status = resp.status;
        console.log(`User ${userName} authenticated with token ${authToken}`);
      }));
  }
}
