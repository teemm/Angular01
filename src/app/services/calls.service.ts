import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CallsService {

  constructor(private httpClient: HttpClient) {
  }

  getData(): Observable<any> {
    return this.httpClient.get('tasks');
  }

  deleteItem(id: number): Observable<any> {
    return this.httpClient.delete('tasks/' + id);
  }

  activeItem(item: any): Observable<any> {
    const url = 'check/' + item.id;
    return this.httpClient.post(url, {});
  }

  deActiveItem(item: any): Observable<any> {
    const url = 'uncheck/' + item.id;
    return this.httpClient.post(url, {});
  }

  createItem(data: any): Observable<any> {
    const url = 'tasks/create';
    return this.httpClient.post(url, data);
  }
}
