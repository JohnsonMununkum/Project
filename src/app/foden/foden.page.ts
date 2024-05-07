import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//importing the player service
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-foden',
  templateUrl: './foden.page.html',
  styleUrls: ['./foden.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonBackButton],//using buttons etc added
  providers: [PlayersService],//to use the player service
})
export class FodenPage implements OnInit {
  players:any =[];
  //playerservice for the player data api
  constructor(private playerService:PlayersService) { }

  //to get the players api data
  ngOnInit() {
    this.playerService.GetPlayerData().subscribe(
      (data)=>{
        this.players = data.players;
      }
    );
  }

}
