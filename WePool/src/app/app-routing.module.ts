import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './moderation-files/administration/administration.component';
import { CarpoolsComponent } from './carpool-files/carpools/carpools.component';
import { HomeComponent } from './home-files/home/home.component';
import { LoginComponent } from './account-files/login/login.component';
import { ModerationComponent } from './moderation-files/moderation/moderation.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'carpools', component: CarpoolsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'moderation', component: ModerationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
