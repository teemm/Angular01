import {Component, OnInit} from '@angular/core';
import {NiewsesService} from '../../../../services/niewses.service';
import {MainData} from '../../../../models/main-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public data: MainData[] = [];

  constructor(private niewsesService: NiewsesService) {
  }

  ngOnInit(): void {
    this.data = this.niewsesService.data;
  }

}
