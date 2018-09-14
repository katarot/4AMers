import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
<<<<<<< Updated upstream
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
=======
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
// import { AuthService } from 'src/app/services/auth.service';
// import { User } from 'src/app/models/user.model';
>>>>>>> Stashed changes

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  closeResult: string;

  private username: string;
  private password: string;
  private user: User;
  private invalidLogin: boolean;

  private firstname: string;
  private lastname: string;
  private email: string;
  private regUsername: string;
  private regPassword: string;
  private bioDescription: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private auth: AuthService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.invalidLogin = false;
  }

  login() {
    this.auth.login(this.username, this.password).subscribe(
      data => {
        this.user = data;
        if (this.user.id === 0) { // incorrect login information
          this.invalidLogin = true;
        } else {  // correct login information
          this.cookieService.deleteAll(); // do we need this?
          this.cookieService.set('username', this.user.username, 2); // will expire in 2 days
          // this.cookieService.set('password', this.user.password, 2);
          this.cookieService.set('firstname', this.user.firstName, 2);
          this.cookieService.set('lastname', this.user.lastName, 2);
          this.cookieService.set('email', this.user.email, 2);
          this.cookieService.set('bioDescription', this.user.bioDescription, 2);
          this.cookieService.set('user', JSON.stringify(this.user));
          console.log(this.cookieService.getAll());
          this.invalidLogin = false;
        }
      }
    );
  }

  register() {
    console.log('in register method');
    this.user.firstName = this.firstname;
    this.user.lastName = this.lastname;
    this.user.username = this.regUsername;
    this.user.password = this.regPassword;
    this.user.email = this.email;
    this.user.bioDescription = this.bioDescription;
    this.auth.register(this.user).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      }
    );
    // this.router.navigate(['/home']);
  }

}
