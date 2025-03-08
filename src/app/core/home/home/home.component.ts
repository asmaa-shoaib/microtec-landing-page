import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProductsComponent } from "../products/products.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductsComponent, ReviewsComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
