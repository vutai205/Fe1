import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: 'home', // ko code /home
    component: Home,
  },
  {
    path: 'about',
    component:About,
  }
];
