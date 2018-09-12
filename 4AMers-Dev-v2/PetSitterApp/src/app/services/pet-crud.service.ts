import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetCrudService {

  constructor(private http: HttpClient) { }

  public getPets() {
    return this.http.get<Pet[]>("http://localhost:8080/petsitterapp/pets");
  }

}
