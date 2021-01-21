import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {CustomDatePipe} from './pipes/custom-date.pipe';
import {HilightsDirective} from './direcives/hilights.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CustomDatePipe,
    HilightsDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CustomDatePipe,
    HilightsDirective
  ]
})
export class SharedModule {
}
