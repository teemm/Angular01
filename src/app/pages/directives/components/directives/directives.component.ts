import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  public data1 = ['happy', 'sad', 'funny', 'supperHappy'];
  public activeValue = 'funny1';
  public activeColor: string = 'aqua';

  constructor() {
  }

  ngOnInit(): void {
  }

  setColor(color: string): void {
    this.activeColor = color;
  }


}
