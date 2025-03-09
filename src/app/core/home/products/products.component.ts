import { Component } from '@angular/core';
import { ProductsMenuComponent } from "../products-menu/products-menu.component";
import { ProductItemComponent } from "../../../common-component/product-item/product-item.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsMenuComponent, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  items: ProductItem[] = [{
    id: 1,
    title: 'ERP',
    description: 'نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة',
    img: '../../../../assets/images/products/product1.png',
  },{
    id: 2,
    title: 'نظام نقاط البيع المتنقلة',
    description: 'نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة',
    img: '../../../../assets/images/products/product2.png',
  },{
    id: 3,
    title: 'نظام نقاط البيع المتنقلة',
    description: 'نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة',
    img: '../../../../assets/images/products/product3.png',
  },{
    id: 4,
    title: 'نظام نقاط البيع المتنقلة',
    description: 'نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة',
    img: '../../../../assets/images/products/product3.png',
  },{
    id: 5,
    title: 'نظام نقاط البيع المتنقلة',
    description: 'نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة نظام نقاط البيع المتنقلة',
    img: '../../../../assets/images/products/product 5.png',
  },
];
}
export interface ProductItem{
  id: number;
  title: string;
  description: string;
  img: string;
}
