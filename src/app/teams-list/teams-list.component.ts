import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TeamModel} from "../models/team.model";
import {TeamsService} from "../services/teams.service";
import {PlayersService} from "../services/players.service";
import {PlayerModel} from "../models/player.model";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit, OnChanges {

  listTeams: TeamModel[] = [];
  listPlayers: PlayerModel[] = [];
  listPlayers2: PlayerModel[] = [];
  z = 0;

  constructor(private ac: ActivatedRoute, private Us: TeamsService, private ps: PlayersService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ps.getPlayersJson().subscribe(next2 => this.listPlayers = next2);
    }

  ngOnInit(): void {
    this.Us.getTeamsJson().subscribe(next => this.listTeams = next);
    this.ps.getPlayersJson().subscribe(next2 => this.listPlayers = next2);
    //this.ac.paramMap.subscribe(res=>this.ps.getPlayerByref(Number(res.get('ref'))).subscribe(res1=>this.listPlayers=res1));

  }


  addTeam(u: TeamModel) {
    this.listTeams.push(u);
  }

  updateListe(list: TeamModel[]) {
    this.listTeams = list;
  }

  deleteP(p: TeamModel) {
    this.Us.deleteUser(p).subscribe(next => this.Us.getTeamsJson().subscribe(next => this.listTeams = next));
  }



  afficher(id: number) {
    // this.ac.paramMap.subscribe(res=>this.ps.getPlayerByref(Number(res.get('ref'))).subscribe(res1=>this.listPlayers=res1));
   // this.ps.getPlayerByref(id).subscribe(res3 => this.listPlayers = res3);
  }

  newList(team_id: number) {
    this.listPlayers2=[];
    this.z=1;
    for (let i = 0; i <= this.listPlayers.length; i++) {
      if (this.listPlayers[i].ref === team_id) {
        this.listPlayers2.push(this.listPlayers[i])
      }
    }
  }
  deletePlayer(p: PlayerModel) {
    this.ps.deleteplayer(p).subscribe(next => this.ps.getPlayersJson().subscribe(next => this.listPlayers = next));
  }
}
