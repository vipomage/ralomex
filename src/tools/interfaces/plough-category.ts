import { Plough } from './plough';

export interface PloughCategory {
  name: String;
  images: String[];
  description: String;
  collection?:Plough[];
}
