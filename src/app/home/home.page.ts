import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonFabButton, IonButton } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';//for the plugin

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  //added IonButtons to implement a button in the home page
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons,RouterLinkWithHref,IonMenu,IonMenuButton,IonButton],
})
export class HomePage {
  coordinates: any = "";
  lat: string = "";
  long: String = "";
  constructor() {}
  
  //to get the gps latitude and longitude coordinates
  async getGPS() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude; }
    ngOnInit(): void {
    }
}
