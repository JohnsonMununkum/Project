import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
//import in the player servie into here
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-palmer',
  templateUrl: './palmer.page.html',
  styleUrls: ['./palmer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonBackButton],//for the html buttons etc added
  providers: [PlayersService],//to use the player api
})
export class PalmerPage implements OnInit {
  players:any =[];
  //router there to navigate to a page
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
