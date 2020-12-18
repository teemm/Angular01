import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {NewsesComponent} from './newses/newses.component';
import {DetailComponent} from './detail/detail.component';
import {Detail1Component} from './detail1/detail1.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'about',
    component: AboutComponent,
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'news',
    component: NewsesComponent,
    children: [
      {
        path: 'detail1',
        component: Detail1Component
      },
      {
        path: 'detail',
        component: DetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    NewsesComponent,
    DetailComponent,
    Detail1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
