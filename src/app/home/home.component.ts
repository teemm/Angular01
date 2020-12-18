import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, DoCheck {
  public arr = [
    {
      name: 'temo',
      age: 25,
      status: false,
    }, {
      name: 'toko',
      age: 22,
      status: true
    },
    {
      name: 'shako',
      age: 30,
      status: false,
    }
  ];
  public arr1: any[] = [];

  constructor(private router: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    // const age: number = Number(this.router.snapshot.queryParamMap.get('age'));
    // this.arr1 = this.arr.filter(item => item.age > age);
  }

  ngDoCheck(): void {
    const age: number = Number(this.router.snapshot.queryParamMap.get('age'));
    this.arr1 = this.arr.filter(item => item.age > age);
  }


  filterItems(data) {
    console.log(data);
    this.route.navigate(['home'], {queryParams: {age: data.age}});
  }
}
