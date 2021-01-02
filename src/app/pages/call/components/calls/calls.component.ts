import {Component, OnDestroy, OnInit} from '@angular/core';
import {CallsService} from '../../../../services/calls.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent implements OnInit, OnDestroy {
  public data: any[] = null;
  public form: FormGroup;
  public errors = false;
  private subscription: Subscription = new Subscription();

  constructor(private callsService: CallsService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getData();
    this.form = this.fb.group({
      text: ['', [Validators.required]]
    });
  }

  delete(item): void {
    this.subscription.add(
      this.callsService.deleteItem(item.id)
        .subscribe((res) => {
          this.getData();
        }));

  }

  getData(): void {
    this.callsService.getData()
      .subscribe((res) => {
          this.data = res.data;
        },
        (error => {
          this.errors = true;
        })
      );
  }

  activateItem(item): void {
    this.subscription.add(
      this.callsService.activeItem(item).subscribe((res) => {
        if (res.status === 'ok') {
          this.getData();
        }
      })
    );

  }

  deActivateItem(item): void {
    this.subscription.add(
      this.callsService.deActiveItem(item).subscribe((res) => {
        if (res.status === 'ok') {
          this.getData();
        }
      })
    );
  }

  checkStatus(status, item): void {
    if (status.target.checked) {
      this.activateItem(item);
    } else {
      this.deActivateItem(item);
    }
  }

  submitForm(form: FormGroup): void {
    if (form.valid) {
      this.callsService.createItem(form.value).subscribe((res) => {
        if (res.status === 'ok') {
          this.getData();
          this.form.reset();
        }
      });
    }
  }

  trackByFn(index): number {
    return index;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
