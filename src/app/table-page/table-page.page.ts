import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.page.html',
  styleUrls: ['./table-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonBackButton, IonMenu, IonMenuButton, RouterLinkWithHref,IonButtons]//anything used in the html page buttons etc put here
})
export class TablePagePage implements OnInit {
title:string = "New's Page"
  constructor() { }

  ngOnInit() {
  }

}
