import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [
=======
import { HomeComponent } from './layouts/home/home.component';
import { SigninComponent } from './layouts/signin/signin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent}

>>>>>>> 409309a1c23abfc600ee7a3480a8f0d83a53547f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
