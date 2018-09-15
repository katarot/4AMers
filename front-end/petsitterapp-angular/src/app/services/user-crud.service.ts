import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  constructor(private http: HttpClient) { }

  public getUserInfo(userid: number) {
    return this.http.get<User>('http://18.232.118.152:8080/project2/users/' + userid);
  }

  public getUsers() {
    return this.http.get<User[]>('http://18.232.118.152:8080/project2/users/');
  }

  public updateUser(newUser: User) {
    return this.http.post<User>('http://18.232.118.152:8080/project2/users/', newUser);
  }
}
