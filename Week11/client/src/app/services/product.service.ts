import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Product } from '../models/product.model'; 

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private dbPath = '/products';

  productsRef: AngularFirestoreCollection<Product>;

  constructor(private db: AngularFirestore) {
    this.productsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Product> {
    return this.productsRef;
  }

  create(product: Product): any {
    return this.productsRef.add({ ...product });
  }

  update(id: string, data: any): Promise<void> {
    return this.productsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.productsRef.doc(id).delete();
  }
}