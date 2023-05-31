import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';




@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
