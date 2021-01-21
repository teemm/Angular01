import {Component} from '@angular/core';
import {CallsService} from './core/services/calls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-app';

  constructor(private callsService: CallsService) {
    this.callsService.getData().subscribe((res) => {
      console.log(res);
    })
  }
}
