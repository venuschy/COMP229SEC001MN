import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    published: undefined,
    category: ''
  };

  submitted = false;

  categories: Category[] = []

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.categories = data;
    });
  }

  saveProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      published: this.product.published,
      category: this.product.category
    };

    this.productService.create(data).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      description: '',
      price: 0,
      published: undefined,
      category: ''
    };
  }
}