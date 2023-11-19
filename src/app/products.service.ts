import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public name$: Observable<string>;
  constructor(private http: HttpClient) {
    this.name$ = this.http
      .get<{ body: string }>('getProduct')
      .pipe(map(({ body }) => body));
  }
}
