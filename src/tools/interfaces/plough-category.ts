import { Plough } from './plough';

export interface PloughCategory {
  name: String;
  image: String[]|String;
  description: String;
  collection?:Plough[]|Plough;
}
