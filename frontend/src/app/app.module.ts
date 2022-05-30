import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { RegisterComponent } from './layouts/register/register.component';
import { LoginComponent } from './layouts/login/login.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { GradesComponent } from './layouts/grades/grades.component';
import { GradeDetailsComponent } from './layouts/grade-details/grade-details.component';
import { FilesComponent } from './layouts/files/files.component';
import { GradeLocationComponent } from './layouts/grade-location/grade-location.component';
import { LocationsListComponent } from './layouts/locations-list/locations-list.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SliderComponent } from './layouts/utils/slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { PrivacityComponent } from './layouts/privacity/privacity.component';
import { MapComponent } from './layouts/locations-list/map/map.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { AdminComponent } from './layouts/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    GradesComponent,
    GradeDetailsComponent,
    FilesComponent,
    GradeLocationComponent,
    LocationsListComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    PrivacityComponent,
    MapComponent,
    ContactComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
