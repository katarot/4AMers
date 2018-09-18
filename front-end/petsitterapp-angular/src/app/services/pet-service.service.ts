import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet.model';
import { Dog } from '../models/dog.model'

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  pets: Pet[] = [];

  constructor(private http: HttpClient) { }

  getPets() {
    return this.http.get<Pet[]>("http://18.232.118.152:8080/project2/pets");
  }

  getDog() {
    return this.http.get<Dog>("https://dog.ceo/api/breeds/image/random");
  }
}

