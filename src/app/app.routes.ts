import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home/home.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'product/:id', component:HomeComponent}
  
];
