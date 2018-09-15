import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieServ: CookieService) { }

  login(username: string, password: string): Observable<any> {
    const u = { username: username, password: password };
    return this.http.post<any>('http://18.232.118.152:8080/project2/login', u);
  }

  register(user: User): Observable<any> {
    console.log('in auth service');
    console.log(user);
    return this.http.post<any>('http://18.232.118.152:8080/project2/register', user);
  }
}
