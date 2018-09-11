import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PetSittingHomeComponent } from './components/pet-sitting-home/pet-sitting-home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServiceRequestComponent } from './components/service-request/service-request.component';
import { ServiceRequestsListComponent } from './components/service-requests-list/service-requests-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'psHomeComponent', component: PetSittingHomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'srComponent', component: ServiceRequestComponent },
    { path: 'srlComponent', component: ServiceRequestsListComponent },
    
    // { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'signup', component: SignUpComponent },
//   { path: 'home', component: HomeComponent },
  // {
  //   path: 'signup', component: UserComponent,
  //   children: [{ path: '', component: SignUpComponent }]
  // },
  // {
  //   path: 'signin', component: UserComponent,
  //   children: [{ path: '', component: SignInComponent }]
  // },
//   { path: 'reimbursements', component: ReimbursementsComponent },
//   { path: 'reimbursementManager', component: ReimbManagerComponent },
//   { path: 'user', component: UserComponent },
//   { path: 'listusers', component: ListUserComponent },
//   { path: 'adduser', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forChild changed to forRoot
  exports: [RouterModule]
})
export class AppRoutingModule { }
