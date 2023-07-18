import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbercero',
})
export class NumberceroPipe implements PipeTransform {
  transform(value: number, ...args: number[]): string {
    if (value >= 1 && value <= 9) {
      return '0' + value;
    }
    return value.toString();
  }
}
