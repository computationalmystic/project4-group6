import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';
import { InfoComponent } from './info/info.component';
import { ContributorsComponent } from './contributors/contributors.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'repos/:groupId', component: ReposComponent },
  { path: 'contributors/:groupId/:repoId', component: ContributorsComponent},
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
