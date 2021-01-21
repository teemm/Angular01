import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CallsComponent} from './components/calls/calls.component';
import {CallsResolver} from './resovers/calls.resolver';

const routes: Routes = [
  {
    path: '',
    component: CallsComponent,
    resolve: {
      data: CallsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallRoutingModule {
}
