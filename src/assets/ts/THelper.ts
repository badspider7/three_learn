import {
    AxesHelper,
    GridHelper,
    Object3D,
    PointLightHelper,
    CameraHelper
} from 'three'
import { pointLight } from './TLights'
import {TEngine} from './TEngine'

// const camera = TEngine.camera

// console.log(new TEngine())
export const helperList:Object3D[] = []
const axesHelper: AxesHelper = new AxesHelper(100);

const gridHelper: GridHelper = new GridHelper(200, 10, 'rgb(200,200,200)', 'rgb(100,100,100)')

const pointLightHelper: PointLightHelper = new PointLightHelper(pointLight, 10)

// const cameraHelper: CameraHelper = new CameraHelper(camera)


helperList.push(axesHelper,gridHelper,pointLightHelper)