import { Inject, Injectable } from '@angular/core';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { Room, RoomList } from '../rooms';
import { HttpClient } from '@angular/common/http';
import { enivornment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi,TV,BathRoom, Kitchen',
    price: 500,
    photo: 'https://www.shutterstock.com/image-photo/hotel-room-interior-modern-seaside-260nw-1387008533.jpg',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('11-Nov-2022'),
    rating: 4.5,
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi,TV,BathRoom, Kitchen',
    price: 1000,
    photo: 'https://www.shutterstock.com/image-photo/hotel-room-interior-modern-seaside-260nw-1387008533.jpg',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('11-Nov-2022'),
    rating: 3.5,
  },
  {
    roomNumber: 3,
    roomType: 'Private suite',
    amenities: 'Air Conditioner, Free Wi-Fi,TV,BathRoom, Kitchen',
    price: 15000,
    photo: 'https://www.shutterstock.com/image-photo/hotel-room-interior-modern-seaside-260nw-1387008533.jpg',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('11-Nov-2022'),
    rating: 2.6,
  },
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig) {
    console.log('Room service Intialized...');
    console.log(this.config.apiEndpoint);
   }

  getRooms() {
    return this.roomList;
  }
}
