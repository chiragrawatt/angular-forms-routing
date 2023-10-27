import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ContentComponent } from './home/content/content.component';
import { DashboardComponent } from './home/content/dashboard/dashboard.component';
import { StatsCardComponent } from './home/content/dashboard/stats-card/stats-card.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavSectionComponent } from './home/sidebar/nav-section/nav-section.component';
import { AddUserComponent } from './home/content/users/add-user/add-user.component';
import { ViewUsersComponent } from './home/content/users/view-users/view-users.component';
import { EditUserComponent } from './home/content/users/edit-user/edit-user.component';
import { UsersComponent } from './home/content/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    DashboardComponent,
    StatsCardComponent,
    FooterComponent,
    NavSectionComponent,
    AddUserComponent,
    ViewUsersComponent,
    EditUserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
