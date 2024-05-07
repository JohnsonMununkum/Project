import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar,IonCardContent } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
//import in the player servie into here
import { PlayersService } from '../players.service';
//import the storage here
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-player-nominies',
  templateUrl: './player-nominies.page.html',
  styleUrls: ['./player-nominies.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLinkWithHref,IonButton,
  IonMenu, IonMenuButton,IonButtons,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent],//anything used in the html page buttons etc put here
  providers: [PlayersService],
})
export class PlayerNominiesPage implements OnInit {
players:any =[];
userVote:string = "";
  constructor(private playerService:PlayersService, private storage: Storage) { }//adding storage into the construcor for handling data storage
  //playerservice is there to handle the player api data

    //to get the players api data
  ngOnInit() {
    this.playerService.GetPlayerData().subscribe(
      (data)=>{
        this.players = data.players;
      }
    );
  }

  //creates the storge and then gets what the user puts into the uservote
  async ionViewWillEnter(){
    await this.storage.create();
    this.userVote = await this.storage.get('vote');
  }

}
