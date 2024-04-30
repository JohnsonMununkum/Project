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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons, IonBackButton],
  providers: [PlayersService],
})
export class PalmerPage implements OnInit {
  players:any =[];
  constructor(private playerService:PlayersService) { }

  ngOnInit() {
    this.playerService.GetPlayerData().subscribe(
      (data)=>{
        this.players = data.players;
      }
    );
  }

}
