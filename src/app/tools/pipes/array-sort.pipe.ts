import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class ArraySortPipe implements PipeTransform {
  transform(obj: any, field: string): any[] {
    Object.values(obj).sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return obj;
  }
}
