import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';//import storage here
import { Router } from '@angular/router';//import router here

@Component({
  selector: 'app-votes',
  templateUrl: './votes.page.html',
  styleUrls: ['./votes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel,RouterLinkWithHref,
  IonButtons, IonBackButton, IonRadio, IonRadioGroup,IonButton]//anything used in the html page buttons etc put here
})
export class VotesPage implements OnInit {
userVote: string= "";
  constructor(private storage:Storage,private router: Router) { }

  ngOnInit() {
  }
  
  //creates the data storage and then puts the uservote into it
  async ionViewWillEnter(){
    await this.storage.create();
    this.userVote = await this.storage.get('vote');
  }

  //button for when user clicks it the uservote is saved
   async saveUserVote(){
      await this.storage.set('vote', this.userVote)
      .then(
        ()=>{
          this.router.navigate(['/player-nominies'])
        })
        .catch();
  }

}
