import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }


  //should I just pass in a user object (since there is a users.model.ts)
  public createAccount(username: string, password: string, firstname: string, lastname: string, email: string, aboutme: string) {
    return this.http.post<any>('http://localhost:8081/Somethinghere/', { username: username, password: password, firstname: firstname, lastname: lastname, email: email, aboutme: aboutme });
  }

  

}
