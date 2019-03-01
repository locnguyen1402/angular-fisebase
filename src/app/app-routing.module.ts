import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { app } from 'firebase';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [{
  path: 'homepage',
  component: HomepageComponent
}, {
  path: 'detail/:id',
  component: DetailComponent
}, {
  path: 'cart',
  component: CartComponent
}, {
  path: 'crud',
  component: CrudComponent
}, {
  path: 'auth/login',
  component: LoginComponent
}, {
  path: 'auth/register',
  component: RegisterComponent
}, {
  path: '',
  redirectTo: 'auth/login',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
