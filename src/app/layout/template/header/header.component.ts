import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/modules/auth/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() changeToggleMenu = new EventEmitter();

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.changeToggleMenu.emit();
  }

}

