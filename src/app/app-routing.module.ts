import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './home/content/dashboard/dashboard.component';
import { UsersComponent } from './home/content/users/users.component';
import { AddUserComponent } from './home/content/users/add-user/add-user.component';
import { ViewUsersComponent } from './home/content/users/view-users/view-users.component';
import { EditUserComponent } from './home/content/users/edit-user/edit-user.component';
import { ProductComponent } from './home/content/product/product.component';
import { AddProductComponent } from './home/content/product/add-product/add-product.component';
import { ViewProductsComponent } from './home/content/product/view-products/view-products.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "user",
        component: UsersComponent,
        children: [
          {
            path: "add",
            component: AddUserComponent
          },
          {
            path: "view",
            component: ViewUsersComponent
          },
          {
            path: "edit/:id",
            component: EditUserComponent
          }
        ]
      },
      {
        path: "product",
        component: ProductComponent,
        children: [
          {
            path: "add",
            component: AddProductComponent
          },
          {
            path: "view",
            component: ViewProductsComponent
          }
        ]
      }
    ]
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  { 
    path: '', 
    redirectTo: '/home/dashboard', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
