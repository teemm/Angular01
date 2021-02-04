import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {CallsService} from './core/services/calls.service';
import {Meta, Title} from '@angular/platform-browser';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-app';

  constructor(private callsService: CallsService,
              private dinTitle: Title,
              private meta: Meta,
              @Inject(PLATFORM_ID) private platformId: any,
              private router: Router) {
    this.callsService.getData().subscribe((res) => {
      console.log(res);
    });
    if (isPlatformBrowser(this.platformId)) {
      const ww = window;
      ww.addEventListener('scroll', () => {
        console.log('tt');
      });
    }

    this.meta.addTags([
      {name: 'keywords', content: 'Angular, Universal, Example'},
      {name: 'description', content: 'Angular Universal Example'},
      {name: 'robots', content: 'index, follow'}
    ]);

    // console.log(this.meta.getTag("name='description'"));

    this.router.events.subscribe((res: RouterEvent) => {
      if (res instanceof NavigationEnd) {
        switch (res.url) {
          case '/home':
            this.dinTitle.setTitle('home page');
            this.updateMetaTags('home titpe', 'homepage Description', 'homepage imageUrl');
            break;
          case '/calls':
            this.dinTitle.setTitle('calls page');
            this.updateMetaTags('calls title', 'calls Description', 'calls imageUrl');
            break;
          default:
            this.dinTitle.setTitle('this is defoult title');
          // code block
        }
      }
    });
  }

  updateMetaTags(title: string, description: string, imgUrl: string): void {
    this.meta.updateTag({property: 'og:title', content: title});
    this.meta.updateTag({property: 'og:description', content: description});
    this.meta.updateTag({property: 'og:image', content: imgUrl});
  }
}
