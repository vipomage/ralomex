import { Award } from './award';
import { Project } from './project';
import { News } from './news';
import { HomeProduct } from './home-product';

export interface DatabaseSchema {
  awards: AwardsSchema;
  homeProducts: HomeProductsSchema;
  news: NewsSchema;
  ploughs: PloughsSchema;
  disks: DisksSchema;
  projects: ProjectsSchema;
}

export type IUnion = Award | Project | News | HomeProduct;
export type ProductIUnion = Plough | Disk;

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

export interface PloughsSchema {
  description: string;
  image: string|string[];
  types: {
    [propName: string]: {
      description: string;
      image: string;
      series: {
        [propName: string]: PloughSerie;
      };
    };
  };
}

export interface PloughSerie {
  collection: {
    [propName: string]: Plough;
  };
  description: string;
  image: string;
  name: string;
}

export interface Plough {
  bodiesDistance: string;
  clearance: string;
  depthWork: string;
  description: string;
  image: string|string[];
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

export interface DisksSchema {
  description: string;
  image: string;
  types: {
    [propName: string]: {
      description: string;
      image: string;
      series: {
        [propName: string]: {
          collection: {
            [propName: string]: Disk;
          };
          description: string;
          image: string;
          name: string;
        };
      };
    };
  };
}
