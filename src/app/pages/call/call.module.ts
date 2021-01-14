import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CallRoutingModule} from './call-routing.module';
import {CallsComponent} from './components/calls/calls.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CallsResolver} from './resolvers/calls.resolver';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UrlInterceptor} from '../../url.interceptor';


@NgModule({
  declarations: [CallsComponent],
  imports: [
    CommonModule,
    CallRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class CallModule {
}
