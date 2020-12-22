import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemaplteDriveComponent} from './componennts/temaplte-drive/temaplte-drive.component';
import {ReactiveComponent} from './componennts/reactive/reactive.component';
import {DynamicallyComponent} from './componennts/dynamically/dynamically.component';

const routes: Routes = [
  {
    path: 'template',
    component: TemaplteDriveComponent
  },
  {
    path: 'reactive',
    component: ReactiveComponent,
  },
  {
    path: 'dynamically',
    component: DynamicallyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsExamplesRoutingModule {
}
