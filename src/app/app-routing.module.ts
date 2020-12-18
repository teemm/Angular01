import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(item => item.HomePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details-page/details-page.module').then(item => item.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
