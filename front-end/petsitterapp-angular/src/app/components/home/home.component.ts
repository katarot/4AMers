import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
// import { MessagingComponent } from '../messaging';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult: string;
  closeModalEvent = new EventEmitter<boolean>();

  private username: string;
  private password: string;
  private user: User;
  private users: User[];

  private invalidLogin: boolean;
  private invalidUsername: boolean;
  private invalidPassword: boolean;
  private invlaidEmail: boolean;
  private invalidBio: boolean;

  private firstname = '';
  private lastname = '';
  private email = '';
  private regUsername = '';
  private regPassword = '';
  private dateRegistered = new Date;
  private bioDescription = '';
  private dateStr = '';

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private auth: AuthService,
    private modalService: NgbModal,
    private navbarService: NavbarService) { }

  ngOnInit() {
    this.invalidLogin = false;
    this.invalidBio = false;
    this.invalidUsername = false;
    this.invalidPassword = false;
    this.invlaidEmail = false;
    if (this.navbarService.isLoggedIn()) {
      this.router.navigate(['/petsitting']);
    }
    const year = this.dateRegistered.getFullYear();
    const month = 1 + this.dateRegistered.getMonth();
    const day = this.dateRegistered.getDate();
    // console.log(this.dateRegistered);
    this.dateStr = year + '-' + month + '-' + day;
  }

  login() {
    this.auth.login(this.username, this.password).subscribe(
      data => {
        this.user = data;
        if (this.user.id === 0) { // incorrect login information
          this.invalidLogin = true;
        } else {  // correct login information

          // console.log('this.user');
          // console.log(this.user);

          this.cookieService.deleteAll(); // do we need this?
          this.cookieService.set('user', JSON.stringify(this.user));
          // console.log(this.cookieService.getAll());
          this.invalidLogin = false;
          this.router.navigate(['/petsitting']);
        }
      }
    );
  }

  register() {
    console.log(this.regUsername);
    console.log(this.regPassword);
    if (this.bioDescription.length < 15) {
      this.invalidBio = true;
    } else {
      this.invalidBio = false;
    } if (this.regUsername.length < 8) {
      this.invalidUsername = true;
    } else {
      this.invalidUsername = false;
    } if (this.regPassword.length < 8) {
      this.invalidPassword = true;
    } else {
      this.invalidPassword = false;
    } if (!this.validateEmail(this.email)) {
      this.invlaidEmail = true;
    } else {
      this.invlaidEmail = false;
    }
    if (!this.invalidBio && !this.invalidUsername && !this.invalidPassword && !this.invlaidEmail) {
      this.user = {
        // id: 0,
        username: this.regUsername,
        password: this.regPassword,
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        dateRegistered: this.dateStr,
        bioDescription: this.bioDescription
      };
      console.log(this.dateStr);
      this.auth.register(this.user).subscribe(
        data => {
          this.user = data;
          location.reload();
        }
      );
    }
  }

  validateEmail(email: string) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
