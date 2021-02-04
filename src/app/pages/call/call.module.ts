import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CallRoutingModule} from './call-routing.module';
import {CallsComponent} from './components/calls/calls.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CallsComponent],
  imports: [
    CommonModule,
    CallRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CallModule {
}
