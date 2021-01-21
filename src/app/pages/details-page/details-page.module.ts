import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DetailsPageRoutingModule} from './details-page-routing.module';
import {MainComponent} from './components/main/main.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DetailsPageRoutingModule,
  ],
  providers: []
})
export class DetailsPageModule {
}
