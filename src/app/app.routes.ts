import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/story/add-app-story';
import { AddProduct } from './Product/add-product';

export const routes: Routes = [
  {
    path: 'home', // ko code /home
    component: Home,
  },
  {
    path: 'about',
    component:About,
  },
  {
    path : 'contact',
    component: Contact,
  },
  { path: 'stories',
    component: Stories 
  },
  {
    path:'add-story',
    component: AddStory,
  },
  {
    path:'add-product',
    component:AddProduct,
  },
];
