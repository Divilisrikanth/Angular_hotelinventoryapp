import { Component, ElementRef, OnInit, Optional, ViewChild } from '@angular/core';
//import {LoggerService} from './';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './localstorage.token';
@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template</h1>
  // <p>Angular is Awesome</p>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', { static: true }) name!: ElementRef;
  //constructor( @Optional() private loggerService: LoggerService,){}
  ngOnInit() {
    //this.loggerService?.log('AppComponent.ng/Oninit()')
    this.name.nativeElement.innerText = "Hilton Hotel";
  }
  role = 'Users';
}
