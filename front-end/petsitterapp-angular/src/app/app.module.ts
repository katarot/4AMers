import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'

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
    MessagingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
