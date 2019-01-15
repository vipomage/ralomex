export interface Plough {
  model: String;
  type: String;
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
