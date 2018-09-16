import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../services/messaging.service'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service'; // 'src/app/services/auth.service';
import { User } from '../../models/user.model'; // 'src/app/models/user.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  constructor(private msgServ: MessagingService, private router: Router, private cookie: CookieService) { }

  ngOnInit() {
    console.log('help');
    console.log(JSON.parse(this.cookie.get('user')));
  }

  submit() {
    console.log(JSON.parse(this.cookie.get('user')));
  }
}
