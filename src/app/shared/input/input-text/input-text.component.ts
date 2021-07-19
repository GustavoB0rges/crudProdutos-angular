import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() mensagem: string;

  @Output() aoClicar = new EventEmitter;

  key: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    console.log('cliquei')
    this.aoClicar.emit(this.key);
  }

}
