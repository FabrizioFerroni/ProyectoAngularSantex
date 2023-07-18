import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url!: string;

  constructor(private http: HttpClient) {
    this.url = 'https://dummyjson.com/products?limit=100';
  }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }
}
