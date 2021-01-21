import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomePageRoutingModule} from './home-page-routing.module';
import {MainComponent} from './components/main/main.component';
import {DetailsPageModule} from '../details-page/details-page.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule,
    DetailsPageModule,
  ],
  providers: []

})
export class HomePageModule {
}
