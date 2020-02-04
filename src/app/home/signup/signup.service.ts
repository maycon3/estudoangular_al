import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from './new-user';

const API_URL = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  public checkUserNameTaken(userName: string): Observable<boolean> {
    return this.http.get<boolean>(`${API_URL}/user/exists/${userName}`);
  }

  public signup(user: NewUser) {
    return this.http.post(`${API_URL}/user/signup`, user);
  }
}
