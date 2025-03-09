import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {

  sectors = [
    { id:1,title: 'قطاع العقارات والمقاولات', image: '../../../../assets/images/solutions/istockphoto-1214351345-612x612.jpg' },
    { id:2,title: 'قطاع النقل', image: '../../../../assets/images/solutions/360_F_79935155_pvN2FCv0qgUntgpLKL7JskhS19LKuavZ.jpg'},
    { id:3,title: 'قطاع التصنيع', image: '../../../../assets/images/solutions/istockphoto-832282452-612x612.jpg' },
    { id:4,title: 'القطاع المالي', image: '../../../../assets/images/solutions/6298b33e6aafa619b517757c_Blog-Coverasdfghjs.jpg'},
    { id:5,title: 'قطاع المطاعم', image: '../../../../assets/images/solutions/restaurant-939435_640.jpg'}
  ];
  activeSector: any = this.sectors[4];
}
