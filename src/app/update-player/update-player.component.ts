import { Component, OnInit } from '@angular/core';
import {TeamModel} from "../models/team.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamsService} from "../services/teams.service";
import {PlayerModel} from "../models/player.model";
import {PlayersService} from "../services/players.service";

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit {

  p : PlayerModel = new PlayerModel();
  constructor(private ac:ActivatedRoute, private ps:PlayersService, private _router:Router) { }
  paramId : string;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(res=>{this.paramId=res.get('id');
      this.ps.getPlayerById(Number(res.get('id'))).subscribe(res=>this.p=res)});
  }
  updatePlayer(){

    this.ps.updateplayer(Number(this.paramId),this.p).subscribe(res=>this._router.navigateByUrl("/teams"));
  }
}
