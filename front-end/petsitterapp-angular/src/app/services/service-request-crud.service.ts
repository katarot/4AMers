import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ServiceRequest } from '../models/service-request.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestCrudService {

  constructor(private http: HttpClient) { }

  public postServiceRequest(serviceDate: number, petId: string) {

    console.log(serviceDate + ", " + petId);

    // return this.http.get<ServiceRequest[]>("http://18.232.118.152:8080/project2/pets");

    // return this.http.post<ServiceRequest>("http://18.232.118.152:8080/project2/pets", 
    return this.http.post<any>("http://18.232.118.152:8080/project2/srvrequest", 
            { dateCreated: serviceDate, status: "1", description: "service request description", 
              replyMessage: "this is reply message ... ", pet: petId, sitter: 1});                   

    // id: number;
    // dateCreated: string;
    // status: string;
    // description: string;
    // replyMessage: string;

    // pet: number;
    // sitter: number;

  }

  // Post Reimbursement data
  // public postReimbursement(description: string, amount: number, 
  //   reimb_type: string, receipt: string,
  //   created_by_id: number): Observable<any> {
  // }



}
