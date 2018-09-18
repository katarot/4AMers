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

  inboxReceived: Message;
  outboxSent: Message;

  constructor(private msgServ: MessagingService,
    private router: Router,
    private cookie: CookieService,
    private navbarService: NavbarService) { }

  ngOnInit() {
    if (!this.navbarService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }

    this.msgServ.getMessageReceivedByCurrentUser().subscribe(
      m => {
        this.inboxReceived = m;
      }
    );

    this.msgServ.getMessagesSentByCurrentUser().subscribe(
      m => {
        this.outboxSent = m;
      }
    );
  }

  submit() {
    console.log(JSON.parse(this.cookie.get('user')));
  }
}
