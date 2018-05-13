import { BookComponent } from './../../components/book/book.component';
import { LoginComponent } from './../../components/login/login.component';
import { HomeComponent } from './../../components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from '../../components/register/register.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, children: [
    {path: 'register', component: RegisterComponent}
  ]},
  {path: 'books', component: BookComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  declarations: []
})
export class AppRouterModule { }
