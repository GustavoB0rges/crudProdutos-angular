import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input/input-text/input-text.component';



@NgModule({
  declarations: [
    InputTextComponent
  ],
  imports: [
    CommonModule
    
  ],exports: [
    InputTextComponent
  ]
})
export class SharedModule { }
