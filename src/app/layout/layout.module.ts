import { AppRoutingModule } from './../app-routing.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/Material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
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
