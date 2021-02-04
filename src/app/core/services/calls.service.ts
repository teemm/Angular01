import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, skip, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CallsService {
  public testSubject = new BehaviorSubject<string>('test');

  constructor(private httpClient: HttpClient) {
    setTimeout(() => {
      this.testSubject.next('from constructur');
    }, 2000);
  }

  test(): void {
    const data = this.httpClient.get<any>('tasks');
    // const data3 = interval(1000);
    setTimeout(() => {
      this.testSubject.next('from test');
    }, 4000);
    const data1 = of(1, 2, 3, 4);
    const data2 = data1.pipe(
      skip(2),
      tap(val => console.log(`BEFORE MAP: ${val}`)),
      // map(val => val + 10),
      // filter( val => val % 2 === 0)
      // first()
      // take(3)
    );
    // console.log(data, data1);
  }

  getData(): Observable<any> {
    return this.httpClient.get<any>('tasks').pipe(map(item => item.data));
  }

  deleteItem(id: number): Observable<any> {
    const url = `tasks/${id}`;
    return this.httpClient.delete(url);
  }

  activeItem(item: any): Observable<any> {
    const url = `tasks/check/${item.id}`;
    return this.httpClient.post(url, {});
  }

  deActiveItem(item: any): Observable<any> {
    const url = `tasks/uncheck/${item.id}`;
    return this.httpClient.post(url, {});
  }

  createItem(data: any): Observable<any> {
    const url = `tasks/create`;
    return this.httpClient.post(url, data);
  }
}
