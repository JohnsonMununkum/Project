import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient:HttpClient) { }

    GetPlayerData():Observable<any>{
      return this.httpClient.get('https://www.jsonblob.com/api/jsonblob/1234618392299560960');
    }
}
