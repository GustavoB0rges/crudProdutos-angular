import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void { }

  onChangeToggleMenu(): void {
    this.sidenav.toggle();
  }

}
