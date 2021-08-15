import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = true;
  formNameGroup : FormGroup;
  formPasswordGroup : FormGroup;
  formEmailGroup : FormGroup;
  formPhoneGroup : FormGroup;
  constructor(private fb: FormBuilder) { this.createForm(); }
  ngOnInit(): void {
  }
  createForm() {
  this.formNameGroup  = this.fb.group({
    userName: ['', Validators.required]
  });

  this.formPasswordGroup  = this.fb.group({
    passWord: ['', Validators.required]
  });
  this.formEmailGroup  = this.fb.group({
    emailID: ['', Validators.compose([Validators.required, Validators.email])]
  });
  this.formPhoneGroup  = this.fb.group({
    mobile: ['', Validators.compose([Validators.required, Validators.min(10)])]
  });
  }
}
