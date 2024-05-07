import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//importing the player service
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-rice',
  templateUrl: './rice.page.html',
  styleUrls: ['./rice.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonBackButton,IonButtons],//anything used in the html page buttons etc put here
  providers:[PlayersService],
})
export class RicePage implements OnInit {
  players:any =[];
  constructor(private playerService:PlayersService) { }
    //playerservice is there to handle the player api data

  //to get the players api data
  ngOnInit() {
    this.playerService.GetPlayerData().subscribe(
      (data)=>{
        this.players = data.players;
      }
    );
  }

}
