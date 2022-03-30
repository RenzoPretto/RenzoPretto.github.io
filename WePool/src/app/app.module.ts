import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-files/app.component';

import { ProfileComponent } from './profile/profile.component'; //Will change when previous pull request comes in
import { ToolbarComponent } from './toolbar/toolbar.component';

import { HttpClientModule } from '@angular/common/http';
import { MapPOCComponent, LocationAutocompleteComponent, CarpoolsComponent, GroupInfoComponent } from './carpool-files';
import { ModerationComponent } from './moderation-files';
import { SurveyComponent, QuestionComponent, QuestionLoaderComponent } from './profile';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './account-files';
import { MaterialModule } from './modules/material.module';
import { HomeComponent } from './home-files';
import { GroupRouterComponent } from './carpool-files/group-router/group-router.component';
import { GroupViewComponent } from './moderation-files/group-view/group-view.component';
import { AdministrationComponent } from './moderation-files/administration/administration.component';

@NgModule({
  declarations: [
    AppComponent,
    CarpoolsComponent,
    HomeComponent,
    ProfileComponent,
    ModerationComponent,
    LoginComponent,
    MapPOCComponent,
    LocationAutocompleteComponent,
    ToolbarComponent,
    GroupInfoComponent,
    GroupRouterComponent,
    SurveyComponent,
    QuestionComponent,
    QuestionLoaderComponent,
    GroupViewComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
