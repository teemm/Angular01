import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customDate',
  pure: false
})

export class CustomDatePipe implements PipeTransform {
  public currentDate: Date = new Date();

  transform(value: Date, ...args: unknown[]): unknown {
    if (value.getDate() === this.currentDate.getDate()) {
      return 'დღეს';
    }
    return value.getDate();
  }
}
