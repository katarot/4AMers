import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ServiceRequest } from '../models/service-request.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PetPostingCrudService {

  constructor(private http: HttpClient) { }

  // public getPosts() {
  //   return this.http.get<Post[]>("http://18.232.118.152:8080/project2/psrequest");
  // }


  // // Need to pass userId - get from cookie, serviceReqId, replyMsg
  // public postPetPosting(userId: number, srvRequest: ServiceRequest ): Observable<any>{

  //   return (this.http.post<any>("http://18.232.118.152:8080/project2/srvrequest", 
  //     { dateCreated: (new Date()).toISOString().slice(0,10), 
  //       status: "1", description: "service request description", 
  //       replyMessage: "this is reply message ... ", pet: petId, sitter: 1});  
  // }



}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Pet } from '../models/pet.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class PetServiceService {

//   pets: Pet[] = [];

//   constructor(private http: HttpClient) { }

//   getPets(){
//     return this.http.get<Pet[]>("http://18.232.118.152:8080/project2/pets");
//   }

// }
