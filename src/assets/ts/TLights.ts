import { AmbientLight, Object3D, PointLight, SpotLight } from "three";
// import { wall } from "./TBasicObject";

export const LightsList: Object3D[] = [];

//环境光
const ambientLight: AmbientLight = new AmbientLight("rgb(255, 255, 255)", 0.5);

//点光源
export const pointLight: PointLight = new PointLight(
  "rgb(255, 0, 0)",
  0.7,
  50,
  0.1
);

pointLight.position.set(30, 30, 30);

//模拟聚光灯
export const spotLight: SpotLight = new SpotLight(
  "rgb(255, 255, 255)",
  1,
  500,
  (Math.PI / 180) * 30,
  0,
  0
);

//聚光灯的投影，一个物体要有投影，必须本身，光照都要开启投影
spotLight.castShadow = true;

spotLight.position.set(0, 100, 400);

// spotLight.target = wall;

LightsList.push(ambientLight, pointLight);
