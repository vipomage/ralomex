import { Award } from './award';
import { Project } from './project';
import { News } from './news';
import { HomeProduct } from './home-product';

export enum ProductTypes {
  PLOUGHS = 'ploughs',
  DISKS = 'disks',
  SPRAYERS = 'sprayers',
  SHREDDERS = 'shredders',
  ROLLERS = 'rollers',
  CULTIVATORS = 'cultivators',
}

export interface ConfigSchema {
  headers: HeadersSchema;
  objectSchemas;
  toastr;
}
export type HeadersSchema = {[key in ProductTypes]: Header[]}

export interface Header {
  key: string;
  value: string;
}

export interface FirebaseResponseModel {
  [propName: string]: IUnion;
}

export type IUnion = Award | Project | News | HomeProduct | Exposition | Innovation;

export enum DbLocation {
  AWARDS = 'awards',
  NEWS = 'news',
  HOME_PRODUCTS = 'homeProducts',
  PROJECTS = 'projects',
  EXPOSITIONS = 'expositions',
  INNOVATIONS = 'innovations',
  CERTIFICATES = 'certificates',
}
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
  sprayers: BaseSchemaModel<Sprayer>;
}

export interface Innovation {
  heading: string;
  image: string;
  data: string;
  timeStamp: number;
}

export interface Exposition {
  heading: string;
  excerpt: string;
  image: string;
  data: string;
  timeStamp: number;
}

export interface TeamMember {
  name: string;
  description: string;
  duty: string;
  email: string;
  phone: string;
  avatarUrl: string;
}

export interface BaseSchemaModel<T> {
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

export interface Sprayer {
  model: string;
  tankCapacity: string;
  widthWork: string;
  fanDiameter: string;
  sprayersCount: string;
  pumpType: string;
  image: string | string[];
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
  image: string | string[];
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
  image: string | string[];
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
  image: string | string[];
}

export interface Plough {
  bodiesDistance: string;
  clearance: string;
  depthWork: string;
  description: string;
  image?: string | string[];
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
  image?: string | string[];
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
