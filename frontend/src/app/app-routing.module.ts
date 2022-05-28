import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './layouts/contact/contact.component';
import { GradeDetailsComponent } from './layouts/grade-details/grade-details.component';
import { GradesComponent } from './layouts/grades/grades.component';
import { HomeComponent } from './layouts/home/home.component';
import { LocationsListComponent } from './layouts/locations-list/locations-list.component';
import { LoginComponent } from './layouts/login/login.component';
import { PrivacityComponent } from './layouts/privacity/privacity.component';
import { ProfileComponent } from './layouts/profile/profile.component';
import { RegisterComponent } from './layouts/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'grades', component: GradesComponent},
  {path: 'grades/:id', component: GradeDetailsComponent},
  {path: 'grades/:id', component: GradeDetailsComponent},
  {path: 'grades/:id/:idSubject', component: GradeDetailsComponent},
  {path: 'centers', component: LocationsListComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'privacity', component: PrivacityComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
