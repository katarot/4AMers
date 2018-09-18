import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Message } from '../models/message.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  getMessagesSentByCurrentUser(): Observable<any> {
    return this.http.get<any>('http://18.232.118.152:8080/project2/messages/sender', JSON.parse(this.cookie.get("user")));
  }
  getMessageReceivedByCurrentUser(): Observable<any> {
    return this.http.get<any>('http://18.232.118.152:8080/project2/messages/receiver', JSON.parse(this.cookie.get("user")));
  }

  sendMessaage(subject: string, message: string, receiver: User) {
    const msg: Message = {
      subject: subject,
      message: message,
      dateSent: (new Date()).toISOString().slice(0,10),
      sender: JSON.parse(this.cookie.get("user")),
      receiver: receiver
    }
    console.log(msg);
    return this.http.post<any>('http://18.232.118.152:8080/project2/messages', msg);
  }
}
