import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NiewsesService} from '../../../../services/niewses.service';
import {MainData} from '../../../../models/main-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public printData: MainData = null;

  constructor(private router: ActivatedRoute,
              private niewsesService: NiewsesService) {
  }

  ngOnInit(): void {
    const id: number = parseFloat(this.router.snapshot.params.id);
    this.printData = this.niewsesService.data.find(item => item.id === id);
  }

}
