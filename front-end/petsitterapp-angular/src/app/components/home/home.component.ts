import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service'; // 'src/app/services/auth.service';
import { User } from '../../models/user.model'; // 'src/app/models/user.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap';
import { EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('myModal') public modal: ModalDirective;

  closeResult: string;
  closeModalEvent = new EventEmitter<boolean>();

  private username: string;
  private password: string;
  private user: User;
  private users: User[];
  private invalidLogin: boolean;
  private bioTooShort: boolean;

  private firstname = '';
  private lastname = '';
  private email = '';
  private regUsername = '';
  private regPassword = '';
  private bioDescription = '';

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private auth: AuthService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.invalidLogin = false;
    this.bioTooShort = false;
  }

  login() {
    this.auth.login(this.username, this.password).subscribe(
      data => {
        this.user = data;
        if (this.user.id === 0) { // incorrect login information
          this.invalidLogin = true;
        } else {  // correct login information
          this.cookieService.deleteAll(); // do we need this?
          this.cookieService.set('user', JSON.stringify(this.user));
          console.log(this.cookieService.getAll());
          this.invalidLogin = false;
          this.router.navigate(['/psHomeComponent']);
        }
      }
    );
  }

  register() {
    console.log('in register method');
    console.log('firstname = ' + this.firstname);
    console.log('lastname = ' + this.lastname);
    console.log('username = ' + this.regUsername);
    console.log('password = ' + this.regPassword);
    console.log('email = ' + this.email);
    console.log('bioDescription = ' + this.bioDescription);
    if (this.bioDescription.length < 15) {
      this.bioTooShort = true;
    } else {
      this.bioTooShort = false;
      this.user = {
        // id: 0,
        username: this.regUsername,
        password: this.regPassword,
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        dateRegistered: '2018-09-14',
        bioDescription: this.bioDescription
      };
      console.log(this.user);
      this.auth.register(this.user).subscribe(
        data => {
          this.user = data;
          console.log(this.user);
          location.reload();
        }
      );

    }
  }

  onCloseModal() {
    this.closeModalEvent.emit(false);
   }

}
