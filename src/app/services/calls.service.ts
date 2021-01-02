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
    return this.httpClient.get('https://us-central1-js04-b4877.cloudfunctions.net/tasks');
  }

  deleteItem(id: number): Observable<any> {
    return this.httpClient.delete('https://us-central1-js04-b4877.cloudfunctions.net/tasks/' + id);
  }

  activeItem(item: any): Observable<any> {
    const url = 'https://us-central1-js04-b4877.cloudfunctions.net/tasks/check/' + item.id;
    return this.httpClient.post(url, {});
  }

  deActiveItem(item: any): Observable<any> {
    const url = 'https://us-central1-js04-b4877.cloudfunctions.net/tasks/uncheck/' + item.id;
    return this.httpClient.post(url, {});
  }

  createItem(data: any): Observable<any> {
    const url = 'https://us-central1-js04-b4877.cloudfunctions.net/tasks/create';
    return this.httpClient.post(url, data);
  }
}
