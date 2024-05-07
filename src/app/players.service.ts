import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient:HttpClient) { }

  //gets the data from this api which was created
    GetPlayerData():Observable<any>{
      return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1234618392299560960');
    }
}
