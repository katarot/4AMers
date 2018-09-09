import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { RequestboardComponent } from './components/requestboard/requestboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'inbox', component: InboxComponent},
  { path: 'reqboard', component: RequestboardComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}
