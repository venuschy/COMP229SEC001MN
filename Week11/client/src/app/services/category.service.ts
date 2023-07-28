import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

//const baseUrl = 'http://localhost:8080/api/categories';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private dbPath = '/categories'
  categoriesRef: AngularFirestoreCollection<Category>;

  constructor(private db: AngularFirestore) {
    this.categoriesRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Category> {
    return this.categoriesRef;
  }

  get(id: any): AngularFirestoreDocument<Category> {
    return this.categoriesRef.doc(id);
  }

  create(category: Category): any {
    return this.categoriesRef.add({ ...category });
  }

  update(id: any, data: any): Promise<void> {
    return this.categoriesRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.categoriesRef.doc(id).delete();
  }

  //deleteAll(): Observable<any> {
  //return this.categoriesRef.delete();
  //}

  findByName(name: string): AngularFirestoreCollection<Category> {
    return this.categoriesRef;
  }
}