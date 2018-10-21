import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }  
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });