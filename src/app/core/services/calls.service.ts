import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CallsService {

  constructor(private httpClient: HttpClient) {
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
