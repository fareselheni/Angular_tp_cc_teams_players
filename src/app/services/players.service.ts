import { Injectable } from '@angular/core';
import {TeamModel} from "../models/team.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlayerModel} from "../models/player.model";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playersList: PlayerModel[] = [];
  playersList2: PlayerModel[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  urlPlayers: string = "http://localhost:3000/players";

  constructor(private http: HttpClient) {
  }

  getPlayers(): PlayerModel[] {
    return this.playersList;
  }

  getPlayersJson(): Observable<PlayerModel[]> {
    return this.http.get<PlayerModel[]>(this.urlPlayers);
  }

  addplayer(player:PlayerModel): Observable<PlayerModel> {
    return this.http.post<PlayerModel>(this.urlPlayers, player, this.httpOptions);
  }

  deleteplayer(p: PlayerModel | number): Observable<PlayerModel> {
    const id = typeof p === 'number' ? p : p.id;
    const url = this.urlPlayers + '/' + id;
    return this.http.delete<PlayerModel>(url);
  }


  getPlayerById(id: number) {
    return this.http.get<PlayerModel>(this.urlPlayers + '/' + id);
  }


  updateplayer(id: number, user: PlayerModel): Observable<PlayerModel> {
    return this.http.put<PlayerModel>(this.urlPlayers + '/' + id, user, this.httpOptions);
  }
  updateUser (id:number,user: PlayerModel): Observable<PlayerModel> {
    return this.http.put<PlayerModel>(this.urlPlayers+'/'+id, user, this.httpOptions);}

}
