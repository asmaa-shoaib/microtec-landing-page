import { Component, Input } from '@angular/core';
import { ProductItem } from '../../core/home/products/products.component';
import { Route, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
@Input()item: ProductItem={
  id: 1,
  title: 'Product Title',
  description: 'Product Description',
  img: '/assets/images/product-image.jpg'
}
@Input()isMain: boolean = false;
constructor(private router: Router){}
}
