import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
    
  }
  form: FormGroup;

  
  constructor(private productService: ProductService,
    private router: Router) {
      this.form = new FormGroup({
      name: new FormControl(null)
      });
     }

  ngOnInit(): void {
    
  }
  createProduct(): void {

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('sucesso!!');

    }

    )

  }

  cancel(): void {
    this.router.navigate(['/products']);

  }
}
