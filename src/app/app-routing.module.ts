import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './components/menu/menu.component';

const routes:Routes =[
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'contact', component:ContactComponent
  },
  {
    path: 'about', component:AboutComponent
  },
  {
    path: 'menu', component:MenuComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
