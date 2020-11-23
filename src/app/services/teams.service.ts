import { Injectable } from '@angular/core';
import {TeamModel} from "../models/team.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlayerModel} from "../models/player.model";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  teamsList: TeamModel[]=[];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  urlTeams : string ="http://localhost:3000/teams";


  constructor(private http: HttpClient) {
  }
  getTeams() : TeamModel[]{
    return this.teamsList;
  }
  getTeamsJson() : Observable<TeamModel[]>{
    return this.http.get<TeamModel[]>(this.urlTeams);
  }
  addTeam (team: TeamModel): Observable<TeamModel> {
    return this.http.post<TeamModel>(this.urlTeams, team, this.httpOptions);}

  deleteUser (p: TeamModel | number): Observable<TeamModel> {
    const id = typeof p === 'number' ? p : p.id;
    const url=this.urlTeams+'/'+id;
    return this.http.delete<TeamModel>(url);
  }

  getTeamById(id:number){
    return this.http.get<TeamModel>(this.urlTeams+'/'+id);
  }


  updateUser (id:number,user: TeamModel): Observable<TeamModel> {
    return this.http.put<TeamModel>(this.urlTeams+'/'+id, user, this.httpOptions);}
}
