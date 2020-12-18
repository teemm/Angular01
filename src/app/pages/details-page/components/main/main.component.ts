import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

interface DataInterFace {
  title: string;
  id: number;
  img: string;
  longText: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data: DataInterFace[] = [
    {
      id: 1,
      img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
      title: 'Interface Design',
      longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Duis scelerisque arcu eget sem efficitur, in imperdiet magna finibus.' +
        ' Morbi quis est a dolor auctor luctus. Proin in libero quis tortor facilisis ' +
        'euismod. Phasellus pellentesque pharetra enim tincidunt blandit. Curabitur ' +
        'elementum condimentum ipsum a mollis. Morbi fermentum velit et viverra ullamcorper. ' +
        'Praesent sed sem mattis, placerat elit et, vestibulum leo. Vivamus posuere eu libero et ' +
        'sollicitudin. In hac habitasse platea dictumst. Ut maximus augue semper, vulputate ' +
        'libero sed, semper tellus.\n',
    },
    {
      id: 2,
      img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
      title: 'Interface Design 2',
      longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Duis scelerisque arcu eget sem efficitur, in imperdiet magna finibus.' +
        ' Morbi quis est a dolor auctor luctus. Proin in libero quis tortor facilisis ' +
        'euismod. Phasellus pellentesque pharetra enim tincidunt blandit. Curabitur ' +
        'elementum condimentum ipsum a mollis. Morbi fermentum velit et viverra ullamcorper. ' +
        'Praesent sed sem mattis, placerat elit et, vestibulum leo. Vivamus posuere eu libero et ' +
        'sollicitudin. In hac habitasse platea dictumst. Ut maximus augue semper, vulputate ' +
        'libero sed, semper tellus.\n',
    },
    {
      id: 3,
      img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
      title: 'Interface Design 3',
      longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Duis scelerisque arcu eget sem efficitur, in imperdiet magna finibus.' +
        ' Morbi quis est a dolor auctor luctus. Proin in libero quis tortor facilisis ' +
        'euismod. Phasellus pellentesque pharetra enim tincidunt blandit. Curabitur ' +
        'elementum condimentum ipsum a mollis. Morbi fermentum velit et viverra ullamcorper. ' +
        'Praesent sed sem mattis, placerat elit et, vestibulum leo. Vivamus posuere eu libero et ' +
        'sollicitudin. In hac habitasse platea dictumst. Ut maximus augue semper, vulputate ' +
        'libero sed, semper tellus.\n',
    },
    {
      id: 4,
      img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
      title: 'Interface Design 4',
      longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Duis scelerisque arcu eget sem efficitur, in imperdiet magna finibus.' +
        ' Morbi quis est a dolor auctor luctus. Proin in libero quis tortor facilisis ' +
        'euismod. Phasellus pellentesque pharetra enim tincidunt blandit. Curabitur ' +
        'elementum condimentum ipsum a mollis. Morbi fermentum velit et viverra ullamcorper. ' +
        'Praesent sed sem mattis, placerat elit et, vestibulum leo. Vivamus posuere eu libero et ' +
        'sollicitudin. In hac habitasse platea dictumst. Ut maximus augue semper, vulputate ' +
        'libero sed, semper tellus.\n',
    }
  ];
  public printData: any = null;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id: number = parseFloat(this.router.snapshot.params.id);
    this.printData = this.data.find(item => item.id === id);
  }

}
