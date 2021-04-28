import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../shared/Material/material.module';
import { AppRoutingModule } from './../app-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './template/header/header.component';
import { NavComponent } from './template/nav/nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    LayoutComponent,
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
