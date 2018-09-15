import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  u1: User;

  constructor(private http: HttpClient, private cookieServ: CookieService) { }

  login(username: string, password: string): Observable<any> {
    const u = { username: username, password: password };
    return this.http.post<any>('http://localhost:8080/petsitterapp/login', u);
  }

  // register(user: User[]): Observable<any> {
  register(user: User): Observable<any> {
    console.log('in auth service');
    console.log('user stringified -> ' + JSON.stringify(user));
    this.u1 = {
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      dateRegistered: '2018-09-14',
      bioDescription: user.bioDescription
    };
    console.log('u1 stringified -> ' + JSON.stringify(this.u1));
    return this.http.post<any>('http://localhost:8080/petsitterapp/register', this.u1);
  }
}
