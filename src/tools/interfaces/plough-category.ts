import { Plough } from './plough';

export interface PloughCategory {
  name: string;
  image: string[]|string;
  description: string;
  collection?:Plough[]|Plough;
}
