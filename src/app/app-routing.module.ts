import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

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
    loadChildren: () => import('./pages/contact/contact.module').then(item => item.ContactModule),
    canActivate: [AuthGuard]
  }, {
    path: 'directives',
    loadChildren: () => import('./pages/directives/directives.module').then(item => item.DirectivesModule),
    canActivate: [AuthGuard]
  }, {
    path: 'calls',
    loadChildren: () => import('./pages/call/call.module').then(t => t.CallModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
