import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsExamplesRoutingModule} from './forms-examples-routing.module';
import {TemaplteDriveComponent} from './componennts/temaplte-drive/temaplte-drive.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveComponent} from './componennts/reactive/reactive.component';
import { DynamicallyComponent } from './componennts/dynamically/dynamically.component';


@NgModule({
  declarations: [TemaplteDriveComponent, ReactiveComponent, DynamicallyComponent],
  imports: [
    CommonModule,
    FormsExamplesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormsExamplesModule {
}
