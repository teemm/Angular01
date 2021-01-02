import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(item => item.HomePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details-page/details-page.module').then(item => item.DetailsPageModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./pages/forms-examples/forms-examples.module').then(item => item.FormsExamplesModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(item => item.ContactModule)
  }, {
    path: 'calls',
    loadChildren: () => import('./pages/call/call.module').then(t => t.CallModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
