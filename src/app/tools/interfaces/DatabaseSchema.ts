import { Award } from './award';
import { Project } from './project';
import { News } from './news';
import { HomeProduct } from './home-product';

export interface ConfigSchema{
  headers: HeadersSchema,
  toastr
}
export interface HeadersSchema{
  disks:Header[],
  ploughs:Header[],
  cultivators:Header[],
  rollers:Header[],
  shredders:Header[],
  sprayers:Header[]
}
export interface Header {
  key:string,
  value:string
}

export type IUnion = Award | Project | News | HomeProduct;

export type ProductIUnion = Plough | Disk | Cultivator | Roller | Shredder | Sprayer;

export interface DatabaseSchema {
  awards: AwardsSchema;
  homeProducts: HomeProductsSchema;
  news: NewsSchema;
  projects: ProjectsSchema;
  ploughs: BaseSchemaModel<Plough>;
  disks: BaseSchemaModel<Disk>;
  cultivators: BaseSchemaModel<Cultivator>;
  rollers: BaseSchemaModel<Roller>;
  shredders: BaseSchemaModel<Shredder>;
  sprayers: BaseSchemaModel<Sprayer>
}

export interface BaseSchemaModel<T>{
  description: string;
  image: string;
  types: {
    [propName: string]: {
      description: string;
      image: string;
      series: {
        [propName: string]: {
          collection: {
            [propName: string]: T;
          };
          description: string;
          image: string;
          name: string;
        };
      };
    };
  };
}

export interface Sprayer{
  model: string;
  tankCapacity:string,
  widthWork:string,
  fanDiameter:string,
  sprayersCount:string,
  pumpType:string,
}

export interface Shredder {
  model: string;
  shreddersCount: string;
  reqHp: string;
  workingWidth: string;
  transportWidth: string;
  transportSpeed: string;
  workSpeed: string;
  productivity: string;
  weight: string;
}

export interface Roller {
  model: string;
  reqHP: string;
  depthWork: string;
  widthWork: string;
  transportWidth: string;
  transportSpeed: string;
  workSpeed: string;
  productivity: string;
  weight: string;
}

export interface Cultivator {
  model: string;
  workBodyCount: string;
  reqHp: string;
  bodySpacing: string;
  rowCount: string;
  widthWork: string;
  transportWidth: string;
  bodyProtection: string;
  depthWork: string;
  transportSpeed: string;
  workSpeed: string;
  productivity: string;
  weight: string;
}

export interface Plough {
  bodiesDistance: string;
  clearance: string;
  depthWork: string;
  description: string;
  image: string | string[];
  mainBeam: string;
  model: string;
  productivity: string;
  reqHP: string;
  transportSpeed: string;
  weight: string;
  widthWork: string;
  workBodyCount: string;
  workSpeed: string;
}

export interface Disk {
  model: string;
  diskCount: string;
  reqHP: string;
  diskDiameter: string;
  axisSize: string;
  workWidth: string;
  transportWidth: string;
  diskWorkingDepth: string;
  transportSpeed: string;
  workSpeed: string;
  productivity: string;
  weightWoRotors: string;
}

export interface ProjectsSchema {
  [propName: string]: {
    content: string;
    heading: string;
    image?: string | string[];
  };
}

export interface AwardsSchema {
  [propName: string]: {
    content: string;
    heading: string;
    image: string | string[];
  };
}

export interface HomeProductsSchema {
  [propName: string]: {
    heading: string;
    href: string;
    image: string;
  };
}

export interface NewsSchema {
  [propName: string]: {
    content: string;
    heading: string;
    image?: string | string[];
    timeStamp: number;
  };
}
