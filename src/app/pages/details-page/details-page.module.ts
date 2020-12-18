import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPageRoutingModule } from './details-page-routing.module';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    DetailsPageRoutingModule
  ]
})
export class DetailsPageModule { }
