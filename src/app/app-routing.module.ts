import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductFormComponent } from "./components/product/product-form/product-form.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'products/index', component: ProductCrudComponent },
  { path: 'products/new', component: ProductFormComponent },
  { path: 'products/:id/edit', component: ProductFormComponent },
  { path: 'products/:id/view', component: ProductFormComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
