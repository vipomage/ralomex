export interface Plough {
  model: String;
  reqHP: [Number];
  depthWork: [String];
  widthWork: [Number];
  speed: [Number];
  productivity: [Number];
  weight: Number;
  clearance: Number;
  description?: String;
  image?: String;
}
