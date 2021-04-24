import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from 'src/app/modules/auth/product/product-form/product-form.component';

import { MaterialModule } from '../../../shared/Material/material.module';
import { ProductIndexComponent } from './product-index/product-index.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: 'index', component: ProductIndexComponent },
  { path: 'new', component: ProductFormComponent },
  { path: ':id/edit', component: ProductFormComponent },
  { path: ':id/delete', component: ProductFormComponent },
  { path: ':id/view', component: ProductFormComponent },
];

@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
