export interface Plough {
  model: string;
  workBodyCount: number;
  reqHP: string;
  mainBeam: string;
  bodiesDistance: number;
  widthWork: string;
  clearance: number;
  depthWork: string;
  transportSpeed: string;
  workSpeed: number;
  productivity: string;
  weight: number;

  description?: string;
  image?: string[] | string;
}
