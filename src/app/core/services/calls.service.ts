import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

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
    // timerOne emits first value at 1s, then once every 4s
//     const timerOne$ = timer(1000, 4000);
// // timerTwo emits first value at 2s, then once every 4s
//     const timerTwo$ = timer(2000, 4000);
// // timerThree emits first value at 3s, then once every 4s
//     const timerThree$ = timer(3000, 4000);
//     const user = of('user');
//     const request1 = of('request1', 'request4', 'test', 'etst', 'teasdas', 'teasd');
//     const request2 = of('request2', 'request3');
//     const age = 26;
//     combineLatest(user, request1, request2)
//       .subscribe(([user, request1, request2]) => {
//         console.log(
//           `Timer One Latest: ${user},
//            Timer Two Latest: ${request1},
//            Timer Three Latest: ${request2} from combine latest`);
//       });
//
//     zip(user, request1).pipe().subscribe(([res, res2]) => {
//       console.log(`Timer One Latest: ${res},
//            Timer Two Latest: ${res2} from zip`);
//     });
//
//     const test = 'Temo Pkhaladze' + age;
//     const test2 = `Temo Pkhaladze ${age}`;
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

  search(value): Observable<any> {
    return this.httpClient.get(`api/products?q=${value}`);
  }

  search1(value): Observable<any> {
    return of(value);
  }
}
