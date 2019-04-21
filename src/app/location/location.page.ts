import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  lat: any;
  lng: any;
  constructor(private geolocation: Geolocation) {
    this.getLocation();
  }


  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ngOnInit() {
  }

}
