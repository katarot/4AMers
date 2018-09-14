import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PetSittingHomeComponent } from './components/pet-sitting-home/pet-sitting-home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ServiceRequestComponent } from './components/service-request/service-request.component';
import { ServiceRequestsListComponent } from './components/service-requests-list/service-requests-list.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { PetPostingComponent } from './components/pet-posting/pet-posting.component';
import { MessagingComponent } from './components/messaging/messaging.component';
import { EditprofileComponent } from './components/profile/editprofile/editprofile.component';
import { PetCrudService } from './services/pet-crud.service';
// import { CookieModule } from '@ngx-toolkit/cookie';
import { CookieService } from 'ngx-cookie-service';
import { AddpetprofileComponent } from './components/profile/addpetprofile/addpetprofile.component';
<<<<<<< HEAD
import { AddPetComponent } from './components/profile/add-pet/add-pet.component';
=======
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
>>>>>>> 0f9d3bba5541e75aea263318dbe8250fa2f9ac97

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PetSittingHomeComponent,
    ProfileComponent,
    ServiceRequestComponent,
    ServiceRequestsListComponent,
    PetPostingComponent,
    MessagingComponent,
    EditprofileComponent,
    AddpetprofileComponent,
    AddPetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    // NgbModal
    // CookieModule // .forRoot()
  ],
  providers: [PetCrudService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
