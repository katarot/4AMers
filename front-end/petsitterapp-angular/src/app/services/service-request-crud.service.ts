import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ServiceRequest } from '../models/service-request.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestCrudService {

  constructor(private http: HttpClient) { }

  // GET DATA
  public getPSRequestData() {
    
    console.log("Getting Pet Sitting Service Request Data ");
    return this.http.get<ServiceRequest[]>("http://18.232.118.152:8080/project2/psrequest");
  
  }

  // POST / CREATE DATA
  public postPSRequestData(serviceDate: number, petId: string) {

    console.log(serviceDate + ", " + petId);

    return this.http.post<ServiceRequest[]>("http://18.232.118.152:8080/project2/psrequest", {});
    // return this.http.post<any>("http://18.232.118.152:8080/project2/psrequest", 
            // { dateCreated: serviceDate, status: "1", description: "service request description", 
            //   replyMessage: "this is reply message ... ", pet: petId, sitter: 1});                   

    // pet: number;
    // sitter: number;

  }

  //  PUT / UPDATE
  public updatePSRequestData() {

    // return this.http.get<ServiceRequest[]>("http://18.232.118.152:8080/project2/pets");

    // return this.http.post<ServiceRequest>("http://18.232.118.152:8080/project2/pets", 
    return this.http.put<any>("http://18.232.118.152:8080/project2/psrequest", {});

  }

  // JUST FOR EXAMPLE USAGE
  // Post Reimbursement data
  // public postReimbursement(description: string, amount: number, 
  //   reimb_type: string, receipt: string,
  //   created_by_id: number): Observable<any> {
  // }

}
