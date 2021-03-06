import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetCrudService {

  constructor(private http: HttpClient) { }

  public getPets() {
    // return this.http.get<Pet[]>("http://localhost:8080/petsitterapp/pets");
    return this.http.get<Pet[]>("http://18.232.118.152:8080/project2/pets");
  }

  public getPetInfo() {
    return this.http.get<Pet>('http://18.232.118.152:8080/project2/pets/3');
  }
}
