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
import { UploadFileService } from './services/upload-file.service';
import { CookieService } from 'ngx-cookie-service';
import { AddpetprofileComponent } from './components/profile/addpetprofile/addpetprofile.component';
import { AddPetComponent } from './components/profile/add-pet/add-pet.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './components/logout/logout.component';
import { EditpetproComponent } from './components/profile/editpetpro/editpetpro.component';

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
    AddPetComponent,
    LogoutComponent,
    EditpetproComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
    // NgbModal
    // CookieModule // .forRoot()
  ],
  providers: [PetCrudService,
              UploadFileService,  // npm install aws-sdk
              CookieService,
              AuthService
          ],
  bootstrap: [AppComponent]
})
export class AppModule { }
