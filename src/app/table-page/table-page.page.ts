import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.page.html',
  styleUrls: ['./table-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton]
})
export class TablePagePage implements OnInit {
teams:string[] =  ["Brighton","Man City"];
time:string =  "20:00";
title:string = "Matches";
  constructor() { }

  ngOnInit() {
  }

}
