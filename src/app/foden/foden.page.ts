import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//importing the player service
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-foden',
  templateUrl: './foden.page.html',
  styleUrls: ['./foden.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonBackButton],
  providers: [PlayersService],
})
export class FodenPage implements OnInit {
  players:any =[];
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
