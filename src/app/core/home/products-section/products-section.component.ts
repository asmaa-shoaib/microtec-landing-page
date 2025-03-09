import { Component } from '@angular/core';
import { ProductItemComponent } from "../../../common-component/product-item/product-item.component";
import { ProductsComponent } from "../products/products.component";
import { ProductsMenuComponent } from "../products-menu/products-menu.component";

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [ProductItemComponent, ProductsComponent, ProductsMenuComponent],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.scss'
})
export class ProductsSectionComponent {

}
