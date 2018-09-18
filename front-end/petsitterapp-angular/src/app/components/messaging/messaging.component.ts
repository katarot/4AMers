import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service'; // 'src/app/services/auth.service';
import { User } from '../../models/user.model'; // 'src/app/models/user.model';
import { Message } from '../../models/message.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})

export class MessagingComponent implements OnInit {

  inboxReceived: Message[];
  outboxSent: Message[];

  loggedInUser: User;
  userToSend: User;
  msgSubject: string;
  replyMessage: string;

  constructor(private msgServ: MessagingService,
    private router: Router,
    private cookie: CookieService,
    private navbarService: NavbarService) { }

  ngOnInit() {
    if (!this.navbarService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }

    this.loggedInUser = JSON.parse(this.cookie.get('user'));

    this.msgServ.getMessageReceivedByCurrentUser().subscribe(
      m => {
        console.log(m);
        this.inboxReceived = m;
        this.inboxReceived.sort(
          (a: Message, b: Message): number => {
          return (a.dateSent <= b.dateSent) ? 1 : -1;
        });
      }
    );

    this.msgServ.getMessagesSentByCurrentUser().subscribe(
      m => {
        console.log(m);
        this.outboxSent = m;
        this.outboxSent.sort(
          (a: Message, b: Message): number => {
          return (a.dateSent <= b.dateSent) ? 1 : -1;
        });
      }
    );
  }

  submitMessage() {
    this.msgServ.sendMessaage(this.msgSubject, this.replyMessage, this.userToSend).subscribe(
      m => {
        console.log(m);
        location.reload();
      }
    );
  }

  setDataForPopUp(receiver: User) {
    this.userToSend = receiver;
  }
}
