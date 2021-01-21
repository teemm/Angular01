import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NiewsesService} from '../../../../core/services/niewses.service';
import {MainData} from '../../../../core/models/main-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public printData: MainData = null;
  public date: Date = new Date();

  constructor(private router: ActivatedRoute,
              private niewsesService: NiewsesService) {
  }

  ngOnInit(): void {
    // console.log(this.date)
    const id: number = parseFloat(this.router.snapshot.params.id);
    this.printData = this.niewsesService.data.find(item => item.id === id);
    console.log(this.printData);
  }

}
