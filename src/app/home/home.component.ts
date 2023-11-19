import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public title$: Observable<string>;

  constructor(private products: ProductsService) {
    console.log('HomeComponent Instantiated');
    this.title$ = this.products.name$;
  }
}
