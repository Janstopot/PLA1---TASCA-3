import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'new', component : NewUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
