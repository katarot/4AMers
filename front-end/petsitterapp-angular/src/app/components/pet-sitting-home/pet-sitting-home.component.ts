import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-sitting-home',
  templateUrl: './pet-sitting-home.component.html',
  styleUrls: ['./pet-sitting-home.component.css']
})
export class PetSittingHomeComponent implements OnInit {

  description: string = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

  constructor() { }

  ngOnInit() {
  }

}
