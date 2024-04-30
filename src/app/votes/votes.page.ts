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
  IonButtons, IonBackButton, IonRadio, IonRadioGroup,IonButton]
})
export class VotesPage implements OnInit {
userVote: string= "";
  constructor(private storage:Storage,private router: Router) { }

  ngOnInit() {
  }
  
 /* async saveUserVote(){
    await this.storage.set('vote', this.userVote)
    .then(
      ()->{
        this.router.navigate(['/home'])
      })
      .catch();
  }*/
}
