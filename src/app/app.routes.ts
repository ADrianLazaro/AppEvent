import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        loadComponent: ()=> import('./components/home/home.component').then(m=>m.HomeComponent)
      },
      {
        path:'event/:id',
        loadComponent: () => import('./components/event-detail/event-detail.component').then(m => m.EventDetailComponent)
      }
    ]
  },
];
