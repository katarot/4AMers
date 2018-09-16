import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EventEmitter } from '@angular/core';
import { ViewChild } from '@angular/core';
<<<<<<< HEAD
import { MessagingComponent } from '../messaging';
=======
import { NavbarService } from '../../services/navbar.service';
>>>>>>> 54a01a4cea2a72462496d5b1048f608da7700b6c


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {
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
    private modalService: NgbModal,
    private navbarService: NavbarService) { }

  ngOnInit() {
    this.invalidLogin = false;
    this.bioTooShort = false;
  }

  ngDoCheck() {
    // console.log('in home.component doCheck');
    if (this.navbarService.isLoggedIn()) {
      this.router.navigate(['/petsitting']);
    }
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
    // console.log('bioDescription = ' + this.bioDescription);
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
      // console.log(this.user);
      this.auth.register(this.user).subscribe(
        data => {
          this.user = data;
          // console.log(this.user);
          location.reload();
        }
      );

    }
  }

}
