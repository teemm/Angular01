import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
<<<<<<< HEAD
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});
=======
     platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
   });
>>>>>>> 0546f9f08de2bfddc5373b6f5bbe2af2b17b61e3
