import { Injectable } from '@angular/core';
import {MainData} from '../models/main-data';

@Injectable({
  providedIn: 'root'
})

export class NiewsesService {
  public data: MainData[] = [
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
        'Morbi quis est a dolor auctor luctus. Proin in libero quis tortor facilisis ' +
        'euismod. Phasellus pellentesque pharetra enim tincidunt blandit. Curabitur ' +
        'elementum condimentum ipsum a mollis. Morbi fermentum velit et viverra ullamcorper. ' +
        'Praesent sed sem mattis, placerat elit et, vestibulum leo. Vivamus posuere eu libero et ' +
        'sollicitudin. In hac habitasse platea dictumst. Ut maximus augue semper, vulputate ' +
        'libero sed, semper tellus.\n',
    }
  ];
}
