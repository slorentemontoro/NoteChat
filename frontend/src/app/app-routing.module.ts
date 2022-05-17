import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesComponent } from './layouts/grades/grades.component';
import { HomeComponent } from './layouts/home/home.component';
import { LoginComponent } from './layouts/login/login.component';
import { RegisterComponent } from './layouts/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'grades', component: GradesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
