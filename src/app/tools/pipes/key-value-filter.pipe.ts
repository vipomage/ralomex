import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyValueFilter',
})
export class keyValueFilterPipe implements PipeTransform {
  transform(map: { [key: string]: any }, ...parameters: any[]) {
    if (!map) return undefined;
    return Object.keys(map).map(key => ({ key: key, value: map[key] }));
  }
}
