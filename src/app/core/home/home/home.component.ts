import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ProductsComponent } from "../products/products.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { CommonModule } from '@angular/common';
import { ProductsSectionComponent } from "../products-section/products-section.component";
import { SolutionsComponent } from "../solutions/solutions.component";
import { ServicesComponent } from "../services/services.component";
import { ClientsComponent } from "../clients/clients.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProductsComponent, ReviewsComponent, CommonModule, ProductsSectionComponent, SolutionsComponent, ServicesComponent, ClientsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
