import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  //added IonButtons to implement a button in the home page
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton,RouterLinkWithHref],
})
export class HomePage {
  constructor() {}

  showTable(){

  }
}
