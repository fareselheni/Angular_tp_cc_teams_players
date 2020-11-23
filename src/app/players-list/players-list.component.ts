import { Component, OnInit } from '@angular/core';
import {PlayerModel} from "../models/player.model";
import {TeamsService} from "../services/teams.service";
import {PlayersService} from "../services/players.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  listPlayers:PlayerModel[]=[];
  listPlayers2:PlayerModel[]=[];
  constructor(private ac:ActivatedRoute,private Us:TeamsService ,private ps:PlayersService) { }
  paramId : string;
  ngOnInit(): void {
    this.ps.getPlayersJson().subscribe(z=>this.listPlayers=z);
   //this.ac.paramMap.subscribe(res=>this.ps.getPlayerByref(Number(res.get('ref'))).subscribe(res1=>this.listPlayers=res1));


  }
newList(team_id:number){
    for(let i=0;i<=this.listPlayers.length;i++)
    {
     if (this.listPlayers[i].ref===team_id){
       this.listPlayers2.push(this.listPlayers[i])
     }
    }

}


}
