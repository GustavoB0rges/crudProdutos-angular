import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'actions'];

  constructor(private productService: ProductService, private router: Router) { }

  

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      console.log(products)
    })
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/auth/products/new'])
  }

  deleteProduct(row: any): void {
    const id = row.id;
    this.productService.delete(id).subscribe(() => {
      this.productService.showMessage("Produto excluido com sucesso!");
      this.ngOnInit();
    });
  }

}
