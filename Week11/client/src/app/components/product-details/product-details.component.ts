import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  @Input() product?: Product;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentProduct: Product = {
    name: '',
    description: '',
    published: false
  };

  message = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentProduct = { ...this.product };
  }

  updatePublished(status: boolean): void {
    if (this.currentProduct.id) {
      this.productService.update(this.currentProduct.id, { published: status })
        .then(() => {
          this.currentProduct.published = status;
          this.message = 'The status was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

  updateProduct(): void {
    const data = {
      name: this.currentProduct.name,
      description: this.currentProduct.description
    };

    if (this.currentProduct.id) {
      this.productService.update(this.currentProduct.id, data)
        .then(() => this.message = 'The product was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteProduct(): void {
    if (this.currentProduct.id) {
      this.productService.delete(this.currentProduct.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The product was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
