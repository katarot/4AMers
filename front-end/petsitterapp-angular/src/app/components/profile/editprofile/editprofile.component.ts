import { Component, OnInit, Input, Output } from '@angular/core';
import { ProfileComponent } from '../../profile/profile.component';
import { EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  @Output() bioUpdate = new EventEmitter<string>();

  constructor(private cookieService: CookieService) { }
  bioDescription: string;

  updateBio() {
    this.bioUpdate.emit(this.bioDescription);
    console.log('inupdatebio');
  }
  ngOnInit() {
  }
}
