import { Component, OnInit } from '@angular/core';
import { PetServiceService } from '../../services/pet-service.service';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-pet-posting',
  templateUrl: './pet-posting.component.html',
  styleUrls: ['./pet-posting.component.css']
})
export class PetPostingComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private http: PetServiceService) { }

  ngOnInit() {
    this.http.getPets().subscribe(
      p => {
      
      this.pets = p;
      console.log(this.pets);
      

    });

  }

}
