import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pet-sitting-home',
  templateUrl: './pet-sitting-home.component.html',
  styleUrls: ['./pet-sitting-home.component.css']
})
export class PetSittingHomeComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  description = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    console.log(this.cookieService.get('user'));
  }

}
