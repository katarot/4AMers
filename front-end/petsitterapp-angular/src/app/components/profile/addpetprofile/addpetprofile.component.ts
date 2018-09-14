import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-addpetprofile',
  templateUrl: './addpetprofile.component.html',
  styleUrls: ['./addpetprofile.component.css']
})
export class AddpetprofileComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
  }

}
