import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../services/messaging.service'

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  constructor(private msgServ: MessagingService) { }

  ngOnInit() {
  }

  submit() {
    
  }
}
