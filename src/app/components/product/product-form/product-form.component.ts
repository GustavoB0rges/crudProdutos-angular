import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  title: any = null;
  form: FormGroup;
  operation: 'view' | 'new' | 'edit' = 'new';
 


  constructor(private productService: ProductService,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required, Validators.maxLength(120)]),
      price: new FormControl(null, [Validators.required, Validators.min(0)])

    });
  }

  ngOnInit(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.title = 'Editando produto';
      this.operation = 'edit';
      this.productService.readByid(id).subscribe(response => {
        this.form.patchValue(response);
        // this.form.get('name')?.setValue(response.name);
      });
    } else {
      this.title = 'Adicionando produto';
      this.operation = 'new';
    }

  }
  saveProduct(): void {
    if (this.operation === 'new') {
      this.createProduct();
    } else {
      this.updateProduct();
    }
  }
  
  createProduct(): void {
    this.productService.create(this.form.value).subscribe(() => {
      this.productService.showMessage('sucesso!');
      this.router.navigate(['/products/index'])
    })
  }

  updateProduct(): void {
    this.productService.update(this.form.value).subscribe(() => {
      this.productService.showMessage('Produto atualizado!');
      this.router.navigate(['/products/index']);
    })
  }

  
  cancel(): void {
    this.router.navigate(['/products/index']);

  }
}
