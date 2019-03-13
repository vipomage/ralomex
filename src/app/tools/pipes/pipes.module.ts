import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { keyValueFilterPipe } from './key-value-filter.pipe';
import { ArraySortPipe } from './array-sort.pipe';
import { objectSplitToArray } from './split-array.pipe';

@NgModule({
  declarations: [keyValueFilterPipe, ArraySortPipe, objectSplitToArray],
  imports: [CommonModule],
  exports: [keyValueFilterPipe, ArraySortPipe, objectSplitToArray],
})
export class PipesModule {}
