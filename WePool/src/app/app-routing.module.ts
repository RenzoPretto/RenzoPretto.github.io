import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarpoolsComponent } from './carpool-files/carpools/carpools.component';
import { HomeComponent } from './home-files/home/home.component';
import { LoginComponent } from './account-files/login/login.component';
import { ModerationComponent } from './moderation-files/moderation/moderation.component';
import { ProfileComponent } from './profile/profile.component';
import { AdministrationComponent } from './moderation-files/administration/administration.component';
import { AuthenticationGuard } from './account-files/authguard/authentication.guard';
import { ModGuard } from './account-files/authguard/mod_auth.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'carpools', component: CarpoolsComponent, canActivate: [AuthenticationGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard] },
  { path: 'administration', component: AdministrationComponent, canActivate: [AuthenticationGuard] },
  { path: 'moderation', component: ModerationComponent, canActivate: [AuthenticationGuard, ModGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthenticationGuard] },
  { path: 'browse', redirectTo: '/administration', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
