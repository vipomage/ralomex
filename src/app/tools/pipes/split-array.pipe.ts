import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectSplitToArray',
})
export class objectSplitToArray implements PipeTransform {
  transform(obj: {}, chunks: number) {
    if (!obj) return;
    let array = Object.values(obj);
    let final = [];
    while (array.length > 0) {
      final.push(array.splice(0, chunks));
    }
    return final;
  }
}
