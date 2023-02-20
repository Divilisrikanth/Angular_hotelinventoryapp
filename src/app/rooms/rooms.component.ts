import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room } from './rooms';
import { RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';


@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  [x: string]: any;
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';
  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomsService: RoomsService) { }


  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
    //console.log(this.headerComponent);

  }

  ngDoCheck() {
    console.log('on changes is called');
  }

  ngAfterViewInit() {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComponent.last.title = "Last Title";
    console.log('hello');

  }

  ngAfterViewChecked() {
    //this.headerComponent.title = "Room View";
    //It is used to create your own reusable components incase dropdowns example where user pass list of records
    // you want to display the way you want not users want .
    // this.headerChildrenComponent.last.title = "Rooms view";
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }


  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe',
      amenities: 'Air Conditioner,Free Wi-Fi,Bathroom,Kitchen',
      price: 500,
      photo: 'https://www.shutterstock.com/image-photo/hotel-room-interior-modern-seaside-260nw-1387008533.jpg',
      checkinTime: new Date('4-Nov-2021'),
      checkoutTime: new Date('20-Nov-2021'),
      rating: 4.5,
    }
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }


}
