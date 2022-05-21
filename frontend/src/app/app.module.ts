import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

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
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './layouts/utils/slider/slider.component';
import { AppRoutingModule } from './app-routing.module';

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
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
