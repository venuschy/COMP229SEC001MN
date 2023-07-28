import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {
  products?: Product[];
  currentProduct?: Product;
  currentIndex = -1;
  name = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  refreshList(): void {
    this.currentProduct = undefined;
    this.currentIndex = -1;
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.products = data;
    });
  }

  setActiveProduct(product: Product, index: number): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }
}

 