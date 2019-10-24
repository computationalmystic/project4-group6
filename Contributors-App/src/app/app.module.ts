import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

import { HttpClientModule } from '@angular/common/http';
import { ReposComponent } from './repos/repos.component';
import { ContributorsComponent } from './contributors/contributors.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ReposComponent,
    ContributorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
