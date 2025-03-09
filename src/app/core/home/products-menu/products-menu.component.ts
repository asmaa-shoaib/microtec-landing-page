import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-menu.component.html',
  styleUrl: './products-menu.component.scss'
})
export class ProductsMenuComponent {

  activeTab: string = 'sales';
  selectTab(tab: string): void {
    console.log(tab)
    this.activeTab = tab;
  }
}
