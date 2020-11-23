import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PlayerModel} from "../models/player.model";
import {PlayersService} from "../services/players.service";
import {Router} from "@angular/router";
import {TeamModel} from "../models/team.model";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
 p:PlayerModel=new PlayerModel();
  playerForm: FormGroup;
  listPlayers:PlayerModel[]=[];
  @Output() newlist = new EventEmitter<PlayerModel[]>();

  constructor(private formBuilder: FormBuilder ,private ps:PlayersService,private route:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.playerForm = this.formBuilder.group({
      id: ['', Validators.required],
      ref: ['', Validators.required],
      cin: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      Nom: ['', Validators.required],
      age: ['', Validators.required],
      poste: ['', Validators.required]
    });
  }
  /*onSubmitForm() {
    const formValue = this.userForm.value;
    const newUser = new PlayerModel(
      formValue['id'],
      formValue['ref'],
      formValue['cin'],
      formValue['Nom'],
      formValue['age'],
      formValue['poste']
    );
    this.listPlayers.push(newUser);
  }*/
  addTeam() {
    this.ps.addplayer(this.p)
      .subscribe(next => this.ps.getPlayersJson().subscribe(res => this.newlist.emit(res)));
    this.route.navigate(['/teams']);

  }
}
