import { Component, OnInit } from '@angular/core';
import {TeamModel} from "../models/team.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamsService} from "../services/teams.service";

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {
  p : TeamModel = new TeamModel();
  constructor(private ac:ActivatedRoute, private ps:TeamsService, private _router:Router) { }
  paramId : string;
  ngOnInit(): void {
    this.ac.paramMap.subscribe(res=>{this.paramId=res.get('id');
      this.ps.getTeamById(Number(res.get('id'))).subscribe(res=>this.p=res)});
  }
  updateUser(){

    this.ps.updateUser(Number(this.paramId),this.p).subscribe(res=>this._router.navigateByUrl("/teams"));
  }


}
