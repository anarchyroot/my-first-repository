/**
 * Created by matthewaltomare on 10/05/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';

const appRoutes: Routes = [
  {
      path:'',
    component: HomeComponent
  },

  {
      path:'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
