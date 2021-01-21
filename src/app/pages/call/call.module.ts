import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CallRoutingModule} from './call-routing.module';
import {CallsComponent} from './components/calls/calls.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [CallsComponent],
  imports: [
    CommonModule,
    CallRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CallModule {
}
