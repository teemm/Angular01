import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CallsService} from '../../../services/calls.service';

@Injectable({
  providedIn: 'root'
})

export class CallsResolver implements Resolve<boolean> {
  constructor(private callsService: CallsService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return this.callsService.getData();
  }
}
