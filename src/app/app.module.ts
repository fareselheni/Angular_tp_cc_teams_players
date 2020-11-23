import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { SingleTeamComponent } from './single-team/single-team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TeamsService} from "./services/teams.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {RouterModule, Routes} from "@angular/router";
import {PlayersService} from "./services/players.service";
import { PlayersListComponent } from './players-list/players-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';

const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'teams', canActivate: [AuthGuardService], component: TeamsListComponent },
  { path: 'teams/:id', canActivate: [AuthGuardService], component:SingleTeamComponent },
  { path: 'players', canActivate: [AuthGuardService], component: PlayersListComponent },
  { path: 'players/:ref', canActivate: [AuthGuardService], component: PlayersListComponent },
  { path: 'addteam', canActivate: [AuthGuardService], component: AddTeamComponent },
  { path: 'update/:id', canActivate: [AuthGuardService], component: UpdateTeamComponent },
  { path: 'addplayer', canActivate: [AuthGuardService], component: AddPlayerComponent },
  { path: 'updateplayer/:id', canActivate: [AuthGuardService], component: UpdatePlayerComponent },
  { path: '', redirectTo: 'teams', pathMatch: 'full' },
  { path: '**', redirectTo: 'teams' }

];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TeamsListComponent,
    SingleTeamComponent,
    AddTeamComponent,
    UpdateTeamComponent,
    HeaderComponent,
    PlayersListComponent,
    AddPlayerComponent,
    UpdatePlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TeamsService,AuthGuardService,AuthService,PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
