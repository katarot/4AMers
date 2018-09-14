import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { CookieService } from 'ngx-cookie-service';
import { ServiceRequestCrudService } from '../../services/service-request-crud.service';
import { ServiceRequest } from '../../models/service-request.model';

@Component({
  selector: 'app-service-requests-list',
  templateUrl: './service-requests-list.component.html',
  styleUrls: ['./service-requests-list.component.css']
})
export class ServiceRequestsListComponent implements OnInit {

  pets: Pet[] = [];
  serviceRequest: ServiceRequest[] = [];

  constructor(private cookieService: CookieService, private srvReqService: ServiceRequestCrudService) { }

  ngOnInit() {

    this.srvReqService.getPSRequestData().subscribe(
      sr => {
        console.log(sr);
        this.serviceRequest = sr;
      }
    );

  }

}
