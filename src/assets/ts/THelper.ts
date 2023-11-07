import {
    AxesHelper,
    GridHelper,
    Object3D,
} from 'three'


export const helperList:Object3D[] = []
const axesHelper: AxesHelper = new AxesHelper(100);

const gridHelper:GridHelper = new GridHelper(200,10,'rgb(200,200,200)','rgb(100,100,100)')


helperList.push(axesHelper,gridHelper)