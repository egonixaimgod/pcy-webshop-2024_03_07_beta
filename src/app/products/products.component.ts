import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private api: BaseService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.api.getProducts().subscribe({
      next: data => {
        this.products = data;
      },
      error: err => {
        console.log('Hiba! A dolgozók letöltése sikertelen!');
      }
    });
  }
}
