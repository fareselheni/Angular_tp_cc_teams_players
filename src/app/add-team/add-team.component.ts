import {Component,EventEmitter, OnInit, Output} from '@angular/core';
import {TeamModel} from "../models/team.model";
import {TeamsService} from "../services/teams.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  listTeams: TeamModel[] = [];
  team: TeamModel = new TeamModel();
  @Output() newp = new EventEmitter<TeamModel>();
  @Output() newlist = new EventEmitter<TeamModel[]>();
  constructor(private ps: TeamsService ,private route:Router) { }

  ngOnInit(): void {
  }

  addTeam() {
    this.ps.addTeam(this.team)
      .subscribe(next => this.ps.getTeamsJson().subscribe(res => this.newlist.emit(res)));
    this.route.navigate(['/teams']);

  }

}
