import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any, limit?: any): any {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    } else {
      return value;
    }
  }

}
