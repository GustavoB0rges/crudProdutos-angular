import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input/input-text/input-text.component';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    InputTextComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule
    
  ],exports: [
    InputTextComponent, StepperComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
