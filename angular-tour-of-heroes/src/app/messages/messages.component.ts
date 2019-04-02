import { Component, OnInit } from '@angular/core';
// <!--13-->
import { MessageService } from '../message.service';
// <!---->

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

//   constructor() { }
// <!--13-->
constructor(public messageService: MessageService) {}
// <!---->
  ngOnInit() {
  }

}
