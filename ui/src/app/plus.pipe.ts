import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plus'
})
export class PlusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value >= 0) {
      return "+" + value
    }

    return value;
  }

}
