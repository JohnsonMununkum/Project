import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//importing the player service
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-watkins',
  templateUrl: './watkins.page.html',
  styleUrls: ['./watkins.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton,IonButtons],//anything used in the html page buttons etc put here
  providers:[PlayersService],//to use the players api
})
export class WatkinsPage implements OnInit {
  players:any =[];
  constructor(private playerService:PlayersService) { }
//for the players api
  ngOnInit() {
    this.playerService.GetPlayerData().subscribe(
      (data)=>{
        this.players = data.players;
      }
    );
  }

}
