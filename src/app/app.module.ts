import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {UrlInterceptor} from './core/interceptors/url.interceptor';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: UrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
