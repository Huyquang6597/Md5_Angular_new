import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NameCardComponent} from "./name-card/name-card.component";
import {AdminComponent} from "./admin/admin.component";
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent //muốn hiện component nào thì phải tạo package mới
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
